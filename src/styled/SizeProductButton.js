import styled from 'styled-components';
import ColorProductButton from './ColorProductButton';

export default styled(ColorProductButton)`
  background-color: ${props => (props.isCurrentAttributeActive ? 'black' : 'white')};
  color: ${props => (!props.isCurrentAttributeActive ? 'black' : 'white')};
  width: 40px;
`;
