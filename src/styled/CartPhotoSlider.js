import styled from 'styled-components';

export const CartPhotoSliderLeft = styled.button`
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 33%;
  background-color: transparent;
`;

export const CartPhotoSliderRight = styled(CartPhotoSliderLeft)`
  left: 100px;
`;
