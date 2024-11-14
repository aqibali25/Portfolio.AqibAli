import React from "react";
import styled from "styled-components";
import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <StyledWrapper>
      <RotateLoader color="#f5024d" size={15} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //   background-color: #212121;
`;

export default Loader;
