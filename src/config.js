import { css } from "styled-components";

const ScreenSizes = {
  FULL: 1400,
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 576
}

const sizes = {
  full: ScreenSizes.FULL,
  desktop: ScreenSizes.DESKTOP,
  tablet: ScreenSizes.TABLET,
  phone: ScreenSizes.PHONE
}

export const media = 
 Object
   .keys(sizes)
   .reduce((acc, label) => {
      acc[label] = (...args) => css`
       @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
       }
      `
return acc
}, {});