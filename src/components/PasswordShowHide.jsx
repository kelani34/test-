import React, { useState } from "react";
import styled from "styled-components";

const PasswordShowHide = ({ field, form }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = form.touched[field.name] && form.errors[field.name];

  return (
    <Wrapper>
      <div className="input-container">
        <i
          className={hasError ? "icon-error icon" : "fa fa-key icon"}
          onClick={() => changeShowHidePassword(!showHidePassword)}
        >
          i
        </i>
        <input
          type={showHidePassword ? "text" : "password"}
          {...field}
          className={
            hasError ? "input-error input-field" : "input-field l-input"
          }
          placeholder="Password"
        />
      </div>
    </Wrapper>
  );
};

export default PasswordShowHide;

const Wrapper = styled.div`
  .input-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;
