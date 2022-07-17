import React from "react";
import "./styles.css";
import {  IconButton, TextField } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import "./styles.css";
/////
import Paper from "@mui/material/Paper";
import { NavLink, useNavigate } from "react-router-dom";

const InputViforum = () => {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate("/post");
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <ul className="tabs">
          <NavLink to="/home">
            <button className="parallenlogram " id="btnVibonus">
              <div className="txtParallenlogram">Vibonus</div>
            </button>
          </NavLink>
          <NavLink to="/home/viforum">
            <button className="parallenlogram select" id="btnVinofurm">
              <div className="txtVibonus">
                <AdjustIcon />
                <div>Viforum</div>
              </div>
            </button>
          </NavLink>
        </ul>

        <Paper sx={{ padding: 2 }}>
          <TextField
            disabled
            sx={{ width: "50ch" }}
            variant="standard"
            placeholder="Create New Post"
          />
          <IconButton
            sx={{ color: "#E21A22" }}
            aria-label="add an item"
            onClick={handleClickBtn}
            // disabled={item.quantity === 0 ? true : false}
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                fill="white"
              />
            </svg>
          </IconButton>
        </Paper>
      </div>
    </>
  );
};

export default InputViforum;
