import styled from 'styled-components';
import emptyCartLogo from '../assets/emptyCart.svg';

export default styled.div`
  background-image: url(${emptyCartLogo});
  background-size: cover;
  width: 20px;
  height: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
