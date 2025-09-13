export const calculateWebDeveloperSizes = (isSmall, isMobile, isTablet) => {
  return {
    scale: isSmall ? 0.4 : isMobile ? 0.5 : 0.5,
    position: isSmall ? [1.0, -2.0, -3.0] : isMobile ? [1.5, -2.5, -3.0] : [1.5, -4.0, -3.0],
  };
};

export const calculateTargetSizes = (isSmall, isMobile, isTablet) => {
  return {
    scale: isSmall ? 0.6 : isMobile ? 0.7 : 1.0,
    position: isSmall ? [-4.3, -2.5, 1.0] : isMobile ? [-6.0, -3.5, 1.5] : isTablet ? [-11.5, -9.0, -10.0] : [-13.0, -9.5, -10.0],
  };
};

export const calculateReactLogoSizes = (isSmall, isMobile, isTablet) => {
  return {
    scale: isSmall ? 0.25 : isMobile ? 0.4 : 0.4,
    position: isSmall ? [3.8, 1.5, -1.0] : isMobile ? [7.5, 4.0, -3.5] : isTablet ? [6.5, 0.5, -6.0] : [8.0, 2.0, -6.0],
  };
};

export const calculateCubeSizes = (isSmall, isMobile, isTablet) => {
  return {
    scale: isSmall ? 0.3 : isMobile ? 0.5 : 0.5,
    position: isSmall ? [3.8, -2.5, 1.0] : isMobile ? [7.5, -3.5, -3.5] : isTablet ? [6.5, -6.0, -6.0] : [8.0, -7.5, -6.0],
  };
};

export const calculateRingsSizes = (isSmall, isMobile, isTablet) => {
  return {
    scale: isSmall ? 0.25 : isMobile ? 0.4 : 0.4,
    position: isSmall ? [-3.5, 1.5, 1.0] : isMobile ? [-6.5, 3.8, -3.5] : isTablet ? [-7.5, 0.5, -6.0] : [-9.0, 2.0, -6.0],
  };
};