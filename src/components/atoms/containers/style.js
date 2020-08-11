import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  min-width: ${props => props.width};
  min-height: ${props => props.height};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: ${props => props.radius};

  &:hover {
    background: ${props => props.bgHover};

    #view-profile {
    &:hover {
      background: #3E3C3C; 
      color: #F9F3F3;
    }
  }
`;

export default Flex 

