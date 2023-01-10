import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  boxShadow: 2,
};

export default function DashboardModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox sx={style}>
          <div className="head-text">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Item
            </Typography>
          </div>
          <hr />
          <form>
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <div>
              <input id="name" placeholder="Input item name here" />
            </div>
            <div>
              <label htmlFor="note">Add Note</label>
            </div>
            <div>
              <textarea placeholder="Type here"></textarea>
            </div>
          </form>
        </StyledBox>
      </StyledModal>
    </div>
  );
}

const StyledBox = styled(Box)`
  background: #ffffff;
  border-radius: 4px;
  border: none;
  width: 500px;
  height: 370px;
  h2 {
    font-family: "Avenir";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #000000;
  }
  hr {
    border: 1px solid #efeff0;
  }
  .head-text {
    padding: 16px 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    /* width: 100%;
    height: 100%; */
    padding: 16px 24px;
  }
  input,
  textarea {
    width: calc(100% - 26px);
    background: #ffffff;
    border: 1px solid #e1e1e1;
    padding: 10px 12px;
    border-radius: 4px;
  }
`;
const StyledModal = styled(Modal)`
  .MuiModal-backdrop {
    background-color: rgba(0, 0, 0, 0.28);
  }
`;
