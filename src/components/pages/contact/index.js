import * as React from "react";
import {
  Box,
  Button,
  styled,
  TextField,
  TextareaAutosize
} from "@mui/material";
import { palette } from "../../../assets/color";

const CssTextField = styled(TextField)({
  marginLeft: "3em",
  color: palette.purpel,
  "& label.Mui-focused": {
    color: palette.purpel
  },
  "& .MuiInput-underline:after": {
    borderColor: palette.purpel
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: palette.purpel
    },
    "&:hover fieldset": {
      borderColor: palette.purpel
    },
    "&.Mui-focused fieldset": {
      borderColor: palette.purpel
    }
  }
});

export const Contact = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        paddingTop: "10rem",
        paddingBottom: "5em",
      }}
    >
      <Box
        sx={{
          // border: "1px solid black",
          alignSelf: "center",
          flexDirection: "column",
          // width: 474,
          // marginLeft: "150px",
          display: "flex"
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: palette.blue,
            fontSize: "3.3em",
            fontWeight: "normal !important"
          }}
        >
          Contact me
        </p>
        <Box
          style={{
            border: `2px solid ${palette.rose}`,
            alignSelf: "left",

            display: "flex",
            // width: "500px",
            // min
            height: "450px",
            justifyContent: "space-around",
            flexDirection: "column",
            padding: "3em"
          }}
        >
          <CssTextField
            style={{ width: 250, margin: 0 }}
            label="Enter you name"
            id="custom-css-outlined-input"
          />
          <CssTextField
            label="Enter you email"
            id="custom-css-outlined-input"
            style={{ width: 250, margin: 0 }}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Enter you mssage"
            style={{
              width: 350,
              height: 200,
              background: "none",
              padding: "1em",
              fontFamily: `'Roboto', sans-serif`,
              fontSize: "1.2em",
              color: palette.purpel,
              border: `1px solid ${palette.purpel}`,
              borderRadius: `4px`,
              outlineColor: palette.purpel
            }}
          />
          <Button
            color="inherit"
            style={{
              fontSize: "1em",
              paddingTop: "3px",
              paddingBottom: "3px",
              color: palette.blue,
              width: "7em",
              border: `2px solid ${palette.yellow}`,
              background: palette.yellow,
              fontFamily: "norwester",
              alignSelf: "center",
              
            }}
          >
            {"Submit"}
          </Button>
        </Box>
      </Box>
    </div>
  );
};
