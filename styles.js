// @flow

import { StyleSheet } from 'react-native';

// const absoluteStretch = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   bottom: 0,
//   right: 0,
// };

export default StyleSheet.create({
  container: {
    // ...absoluteStretch,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  menu: {
    // ...absoluteStretch,
    flex: 0,
  },
  frontView: {
    flex: 1,
    // position: 'absolute',
    // left: 0,
    // top: 0,
    backgroundColor: 'transparent',
    // overflow: 'hidden',
  },
  overlay: {
    // ...absoluteStretch,
    backgroundColor: 'transparent',
  },
});
