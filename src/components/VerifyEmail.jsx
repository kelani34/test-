import { Link } from "@mui/material";
import React from "react";
import styled from "styled-components";
const VerifyEmail = () => {
  return (
    <Wrapper>
      <p>
        You have not verified your email address. Click <Link> here </Link> to
        resend verification link.
      </p>
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
  padding: 10px 20px;
`;
