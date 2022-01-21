import styled from 'styled-components';
import currencyArrow from '../../../assets/currencyArrow.svg';

export default styled.div`
  background-image: url(${currencyArrow});
  background-size: cover;
  cursor: pointer;
  width: 20px;
  height: 10px;
  right: -5px;
  position: absolute;
  z-index: -1;
  transform: rotate(${props => (props.isSelectOpen ? 0 : 180)}deg);
`;
