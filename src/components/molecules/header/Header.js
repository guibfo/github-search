import React from 'react';
import Container from '../../atoms/containers/Container';
import Logo from '../../atoms/images/Logo';
import github from '../../../assets/images/GitHub-Icon.png';
import AppName from '../appName/AppName';

const Header = () => {
  return(
    <Container direction='row' justify='space-between' align='center' margin='15px 0 0'>
      <Logo margin='0 0 0 140px' src={github} alt='logo' width='36px' />
      <AppName />
    </Container>
  );
}

export default Header