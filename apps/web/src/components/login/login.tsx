import { FC, useEffect, useState } from "react";
import { auth } from "./auth";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import "./loginScreen.css";
import { trpc } from "../../trpc/server";
import { RegisterForm } from "./register";

type LoginFromPropsType = {
  changeForm: React.Dispatch<React.SetStateAction<JSX.Element>>;
  closeLogin: () => void;
};

export const LoginForm: FC<LoginFromPropsType> = ({
  changeForm,
  closeLogin,
}) => {
  const [userName, setUserName] = useState("");
  const [logError, setLogError] = useState("");
  const [password, setSetPassword] = useState("");

  const loginQuery = trpc.user.login.useMutation();

  const handleLogin = () => {
    loginQuery.mutate({
      login: userName,
      password,
    });
  };

  useEffect(() => {
    if (loginQuery.isSuccess) {
      closeLogin();
    }

    if (loginQuery.isError) {
      setLogError(loginQuery.error.message);
    }
  }, [loginQuery.status]);

  const handleRegistration = () => {
    changeForm(
      <RegisterForm closeLogin={closeLogin} changeForm={changeForm} />
    );
  };

  return (
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
        className="w-100 formButton"
        variant="primary"
        type="submit"
        onClick={handleLogin}
      >
        Login
      </Button>
      <Button
        className="w-100 formButton"
        variant="primary"
        type="submit"
        onClick={handleRegistration}
      >
        Register
      </Button>
    </div>
  );
};
