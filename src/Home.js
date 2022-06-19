import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import axios from "axios";

import { ComponentToPrint } from "./components/ComponentToPrint";
import Dialog from "./components/Dialog.js";

const Home = () => {
  const componentRef = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [user, setUser] = useState("");
  const [dialog, setDialog] = useState(true);
  let { manual_id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `http://142.93.218.129:2001/api/user/get/${manual_id}`
        );

        if (data.profileImage) {
          document.getElementById(
            "favicon"
          ).href = `http://142.93.218.129:2001/files/${data?.profileImage}`;
        }

        var myDynamicManifest = {
          name: data?.name,
          short_name: "Site",
          description: data?.age,
          start_url: "",
          background_color: "#000000",
          theme_color: "#0f4a73",
          icons: [
            {
              src: `http://142.93.218.129:2001/files/${data?.profileImage}`,
              sizes: "512x512 256x256 192x192 64x64 32x32 24x24 16x16",
              type: "image/jpg",
            },
          ],
        };
        const stringManifest = JSON.stringify(myDynamicManifest);
        const blob = new Blob([stringManifest], { type: "application/json" });
        const manifestURL = URL.createObjectURL(blob);
        document
          .querySelector("#my-manifest-placeholder")
          .setAttribute("href", manifestURL);

        const convertToDate = (d) => {
          const [day, month, year] = d?.split("/");
          return new Date(year, month - 1, day);
        };

        if (
          convertToDate(data?.validity) >=
          convertToDate(moment(new Date()).format("DD/MM/YYYY"))
        ) {
          setDialog(false);
        } else {
          setDialog(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="main-container">
      {dialog && <Dialog />}
      <div className="container-dropdown">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon
            style={{
              padding: "5px",
              borderRadius: "50%",
              backgroundColor: "#d353f9",
            }}
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ReactToPrint
              trigger={() => <button className="print-button">Print</button>}
              content={() => componentRef.current}
            />
          </MenuItem>
        </Menu>
      </div>
      <ComponentToPrint manual_id={manual_id} ref={componentRef} />
    </div>
  );
};

export default Home;
