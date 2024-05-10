import { FC, useState } from "react";
import { auth } from "./auth";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import "./loginScreen.css";

export const LoginScreen: FC = () => {
  const [userName, setUserName] = useState("");
  const [logError, setLogError] = useState("");
  const [password, setSetPassword] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(true);

  const handleSubmit = () => {
    if (auth()) {
      setLogError("");
      setIsDisplayed(!isDisplayed);
    } else {
      setLogError("login error");
    }
  };

  const formPos = {
    top: "0",
  };

  if (!isDisplayed) {
    formPos.top = "-100vh";
  }

  return (
    <div id="loginScreen" style={formPos}>
      <div id="loginForm">
        {logError !== "" && <Alert variant="danger">{logError}</Alert>}
        <InputGroup className="loginInput p-0">
          <InputGroup.Text id="basic-addon1" className="">
            Username
          </InputGroup.Text>
          <Form.Control
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="loginInput p-0">
          <InputGroup.Text id="basic-addon1" className="">
            Password
          </InputGroup.Text>
          <Form.Control
            value={password}
            onChange={(e) => setSetPassword(e.target.value)}
            placeholder="Password"
            aria-label="Password"
            type="password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button
          className="w-100"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
