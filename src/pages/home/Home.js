import React from 'react';
import Content from '../../components/atoms/containers/content/Content';
import Figure from '../../components/molecules/figure/Figure';
import Main from '../../components/atoms/containers/main/Main';
import Header from '../../components/organisms/header/Header';
import Container from '../../components/atoms/containers/container/Container';
import home from '../../assets/images/home.png';
import Information from '../../components/molecules/information/Information';
import Form from '../../components/molecules/form/Form';

const Home = (props) => {
  return(
    <>
      <Container width='100vw' height='100vh' direction='column'>
        <Header />
        <Content margin="120px 0 0 0">
          <Figure width='400px' src={home} alt='home' />
          <Main>
            <Information title='Find a User' subtitle='Type a username' text='and find a profile' />
            <Form />
          </Main>
        </Content>
      </Container>
    </>
  );
}

export default Home 
