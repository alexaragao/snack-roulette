import { Dimensions } from 'react-native';

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get('screen');

export const isPhone = SCREEN_WIDTH >= 0 && SCREEN_WIDTH < 600;
export const isSmallTablet = SCREEN_WIDTH >= 600 && SCREEN_WIDTH < 905;
export const isTablet = SCREEN_WIDTH >= 600 && SCREEN_WIDTH < 1240;
export const isLaptop = SCREEN_WIDTH >= 1240 && SCREEN_WIDTH < 1440;
export const isDesktop = SCREEN_WIDTH >= 1440;

export const layout = {
  margin: isTablet ? 32 : 20,
  gutter: isTablet ? 24 : 16,
  column: isPhone ? 4 : isSmallTablet ? 8 : 12,
};
