import { useAppSelector } from "@api/app/appHooks";
import { UPLOAD_IMAGE } from "@api/graphql";
import { getEntity } from "@api/slices/globalSlice";
import { useMutation } from "@apollo/client";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppTheme } from "@hooks";
import { fonts, showError, showSuccess } from "@utils";
import { ReactNativeFile } from "apollo-upload-client";
import { MediaTypeOptions, launchCameraAsync, launchImageLibraryAsync, requestCameraPermissionsAsync } from "expo-image-picker";
import React, { memo, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as mime from "react-native-mime-types";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import uuid from "react-native-uuid";

interface ImageUploaderInterface {
  buttonGap?: number;
  buttonPadV?: number;
  clear?: boolean;
  iconSize?: number;
  prevImage?: string;
  right?: number;
  size?: number;
  onUpload: (image: string) => void;
}

const generateFile = (uri: string, name: string) => {
  const type = mime.lookup(uri) || "image";
  const extension = mime.extension(type);
  return new ReactNativeFile({ uri, name: `${name}.${extension}`, type });
};

const ImageUploader = ({ buttonGap, buttonPadV, clear, iconSize, prevImage, right, size, onUpload }: ImageUploaderInterface) => {
  const entity = useAppSelector(getEntity);
  const { color } = useAppTheme();
  const [image, setImage] = useState<string>(prevImage ?? "");
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [uploadImage, { data, loading }] = useMutation(UPLOAD_IMAGE);

  const handleImageSelection = () => {
    Alert.alert("Add an Image!", "",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Take Photo", onPress: takePicture },
        { text: "Choose from Gallery", onPress: addImage }
      ]
    );
  };
  const takePicture = async () => {
    const permissionResult = await requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const res = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });
    if (!res.canceled) {
      if (res.assets[0].fileSize! > 10000000) showError("Image shouldn't be greater than 10mb");
      else {
        setImage(res.assets[0].uri);
        setIsSelected(true);
      }
    } else showError("Camera usage cancelled");
  };
  const addImage = async () => {
    let res = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });
    if (!res.canceled) {
      if (res.assets[0].fileSize! > 10000000) showError("Image shouldn't be greater than 10mb");
      else {
        setImage(res.assets[0].uri);
        setIsSelected(true);
      }
    } else showError("Image selection cancelled");
  };
  const upload = async () => {
    const name = entity?.firstName ?? entity?.businessName ?? "image", id = uuid.v4().toString();
    const file = generateFile(image, `${name}-${id}`), input = { id, image: file };
    try {
      await uploadImage({ variables: { input } });
    } catch {}
  };

  useEffect(() => {
    if (!!data) {
      onUpload(data.uploadImage);
      showSuccess("Image uploaded successfully");
      setIsSelected(false);
    };
  }, [data]);
  useEffect(() => {
    if (clear) setImage("");
  }, [clear]);
  return (
    <View style={{ gap: buttonGap ?? 10 }} testID="image uploader">
      <View style={[styles.imageBox, { backgroundColor: color.cardBg2, height: size ?? hp("15%"), width: size ?? hp("15%") }]}>
        {!!image ? (
          <Image style={styles.image} source={{ uri: image }} testID="user image" />
        ) : (
          <Text style={[styles.imageText, { color: color.mainText }]} testID="user image alt">Add an image</Text>
        )}
        <TouchableOpacity style={[styles.editImage, { right: right ?? 5 }]} onPress={handleImageSelection} testID="add image button">
          <MaterialCommunityIcons name="camera" size={iconSize ?? 30} color={color.mainGreen} />
        </TouchableOpacity>
      </View>
      {isSelected ? (
        <TouchableOpacity disabled={loading} onPress={upload} style={[styles.uploadBox, { borderColor: color.mainGreen, paddingVertical: buttonPadV ?? 5 }]} testID="upload button">
          {loading ? (
            <ActivityIndicator color={color.mainGreen} size={20} testID="upload image loading" />
          ) : (
            <Text style={[styles.uploadText, { color: color.mainGreen }]} testID="upload image button">Upload Image</Text>
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default memo(ImageUploader);

const styles = StyleSheet.create({
  imageBox: {
    alignItems: "center",
    borderColor: "rgba(76, 175, 80, .5)",
    borderWidth: 1,
    borderRadius: hp("50%"),
    justifyContent: "center",
  },
  image: {
    borderRadius: 1000,
    height: "100%",
    width: "100%"
  },
  imageText: {
    fontFamily: fonts.I_300,
    fontSize: 14
  },
  editImage: {
    position: "absolute",
    bottom: 0,
  },
  uploadBox: {
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  uploadText: {
    fontFamily: fonts.I_600,
    fontSize: 14
  }
});