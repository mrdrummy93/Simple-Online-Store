import styled from 'styled-components';

export default styled.div`
  top: 50px;
  position: absolute;
  z-index: 999;
  border: 1px solid black;
  width: 405px;
  right: 0px;
  background-color: white;
  padding: 15px;
  max-height: calc(100vh - 150px) ;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
