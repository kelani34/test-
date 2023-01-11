import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import AddIcon from "../assets/add-icon.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  boxShadow: 2,
};

export default function DashboardModal({ addItem }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState();
  const [description, setDescription] = useState();

  return (
    <div>
      <Button onClick={handleOpen} style={{ float: "right" }}>
        <img src={AddIcon} alt="add icon" />
      </Button>
      <StyledModal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox sx={style}>
          <div className="head-text">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Item
            </Typography>
          </div>
          <div className="modal__line" />
          <form
            id="dashboardmodal"
            onSubmit={(e) => {
              handleClose();
              e.preventDefault();
              setName("");
              setDescription("");
              addItem(name, description);
            }}
          >
            <div className="form__name-section">
              <div>
                <label htmlFor="name">Name</label>
              </div>

              <div>
                <input
                  id="name"
                  placeholder="Input item name here"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form__description-section">
              <div>
                <label htmlFor="note">Add Note</label>
              </div>
              <div>
                <textarea
                  placeholder="Type here"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="buttons">
              <button className="cancel" onClick={handleClose}>
                Cancel
              </button>
              <button className="create-event" form="dashboardmodal">
                Create Event
              </button>
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
  /* height: 370px; */
  h2 {
    font-family: "Avenir";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #000000;
  }
  .modal__line {
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

    .form__name-section {
      margin-bottom: 24px;
      label {
        font-family: "Avenir";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 7px;

        color: #5f6166;
      }
    }

    .form__description-section {
      margin-bottom: 32px;
      label {
        font-family: "Avenir";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 7px;

        color: #5f6166;
      }
    }
  }
  input,
  textarea {
    width: calc(100% - 26px);
    background: #ffffff;
    border: 1px solid #e1e1e1;
    padding: 10px 12px;
    border-radius: 4px;
    outline: none;
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
    .cancel {
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
    .create-event {
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

  textarea {
    height: 92px;
    resize: none;
    outline: none;
  }
  textarea::placeholder,
  input::placeholder {
    color: #cacaca;
    opacity: 1;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  textarea:-ms-input-placeholder,
  input:-ms-input-placeholder {
    color: #cacaca;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  textarea::-ms-input-placeholder,
  input::-ms-input-placeholder {
    color: #cacaca;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .create-event:disabled,
  .create-event[disabled] {
    background: #b7bcc4;
  }
`;
const StyledModal = styled(Modal)`
  .MuiModal-backdrop {
    background-color: rgba(0, 0, 0, 0.28);
  }
`;
