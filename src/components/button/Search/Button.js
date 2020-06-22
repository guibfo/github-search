import React from 'react';
import Style from '../style';
import Icon from '../../image/iconButton/Icon';
import search from '../../../assets/icons/search.svg';

export const Button = (props) => {
  return(
    <Style backgroundColor="#8752CC" fontColor="#E7E4FF" hoverColor="#6426B2">
      {props.children}
      <Icon src={search} alt='plus-icon' />
    </Style>
  );
}

export default Button
