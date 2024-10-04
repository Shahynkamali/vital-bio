import { useState, useEffect } from 'react';

export const breakpointsMap = {
  sm: { min: 640, max: 767 },
  md: { min: 768, max: 1023 },
  lg: { min: 1024, max: 1279 },
  xl: { min: 1280, max: 1535 },
  '2xl': { min: 1536, max: Infinity },
} as const;

type BreakpointKey = keyof typeof breakpointsMap;
type Breakpoint = (typeof breakpointsMap)[BreakpointKey];

type BreakpointInfo = {
  lessThan: boolean;
  greaterThan: boolean;
};

type BreakpointsInfo = {
  [key in BreakpointKey]: BreakpointInfo;
};

const isLessThan = (width: number, breakpoint: Breakpoint) =>
  width < breakpoint.min;
const isGreaterThan = (width: number, breakpoint: Breakpoint) =>
  width >= breakpoint.max;

const getBreakpointInfo = (
  width: number,
  breakpoint: Breakpoint
): BreakpointInfo => ({
  lessThan: isLessThan(width, breakpoint),
  greaterThan: isGreaterThan(width, breakpoint),
});

export const useBreakpoints = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const breakpoints = Object.entries(breakpointsMap).reduce(
    (acc, [key, breakpoint]) => ({
      ...acc,
      [key]: getBreakpointInfo(width, breakpoint),
    }),
    {} as BreakpointsInfo
  );

  return breakpoints;
};
