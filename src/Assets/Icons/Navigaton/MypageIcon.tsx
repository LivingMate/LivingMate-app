// 네비게이션 마이페이지 아이콘 컴포넌트
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import IconProps from '../IconProps';

const MypageIcon: React.FC<IconProps> = ({focused, color}) => {
  return (
    <>
    { focused ? (
      <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <Path d="M15 4.6875C12.4112 4.6875 10.3125 6.78617 10.3125 9.375C10.3125 11.9638 12.4112 14.0625 15 14.0625C17.5888 14.0625 19.6875 11.9638 19.6875 9.375C19.6875 6.78617 17.5888 4.6875 15 4.6875Z" 
            fill={color}/>
      <Path d="M10 16.5625C7.41116 16.5625 5.3125 18.6612 5.3125 21.25V22.7354C5.3125 23.6769 5.99485 24.4797 6.92409 24.6314C12.2726 25.5046 17.7274 25.5046 23.0759 24.6314C24.0051 24.4797 24.6875 23.6769 24.6875 22.7354V21.25C24.6875 18.6612 22.5888 16.5625 20 16.5625H19.5739C19.3433 16.5625 19.1141 16.599 18.8949 16.6706L17.813 17.0238C15.9852 17.6207 14.0148 17.6207 12.187 17.0238L11.1051 16.6706C10.8859 16.599 10.6567 16.5625 10.4261 16.5625H10Z" 
            fill={color}/>
      </Svg>
      
    ) : (
      <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.6875 9.375C9.6875 6.44099 12.066 4.0625 15 4.0625C17.934 4.0625 20.3125 6.44099 20.3125 9.375C20.3125 12.309 17.934 14.6875 15 14.6875C12.066 14.6875 9.6875 12.309 9.6875 9.375ZM15 5.9375C13.1015 5.9375 11.5625 7.47652 11.5625 9.375C11.5625 11.2735 13.1015 12.8125 15 12.8125C16.8985 12.8125 18.4375 11.2735 18.4375 9.375C18.4375 7.47652 16.8985 5.9375 15 5.9375Z" 
            fill={color}/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.4375C8.4467 18.4375 7.1875 19.6967 7.1875 21.25V22.7354C7.1875 22.758 7.20389 22.7773 7.22621 22.7809C12.3747 23.6215 17.6253 23.6215 22.7738 22.7809C22.7961 22.7773 22.8125 22.758 22.8125 22.7354V21.25C22.8125 19.6967 21.5533 18.4375 20 18.4375H19.5739C19.541 18.4375 19.5082 18.4427 19.4769 18.4529L18.395 18.8062C16.189 19.5265 13.811 19.5265 11.605 18.8062L10.5231 18.4529C10.4918 18.4427 10.459 18.4375 10.4261 18.4375H10ZM5.3125 21.25C5.3125 18.6612 7.41116 16.5625 10 16.5625H10.4261C10.6567 16.5625 10.8859 16.599 11.1051 16.6706L12.187 17.0238C14.0148 17.6207 15.9852 17.6207 17.813 17.0238L18.8949 16.6706C19.1141 16.599 19.3433 16.5625 19.5739 16.5625H20C22.5888 16.5625 24.6875 18.6612 24.6875 21.25V22.7354C24.6875 23.6769 24.0051 24.4797 23.0759 24.6314C17.7274 25.5046 12.2726 25.5046 6.92409 24.6314C5.99485 24.4797 5.3125 23.6769 5.3125 22.7354V21.25Z" 
            fill={color}/>
      </Svg>
      
    )
    }
    </>
  );
};

export default MypageIcon;