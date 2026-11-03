import {iconSize} from "./iconSize.js"

// export const theme = {
//   fontColor: {
//     mainTitle: '#b25501',
//     planeTitleImageTitles: '#0000ff',
//     nameFullTitle: '#0b5500',
//   },
//   bсgColor: {
//     old: '#ffdb92',
//     last: '#d2fdbd',
//     now: '#d6f1ff',
//     planeTitle: '#ffff00',
//     actualImageBox: '#808080',
//     planeButton: '#008080',
//     planeButtonHover: '#902a00',
//   },
//   borderColor: {
//     planeTitle: '#9b9b00',
//   },
//   iconColor: {
//     textField: '#9b25fc',
//   },
//   buttonColor: {
//     planeButton: '#99ffff',
//     planeButtonHover: '#d9d902',
//   },
// };

export const theme = Object.freeze({
  fontColor: {
    mainTitle: '#b25501',
    planeTitleImageTitles: '#0000ff',
    nameFullTitle: '#0b5500',
  },
  bсgColor: {
    old: '#ffdb92',
    last: '#d2fdbd',
    now: '#d6f1ff',
    planeTitle: '#ffff00',
    actualImageBox: '#808080',
    planeButton: '#008080',
    planeButtonHover: '#902a00',
  },
  borderColor: {
    planeTitle: '#9b9b00',
  },
  iconColor: {
    textField: '#9b25fc',
  },
  buttonColor: {
    planeButton: '#99ffff',
    planeButtonHover: '#d9d902',
  },
  //! Налаштування відступів - spacing
//   spacing: 4,
  spacing: value => `${4 * value}px`,
  iconSize,
});
