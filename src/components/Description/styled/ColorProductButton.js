import styled from 'styled-components';

export default styled.button`
  border: 1px solid black;
  height: 45px;
  margin-right: 10px;
  background-color: ${props => props.attributeItem};
  outline: ${props => (props.isCurrentAttributeActive ? '3px solid black' : '1px solid black')};
  opacity: ${props => (props.isCurrentAttributeActive ? '1' : '0.5')};
  display: flex;
  flex: 0.25;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
