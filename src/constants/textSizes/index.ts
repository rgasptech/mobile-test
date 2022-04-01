import {diagonalDp} from '~helpers';

const converter = (size: number): number => diagonalDp(size);

const textSizes = {
  '12': converter(12),
  '14': converter(14),
  '16': converter(16),
  '18': converter(18),
  '24': converter(24),
  '32': converter(32),
};

export {textSizes};
