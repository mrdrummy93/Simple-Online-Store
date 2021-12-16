// import React from 'react';
import styled from 'styled-components';

export default styled.button`
border: 1px solid black;
background: white;
width: 45px;
height: 45px;
font-family: Raleway;
font-style: normal;
font-weight: 300;
line-height: 35px;
padding: 0px 6px;

&:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}
`;

/* export var Button = function (props) {
  return (
    <button onClick={() => (props.sign === '+' ? props.updateCount(1) : props.updateCount(-1))}>
      {props.sign}
    </button>
  );
}; */
