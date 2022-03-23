// theme/index.js
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

// Global colors overrides
import colors from './colors';

const overrides = {
  colors,
};

export default extendTheme(
  overrides,
  withDefaultColorScheme({ colorScheme: 'brand' })
);
