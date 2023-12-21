// MagnifyingGlassIcon.tsx
import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const MagnifyingGlassIcon: React.FC = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" 
      stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M21 21L16.65 16.65" 
      stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default MagnifyingGlassIcon;
