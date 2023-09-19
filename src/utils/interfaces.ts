import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/core";
import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as BioAuth from "expo-local-authentication";

// AUTH INTERFACES
export interface LoginInfoInterface {
  vendorId?: string;
  email?: string;
  password: string;
}

export interface SignUpInfoInterface {
  businessname?: string;
  businessaddr?: string;
  repname?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  phonenumber: string;
  password: string;
}
export interface ResetPasswordInterface {
  email?: string;
  password?: string;
  oldPassword?: string;
  confirmPassword?: string;
}

// NAVIGATION INTERFACES
// // Main Stacks
export type AuthStackParamList = {
  OnBoard: undefined;
  Login: undefined;
  SignUp: undefined;
  OTP: { phoneno: string; };
  SignupSelect: undefined;
  ForgotPassword: undefined;
  SetPassword: undefined;
  VerifyEmail: undefined;
};
export type UserStackParamList = {
  MainTabs: undefined;
  Cart: undefined;
  Detail: undefined;
};
export type VendorStackParamList = {
  MainTabs: undefined;
  Notifications: undefined;
};

// // Main Tabs
export type UserTabParamList = {
  Home: undefined;
  Vendors: NavigatorScreenParams<UserVendorsTabStackParamList>;
  "My Orders": NavigatorScreenParams<UserOrdersTabStackParamList>;
  Profile: NavigatorScreenParams<UserProfileTabStackParamList>;
};
export type VendorTabParamList = {
  Home: undefined;
  Orders: NavigatorScreenParams<VendorOrdersTabStackParamList>;
  Menu: NavigatorScreenParams<VendorMenuTabStackParamList>;
  Account: NavigatorScreenParams<VendorAccountTabStackParamList>;
};

// // User Tab Stacks
export type UserVendorsTabStackParamList = {
  Main: undefined;
  Vendor: { vendorId: string; };
  ItemDetail: { itemId: string; };
};
export type UserOrdersTabStackParamList = {
  Main: undefined;
  OrderDetail: { orderId: string; };
  TrackOrder: { orderId: string; };
};
export type UserProfileTabStackParamList = {
  Main: undefined;
  UserDetails: undefined;
  Location: undefined;
  Notification: undefined;
  Wallet: undefined;
  Referral: undefined;
  Setting: undefined;
  FAQs: undefined;
  Help: undefined;
  About: undefined;
};

// // Vendor Tab Stacks
export type VendorOrdersTabStackParamList = {
  Main: undefined;
  OrderDetail: { orderId: string; };
  TrackOrder: { orderId: string; };
};
export type VendorMenuTabStackParamList = {
  Main: undefined;
  ItemDetail: { itemId: string; };
  AddItem: undefined;
};
export type VendorAccountTabStackParamList = {
  Main: undefined;
};

// SCREEN INTERFACES
// // Main Stacks
export type UserNavigationProps = NativeStackNavigationProp<UserStackParamList>;
export type VendorNavigationProps = NativeStackNavigationProp<VendorStackParamList>;
export type AuthNavigationProps = NativeStackNavigationProp<AuthStackParamList>;
// // Main Tabs
export type UserTabProps = CompositeNavigationProp<BottomTabNavigationProp<UserTabParamList>, UserNavigationProps>;
export type VendorTabProps = BottomTabNavigationProp<VendorTabParamList>;
// // User Tab Stacks
export type UserVendorTabProps = CompositeNavigationProp<NativeStackNavigationProp<UserVendorsTabStackParamList>, UserTabProps>;
export type UserOrdersTabProps = CompositeNavigationProp<NativeStackNavigationProp<UserOrdersTabStackParamList>, UserTabProps>;
export type UserProfileTabProps = CompositeNavigationProp<NativeStackNavigationProp<UserProfileTabStackParamList>, UserTabProps>;
// // Vendor Tab Stacks
export type VendorOrdersTabProps = CompositeNavigationProp<NativeStackNavigationProp<VendorOrdersTabStackParamList>, VendorTabProps>;
export type VendorMenuTabProps = CompositeNavigationProp<NativeStackNavigationProp<VendorMenuTabStackParamList>, VendorTabProps>;
export type VendorAccountTabProps = CompositeNavigationProp<NativeStackNavigationProp<VendorAccountTabStackParamList>, VendorTabProps>;
// // Screen Routes
export type OTPRouteProps = RouteProp<AuthStackParamList, "OTP">;
export type UserVendorsTabVendorRouteProps = RouteProp<UserVendorsTabStackParamList, "Vendor">;
export type UserVendorsTabItemDetailRouteProps = RouteProp<UserVendorsTabStackParamList, "ItemDetail">;
export type UserOrdersTabOrderDetailRouteProps = RouteProp<UserOrdersTabStackParamList, "OrderDetail">;
export type UserOrdersTabTrackOrderRouteProps = RouteProp<UserOrdersTabStackParamList, "TrackOrder">;
export type VendorOrdersTabOrderDetailRouteProps = RouteProp<VendorOrdersTabStackParamList, "OrderDetail">;
export type VendorOrdersTabTrackOrderRouteProps = RouteProp<VendorOrdersTabStackParamList, "TrackOrder">;
export type VendorMenuTabItemDetailRouteProps = RouteProp<VendorMenuTabStackParamList, "ItemDetail">;

// REDUX INTERFACES
export interface globalStateInterface {
  isAuthenticated: boolean;
  isVendor: boolean;
  themeType: "system" | "manual";
  theme: "light" | "dark";
  cart: CartInterface[];
}

export interface CartInterface {
  id: string;
  item_id: string;
  quantity: number;
  extras?: CartExtraInterface[];
}

interface CartExtraInterface extends FoodSideInterface {
  quantity: number;
}

// USER SCREEN INTERFACES
export interface FoodInterface {
  id: string;
  name: string;
  price: number;
  desc: string;
  imgUrl: string;
  isFavourite: boolean;
  rating: number;
  cals: number;
  location: string;
}

export interface RestaurantInterface {
  id: string;
  name: string;
  location: string;
  rating: number;
  imgUrl: string;
}

// MISCELLANEOUS INTERFACES
export interface BiometricsInterface {
  hasBiometrics: boolean;
  isEnrolled: boolean;
  biometricType: BioAuth.AuthenticationType[];
}

// Entity Interfaces
export interface ReviewInterface {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  message: string;
}

export interface UserBaseFoodInterface {
  id: string;
  name: string;
  description: string;
  img_url: string;
  category: string;
  availability: "available" | "temporarily unavailable" | "unavailable";
  sides?: FoodSideInterface[];
}
interface FoodPriceInterface extends UserBaseFoodInterface {
  pricing_method: "price" | "fixed";
  min_price: number;
}
interface FoodPortionInterface extends UserBaseFoodInterface {
  pricing_method: "portion";
  portion_price: number;
}
interface FoodPackageInterface extends UserBaseFoodInterface {
  pricing_method: "package";
  package_sizes: { name: string; price: number; }[];
}

export type UserFoodInterface = FoodPriceInterface | FoodPortionInterface | FoodPackageInterface;
export interface FoodSideInterface {
  name: string;
  price: number;
}
