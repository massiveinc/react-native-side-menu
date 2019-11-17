// @flow

import { StyleSheet } from 'react-native';

const absoluteStretch = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  menu: {
    flex: 0,
  },
  frontView: {
    flex: 0,
    backgroundColor: 'transparent',
  },
  overlay: {
    ...absoluteStretch,
    backgroundColor: 'transparent',
  },
});
