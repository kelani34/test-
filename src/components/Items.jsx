import React from "react";
import styled from "styled-components";
import EditItem from "./EditItem";
const Items = ({ index, description, editItem }) => {
  return (
    <Item>
      <div className="name">
        <p>Name</p>
        <h2>{index}</h2>
      </div>
      <div className="description">
        <h4>Description</h4>
        <p>{description}</p>
      </div>
      <div className="buttons">
        {editItem}
        <button className="delete">Delete</button>
      </div>
    </Item>
  );
};

export default Items;

const Item = styled.div`
  margin-right: 32px;
  width: 420px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  .name {
    margin-bottom: 16px;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      /* identical to box height */

      color: #555658;
    }
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */

      color: #000000;
    }
  }
  .description {
    margin-bottom: 24px;
    h4 {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      /* identical to box height */

      color: #555658;
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #131415;
    }
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 24px;
    gap: 24px;
    button {
      border: none;
      outline: none;
      border-radius: 4px;
    }
    .edit {
      padding: 10px 18px;
      border: 1px solid #b7bcc4;
      background: #fff;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      text-align: center;

      /* black 3 */

      color: #20262f;
    }
    .delete {
      background: #555658;
      padding: 10px 18px;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      color: #ffffff;
    }
  }
`;
