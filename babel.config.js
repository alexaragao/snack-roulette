module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
        },
      },
    ],
    // react-native-reanimated
    'react-native-reanimated/plugin',
  ],
};
