import styled from 'styled-components';
import leftArrow from '../../../assets/iconMonster-arrow-left-circle-thin.svg';
import rightArrow from '../../../assets/iconMonster-arrow-right-circle-thin.svg';

export const CartPhotoSliderLeftArrow = styled.div`
  background-image: url(${leftArrow});
  background-size: cover;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const CartPhotoSliderRightArrow = styled.div`
  background-image: url(${rightArrow});
  background-size: cover;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
