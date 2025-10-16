const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

// Get Expo’s default Metro config
const config = getDefaultConfig(__dirname);

// SVG support setup
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts.push("svg");

// Add NativeWind config
module.exports = withNativeWind(config, {
  input: "./app/global.css",
  inlineRem: 16,
});
