import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';

import style from './style';

import {Pressable, Text} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';
import {isRejectedWithValue} from '@reduxjs/toolkit';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      style={[style.tab, props.isInactive && style.inactiveTab, tabWidth]}
      onPress={() => {
        props.onPress(props.tabId);
      }}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, props.isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.default = {
  isInactive: false,
  onPress: () => {},
};

Tab.propTypes = {
  tabId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;
