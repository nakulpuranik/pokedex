import { Platform } from "react-native";

const constants = {
  IS_ENV_DEVELOPMENT: __DEV__,
  IS_ANDROID: Platform.OS === "android",
  IS_IOS: Platform.OS === "ios",
  IS_DEBUG_MODE_ENABLED: Boolean(window.navigator.userAgent),
  IS_USER_ASH: "ash@pokemon.com",
  IS_ASH_PASSWORD: "user123!"

};

export default constants;