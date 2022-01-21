import styled from 'styled-components';

export default styled.button`
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: ${props => (props.currentCategory === props.category ? '#5ECE7B' : 'black')};
  border: none;
  background: white;
  padding-right: 10px;
  padding-left: 10px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #5ECE7B; 
  }
`;

/* #5ECE7B */
