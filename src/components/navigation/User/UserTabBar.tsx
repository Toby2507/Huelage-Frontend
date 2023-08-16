import { useAppTheme } from '@hooks';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { fonts } from '@utils';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Path, Svg } from 'react-native-svg';

const UserTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const { color } = useAppTheme();
  return (
    <View style={[styles.tabBg, { backgroundColor: color.main, paddingBottom: (insets.bottom + (Platform.OS === 'ios' ? 0 : 15)) }]}>
      {state.routes.map((route, idx) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        let iconPathD = "M13.4844 0.555516C13.9079 0.196838 14.445 0 15 0C15.555 0 16.0921 0.196838 16.5156 0.555516L28.2344 10.4977C28.4939 10.7177 28.7024 10.9915 28.8454 11.3002C28.9884 11.6089 29.0625 11.945 29.0625 12.2852V26.9774C29.0625 27.599 28.8156 28.1951 28.376 28.6347C27.9365 29.0742 27.3404 29.3211 26.7188 29.3211H17.7344C17.4236 29.3211 17.1255 29.1977 16.9057 28.9779C16.686 28.7581 16.5625 28.4601 16.5625 28.1493V18.3836H13.4375V28.1493C13.4375 28.4601 13.314 28.7581 13.0943 28.9779C12.8745 29.1977 12.5764 29.3211 12.2656 29.3211H3.28125C2.65965 29.3211 2.06351 29.0742 1.62397 28.6347C1.18443 28.1951 0.9375 27.599 0.9375 26.9774V12.2852C0.9375 11.5977 1.24062 10.943 1.76562 10.4977L13.4844 0.555516ZM15 2.34302L3.28125 12.2852V26.9774H11.0938V17.2118C11.0938 16.901 11.2172 16.6029 11.437 16.3831C11.6568 16.1634 11.9548 16.0399 12.2656 16.0399H17.7344C18.0452 16.0399 18.3432 16.1634 18.563 16.3831C18.7828 16.6029 18.9062 16.901 18.9062 17.2118V26.9774H26.7188V12.2852L15 2.34302Z";
        if (label === 'Home') iconPathD = "M28.0269 11.964L16.0259 0.641003C16.02 0.635885 16.0145 0.630372 16.0094 0.624502C15.5675 0.222668 14.9917 0 14.3945 0C13.7972 0 13.2214 0.222668 12.7796 0.624502L12.7631 0.641003L0.775566 11.964C0.531042 12.1888 0.335854 12.462 0.202354 12.7662C0.0688547 13.0703 -5.04686e-05 13.3989 2.77341e-08 13.7311V27.5998C2.77341e-08 28.2364 0.252878 28.8469 0.703003 29.297C1.15313 29.7471 1.76363 30 2.4002 30H9.60082C10.2374 30 10.8479 29.7471 11.298 29.297C11.7481 28.8469 12.001 28.2364 12.001 27.5998V20.3992H16.8014V27.5998C16.8014 28.2364 17.0543 28.8469 17.5044 29.297C17.9546 29.7471 18.5651 30 19.2016 30H26.4022C27.0388 30 27.6493 29.7471 28.0994 29.297C28.5496 28.8469 28.8024 28.2364 28.8024 27.5998V13.7311C28.8025 13.3989 28.7336 13.0703 28.6001 12.7662C28.4666 12.462 28.2714 12.1888 28.0269 11.964ZM26.4022 27.5998H19.2016V20.3992C19.2016 19.7626 18.9488 19.1521 18.4986 18.702C18.0485 18.2519 17.438 17.999 16.8014 17.999H12.001C11.3644 17.999 10.7539 18.2519 10.3038 18.702C9.85369 19.1521 9.60082 19.7626 9.60082 20.3992V27.5998H2.4002V13.7311L2.41671 13.7161L14.4012 2.39765L26.3872 13.7131L26.4037 13.7281L26.4022 27.5998Z";
        else if (label === 'Vendors') iconPathD = "M3 5V4C2.76891 4.00014 2.545 4.08031 2.36634 4.22689C2.18768 4.37346 2.06529 4.57739 2.02 4.804L3 5ZM27 5L27.98 4.804C27.9347 4.57739 27.8123 4.37346 27.6337 4.22689C27.455 4.08031 27.2311 4.00014 27 4V5ZM29 15V16C29.1479 15.9999 29.2939 15.967 29.4276 15.9037C29.5612 15.8404 29.6792 15.7482 29.7729 15.6338C29.8666 15.5194 29.9338 15.3856 29.9696 15.2422C30.0054 15.0987 30.009 14.949 29.98 14.804L29 15ZM1 15L0.02 14.804C-0.0089867 14.949 -0.00544594 15.0987 0.0303672 15.2422C0.0661803 15.3856 0.133374 15.5194 0.227108 15.6338C0.320841 15.7482 0.438781 15.8404 0.57243 15.9037C0.706079 15.967 0.852109 15.9999 1 16V15ZM7 21H6V22H7V21ZM23 21V22H24V21H23ZM0 30H30V28H0V30ZM2 15V29H4V15H2ZM26 15V29H28V15H26ZM3 6H27V4H3V6ZM26.02 5.196L28.02 15.196L29.98 14.804L27.98 4.804L26.02 5.196ZM29 14H1V16H29V14ZM1.98 15.196L3.98 5.196L2.02 4.804L0.02 14.804L1.98 15.196ZM2 2H28V0H2V2ZM6 15V21H8V15H6ZM7 22H23V20H7V22ZM24 21V15H22V21H24Z";
        else if (label === 'History') iconPathD = "M21.4125 22.6875L20.775 22.05C20.55 21.825 20.2815 21.7125 19.9695 21.7125C19.6575 21.7125 19.3885 21.825 19.1625 22.05C18.9375 22.275 18.825 22.5375 18.825 22.8375C18.825 23.1375 18.9375 23.4 19.1625 23.625L20.625 25.0875C20.85 25.3125 21.1125 25.425 21.4125 25.425C21.7125 25.425 21.975 25.3125 22.2 25.0875L25.8375 21.525C26.0625 21.3 26.175 21.031 26.175 20.718C26.175 20.405 26.0625 20.1365 25.8375 19.9125C25.6125 19.6875 25.3435 19.575 25.0305 19.575C24.7175 19.575 24.449 19.6875 24.225 19.9125L21.4125 22.6875ZM6 9H21C21.425 9 21.7815 8.856 22.0695 8.568C22.3575 8.28 22.501 7.924 22.5 7.5C22.5 7.075 22.356 6.7185 22.068 6.4305C21.78 6.1425 21.424 5.999 21 6H6C5.575 6 5.2185 6.144 4.9305 6.432C4.6425 6.72 4.499 7.076 4.5 7.5C4.5 7.925 4.644 8.2815 4.932 8.5695C5.22 8.8575 5.576 9.001 6 9ZM22.5 30C20.425 30 18.656 29.2685 17.193 27.8055C15.73 26.3425 14.999 24.574 15 22.5C15 20.425 15.7315 18.656 17.1945 17.193C18.6575 15.73 20.426 14.999 22.5 15C24.575 15 26.344 15.7315 27.807 17.1945C29.27 18.6575 30.001 20.426 30 22.5C30 24.575 29.2685 26.344 27.8055 27.807C26.3425 29.27 24.574 30.001 22.5 30ZM0 28.3125V3C0 2.175 0.294 1.4685 0.882 0.880502C1.47 0.292502 2.176 -0.000997453 3 2.54669e-06H24C24.825 2.54669e-06 25.5315 0.294003 26.1195 0.882003C26.7075 1.47 27.001 2.176 27 3V13.0125C26.525 12.7875 26.0375 12.6 25.5375 12.45C25.0375 12.3 24.525 12.1875 24 12.1125V3H3V24.075H12.1125C12.2375 24.85 12.4315 25.5875 12.6945 26.2875C12.9575 26.9875 13.301 27.65 13.725 28.275C13.6 28.3 13.4685 28.281 13.3305 28.218C13.1925 28.155 13.074 28.074 12.975 27.975L11.775 26.775C11.625 26.625 11.45 26.55 11.25 26.55C11.05 26.55 10.875 26.625 10.725 26.775L9.525 27.975C9.375 28.125 9.2 28.2 9 28.2C8.8 28.2 8.625 28.125 8.475 27.975L7.275 26.775C7.125 26.625 6.95 26.55 6.75 26.55C6.55 26.55 6.375 26.625 6.225 26.775L5.025 27.975C4.875 28.125 4.7 28.2 4.5 28.2C4.3 28.2 4.125 28.125 3.975 27.975L2.775 26.775C2.625 26.625 2.45 26.55 2.25 26.55C2.05 26.55 1.875 26.625 1.725 26.775L0.525 27.975L0 28.3125ZM6 21H12.1125C12.1875 20.475 12.3 19.9625 12.45 19.4625C12.6 18.9625 12.7875 18.475 13.0125 18H6C5.575 18 5.2185 18.144 4.9305 18.432C4.6425 18.72 4.499 19.076 4.5 19.5C4.5 19.925 4.644 20.2815 4.932 20.5695C5.22 20.8575 5.576 21.001 6 21ZM6 15H15.15C16.1 14.075 17.2065 13.3435 18.4695 12.8055C19.7325 12.2675 21.076 11.999 22.5 12H6C5.575 12 5.2185 12.144 4.9305 12.432C4.6425 12.72 4.499 13.076 4.5 13.5C4.5 13.925 4.644 14.2815 4.932 14.5695C5.22 14.8575 5.576 15.001 6 15Z";
        else if (label === 'Profile') iconPathD = "M15 15C12.9375 15 11.1719 14.2656 9.70312 12.7969C8.23437 11.3281 7.5 9.5625 7.5 7.5C7.5 5.4375 8.23437 3.67188 9.70312 2.20313C11.1719 0.734375 12.9375 0 15 0C17.0625 0 18.8281 0.734375 20.2969 2.20313C21.7656 3.67188 22.5 5.4375 22.5 7.5C22.5 9.5625 21.7656 11.3281 20.2969 12.7969C18.8281 14.2656 17.0625 15 15 15ZM0 30V24.75C0 23.6875 0.27375 22.7106 0.82125 21.8194C1.36875 20.9281 2.095 20.2487 3 19.7812C4.9375 18.8125 6.90625 18.0856 8.90625 17.6006C10.9062 17.1156 12.9375 16.8737 15 16.875C17.0625 16.875 19.0937 17.1175 21.0937 17.6025C23.0937 18.0875 25.0625 18.8137 27 19.7812C27.9062 20.25 28.6331 20.93 29.1806 21.8212C29.7281 22.7125 30.0012 23.6887 30 24.75V30H0ZM3.75 26.25H26.25V24.75C26.25 24.4062 26.1637 24.0937 25.9912 23.8125C25.8187 23.5312 25.5925 23.3125 25.3125 23.1562C23.625 22.3125 21.9219 21.68 20.2031 21.2587C18.4844 20.8375 16.75 20.6262 15 20.625C13.25 20.625 11.5156 20.8362 9.79687 21.2587C8.07812 21.6812 6.375 22.3137 4.6875 23.1562C4.40625 23.3125 4.17937 23.5312 4.00687 23.8125C3.83437 24.0937 3.74875 24.4062 3.75 24.75V26.25ZM15 11.25C16.0312 11.25 16.9144 10.8825 17.6494 10.1475C18.3844 9.4125 18.7512 8.53 18.75 7.5C18.75 6.46875 18.3825 5.58562 17.6475 4.85062C16.9125 4.11562 16.03 3.74875 15 3.75C13.9687 3.75 13.0856 4.1175 12.3506 4.8525C11.6156 5.5875 11.2487 6.47 11.25 7.5C11.25 8.53125 11.6175 9.41437 12.3525 10.1494C13.0875 10.8844 13.97 11.2512 15 11.25Z";
        const isFocused = state.index === idx;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { merge: true });
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
            key={route.name}
          >
            <Svg height={25} width={25} viewBox="0 0 30 30" fill="none" strokeWidth={1}>
              <Path fill={isFocused ? color.mainGreen : color.mainText} d={iconPathD} />
            </Svg>
            <Text style={[styles.tabLabel, { color: isFocused ? color.mainGreen : color.mainText }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default UserTabBar;

const styles = StyleSheet.create({
  tabBg: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 30,
    paddingTop: 20
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    gap: 5
  },
  tabLabel: {
    fontFamily: fonts.I_500,
    fontSize: 12
  },
  tabLine: {
    backgroundColor: "transparent",
    borderRadius: 2,
    color: "transparent",
    height: 4,
    width: 22
  }
});