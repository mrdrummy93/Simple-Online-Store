import styled from 'styled-components';
import AddToCartButton from './AddToCartButton';

export default styled.div`
  padding: 20px;
  marfin-bottom: 85px;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    cursor: pointer;
    position: relative;
  }

  &:hover > ${AddToCartButton} {
    display: inline;
  }
`;
