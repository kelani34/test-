import React, { useState } from "react";
import styled from "styled-components";
import Items from "../components/Items";
import { AiFillCaretDown } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import DashboardModal from "../components/DashboardModal";
import EditItem from "../components/EditItem";
import VerifyEmail from "../components/VerifyEmail";

const Dashboard = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      name: "Item 2",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      name: "Item 3",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]);

  function updateItems(id, name, description) {
    const updatedItems = items.map((item) => {
      if (id === item.id) {
        return { ...item, description: description, name: name };
      }
      return item;
    });
    setItems(updatedItems);
  }

  const handleDeleteItem = (e) => {
    setItems(items.filter((item) => item.id !== e));
  };

  function addItem(name, description) {
    const item = {
      id: uuidv4(),
      name: name,
      description: description,
    };
    setItems([...items, item]);
  }
  return (
    <Wrapper>
      <VerifyEmail />
      <header>
        <h1>Dashboard</h1>

        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                {...bindTrigger(popupState)}
                sx={{ textTransform: "none" }}
              >
                <div className="profile">
                  <h2>John Jones</h2>
                  <AiFillCaretDown style={{ color: "#000" }} />
                </div>
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuText>Log Out</MenuText>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </header>
      <div className="container">
        <div className="items">
          {items.map((item) => {
            const editItem = (
              <EditItem
                id={item.id}
                name={item.name}
                description={item.description}
                updateItem={updateItems}
              />
            );
            return (
              <Items
                key={item.id}
                index={item.name}
                description={item.description}
                editItem={editItem}
                deleteItem={(e) => handleDeleteItem(item.id)}
              />
            );
          })}
        </div>

        <DashboardModal addItem={addItem} />
      </div>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  /* height: 100vh; */

  header {
    background-color: #fff;
    border: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    padding: 25px 55px 27px 58px;
    @media screen and (max-width: 770px) {
      padding: 25px 25px 27px 25px;
    }
    .profile {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */

      color: #000000;
    }
    h2 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      margin-right: 15px;
      /* identical to box height */

      color: #131415;
    }
  }
  .container {
    margin: 32px 58px;
    max-width: 1480px;
    margin: 0 auto;
    position: relative;
    .items {
      margin-top: 32px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
      }
      @media screen and (max-width: 770px) {
        grid-template-columns: 1fr;
        margin-top: 24px;
      }
    }
  }

  .add-icon {
  }
`;
const MenuText = styled(MenuItem)`
  width: 114px;
`;
