import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./form.css";

const Form = (props) => {
  const [crushName, setCrushName] = useState("");
  const [userName, setUserName] = useState("");
  const [userError, setUserError] = useState(false);
  const [crushError, setCrushError] = useState(false);

  const nameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const crushNameHandler = (event) => {
    if (nameRegEx.test(crushName)) {
      setCrushError(false);
    }

    setCrushName(event.target.value);
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);

    if (nameRegEx.test(userName)) {
      setUserError(false);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !nameRegEx.test(crushName) ||
      crushName.trim() === "" ||
      crushName === userName ||
      crushName.length < 3
    ) {
      setCrushError(true);
      return;
    }

    if (
      !nameRegEx.test(userName) ||
      userName.trim() === "" ||
      userName.length < 3
    ) {
      setUserError(true);
      return;
    }

    const data = {
      crushNameValue: crushName,
      userNameValue: userName,
    };

    props.onAddData(data);
    props.modal();
    setUserName("");
    setCrushName("");
  };

  return (
    <div className="form">
      <form onSubmit={formSubmitHandler}>
        <div className="form__controls">
          <TextField
            error={userError ? true : false}
            onChange={userNameHandler}
            id={userError ? "outlined-error" : "outlined-basic"}
            label="Enter your name"
            variant="outlined"
            className="name"
            value={userName}
            helperText={userError ? "Invalid name :)" : ""}
            required
          />
        </div>
        <div className="form__controls">
          <TextField
            error={crushError ? true : false}
            onChange={crushNameHandler}
            id={crushError ? "outlined-error" : "outlined-basic"}
            label="Enter your crush name"
            variant="outlined"
            className="name"
            value={crushName}
            helperText={crushError ? "Invalid name :)" : ""}
            required
          />
        </div>
        <Button type="submit" variant="contained" color="secondary">
          Calculate
        </Button>
      </form>
    </div>
  );
};

export default Form;
