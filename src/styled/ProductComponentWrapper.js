import styled from "styled-components";
import CartImage from "../components/CartImage";

export default styled.div`
  padding: 20px;
  marfin-bottom: 85px;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    cursor: pointer;
    position: relative;
  }

  &:hover::after {
    display: block;
  }

  &::after {
    content: '${CartImage}';
    width: 50px;
    height: 50px;
    color: red;
    display: none;
    position: absolute;
    right: 50px;
    bottom: 98px;
  }
`