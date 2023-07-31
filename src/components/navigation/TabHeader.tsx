import { NavigationProps } from '@interfaces';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '@utils';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

const TabHeader = () => {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.headerGreeting}>Good morning</Text>
        <View style={styles.headerBox}>
          <View style={styles.headerDetail}>
            <Image style={styles.headerImage} source={require('@images/beejay_dp.png')} />
            <Text style={styles.headerName}>John Jane Doe</Text>
          </View>
          <TouchableOpacity onPress={() => navigate("Cart")}>
            <Svg height={35} width={35} viewBox="0 0 35 35">
              <Path
                fill="black"
                d={"M5.46875 4.375C5.17867 4.375 4.90047 4.49023 4.69535 4.69535C4.49023 4.90047 4.375 5.17867 4.375 5.46875C4.375 5.75883 4.49023 6.03703 4.69535 6.24215C4.90047 6.44727 5.17867 6.5625 5.46875 6.5625H6.00688C6.24437 6.56291 6.47529 6.64062 6.66472 6.78387C6.85415 6.92713 6.9918 7.12815 7.05688 7.35656L10.5263 19.4972C10.7225 20.1823 11.1364 20.7849 11.7055 21.2139C12.2746 21.6429 12.9679 21.875 13.6806 21.875H23.6753C24.3312 21.8751 24.9721 21.6786 25.5153 21.3109C26.0584 20.9432 26.4789 20.4212 26.7225 19.8122L29.9469 11.7491C30.0794 11.4173 30.1287 11.0581 30.0904 10.7028C30.052 10.3476 29.9273 10.0072 29.727 9.71132C29.5267 9.41544 29.2571 9.17312 28.9415 9.00554C28.626 8.83796 28.2742 8.75023 27.9169 8.75H9.73L9.15906 6.755C8.96334 6.06982 8.54988 5.46697 7.98118 5.03759C7.41249 4.6082 6.71947 4.37562 6.00688 4.375H5.46875ZM12.6306 18.8934L10.3556 10.9375H27.9147L24.6903 19.0006C24.6091 19.2034 24.469 19.3772 24.2881 19.4996C24.1072 19.622 23.8937 19.6874 23.6753 19.6875H13.6806C13.4431 19.6871 13.2122 19.6094 13.0228 19.4661C12.8334 19.3229 12.6957 19.1218 12.6306 18.8934ZM14.2188 30.625C14.6497 30.625 15.0763 30.5401 15.4744 30.3752C15.8725 30.2103 16.2343 29.9686 16.5389 29.6639C16.8436 29.3593 17.0853 28.9975 17.2502 28.5994C17.4151 28.2013 17.5 27.7747 17.5 27.3438C17.5 26.9128 17.4151 26.4862 17.2502 26.0881C17.0853 25.69 16.8436 25.3282 16.5389 25.0236C16.2343 24.7189 15.8725 24.4772 15.4744 24.3123C15.0763 24.1474 14.6497 24.0625 14.2188 24.0625C13.3485 24.0625 12.5139 24.4082 11.8986 25.0236C11.2832 25.6389 10.9375 26.4735 10.9375 27.3438C10.9375 28.214 11.2832 29.0486 11.8986 29.6639C12.5139 30.2793 13.3485 30.625 14.2188 30.625ZM14.2188 28.4375C13.9287 28.4375 13.6505 28.3223 13.4454 28.1171C13.2402 27.912 13.125 27.6338 13.125 27.3438C13.125 27.0537 13.2402 26.7755 13.4454 26.5704C13.6505 26.3652 13.9287 26.25 14.2188 26.25C14.5088 26.25 14.787 26.3652 14.9921 26.5704C15.1973 26.7755 15.3125 27.0537 15.3125 27.3438C15.3125 27.6338 15.1973 27.912 14.9921 28.1171C14.787 28.3223 14.5088 28.4375 14.2188 28.4375ZM22.9688 30.625C23.3997 30.625 23.8263 30.5401 24.2244 30.3752C24.6225 30.2103 24.9843 29.9686 25.2889 29.6639C25.5936 29.3593 25.8353 28.9975 26.0002 28.5994C26.1651 28.2013 26.25 27.7747 26.25 27.3438C26.25 26.9128 26.1651 26.4862 26.0002 26.0881C25.8353 25.69 25.5936 25.3282 25.2889 25.0236C24.9843 24.7189 24.6225 24.4772 24.2244 24.3123C23.8263 24.1474 23.3997 24.0625 22.9688 24.0625C22.0985 24.0625 21.2639 24.4082 20.6486 25.0236C20.0332 25.6389 19.6875 26.4735 19.6875 27.3438C19.6875 28.214 20.0332 29.0486 20.6486 29.6639C21.2639 30.2793 22.0985 30.625 22.9688 30.625ZM22.9688 28.4375C22.6787 28.4375 22.4005 28.3223 22.1954 28.1171C21.9902 27.912 21.875 27.6338 21.875 27.3438C21.875 27.0537 21.9902 26.7755 22.1954 26.5704C22.4005 26.3652 22.6787 26.25 22.9688 26.25C23.2588 26.25 23.537 26.3652 23.7422 26.5704C23.9473 26.7755 24.0625 27.0537 24.0625 27.3438C24.0625 27.6338 23.9473 27.912 23.7422 28.1171C23.537 28.3223 23.2588 28.4375 22.9688 28.4375Z"}
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    gap: 2,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: hp("8%"),
    paddingBottom: 10
  },
  headerGreeting: {
    fontFamily: fonts.I_400,
    fontSize: 15
  },
  headerBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerDetail: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between'
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  headerName: {
    fontFamily: fonts.I_700,
    fontSize: 20
  }
});