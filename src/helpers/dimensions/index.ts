import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_BASE = {width: 428, height: 926};

const {width: winWidth, height: winHeight} = Dimensions.get('window');

const squared = (adj: number, opp: number) => Math.sqrt(adj * adj + opp * opp);

const percentage = (percent: number, base: number): number =>
  PixelRatio.roundToNearestPixel((base * percent) / 100);

const phoneRatio = squared(winWidth, winHeight);
const designRatio = squared(WINDOW_BASE.width, WINDOW_BASE.height);

const diagonalDp = (pixel: number) => pixel * (phoneRatio / designRatio);

const winHeightPercent = (percent: number) => percentage(percent, winHeight);

const winWidthPercent = (percent: number) => percentage(percent, winWidth);

export {winWidthPercent, winHeightPercent, diagonalDp};
