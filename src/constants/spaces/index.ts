import {diagonalDp} from '~helpers';

const converter = (value: number) => diagonalDp(value);

const spaces = {
  xsmall: converter(4),
  small: converter(8),
  semiMedium: converter(12),
  medium: converter(16),
  semiLarge: converter(24),
  large: converter(32),
  xlarge: converter(40),
  xxlarge: converter(48),
  xxxlarge: converter(56),
};

export {spaces};
