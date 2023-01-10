import React from "react";
import styled from "styled-components";
import Items from "../components/Items";
import { AiFillCaretDown } from "react-icons/ai";
import AddIcon from "../assets/add-icon.svg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import DashboardModal from "../components/DashboardModal";

const items = [
  {
    index: 1,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    index: 2,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    index: 3,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];
const Dashboard = () => {
  return (
    <Wrapper>
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
            return <Items index={item.index} description={item.description} />;
          })}
        </div>

        <DashboardModal />
      </div>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #f0f0f0;
  header {
    background-color: #fff;
    border: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    padding: 25px 55px 27px 58px;
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

    position: relative;
    .items {
      display: flex;
      justify-content: space-between;
    }
  }

  .add-icon {
  }
`;
const MenuText = styled(MenuItem)`
  width: 114px;
`;
