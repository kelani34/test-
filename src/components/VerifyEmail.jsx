import React from "react";
import styled from "styled-components";
const VerifyEmail = () => {
  return (
    <Wrapper>
      You have not verified your email address. Click here to resend
      verification link.
    </Wrapper>
  );
};

export default VerifyEmail;

const Wrapper = styled.div`
  display: flex;
  height: 44px;
  background: #fff0cb;
  justify-content: center;
  align-items: center;
`;
