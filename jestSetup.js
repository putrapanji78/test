// jestSetup.js
import 'react-native-gesture-handler/jestSetup';

// Mock the required libraries
jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');
//   Reanimated.default.call = () => {};
//   return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');