import { FC, useEffect, useRef, useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import "./form.css";
import { LoginForm } from "./login";
import { trpc } from "../../../trpc/server";

type RegisterFormPropsType = {
  changeForm: React.Dispatch<React.SetStateAction<JSX.Element>>;
  closeLogin: () => void;
};

export const RegisterForm: FC<RegisterFormPropsType> = ({
  changeForm,
  closeLogin,
}) => {
  const [errors, setLogError] = useState([] as string[]);
  const [userName, setUserName] = useState("");
  const [password, setSetPassword] = useState("");
  const [rPassword, setSetRPassword] = useState("");
  const regUser = trpc.user.register.useMutation();

  let logErrors: string[] = [];

  const handleRegister = () => {
    logErrors = [];
    const form = {
      userName,
      password,
      rPassword,
    };
    if (password !== rPassword) {
      logErrors.push("passwords is not equal");
    }
    Object.keys(form).forEach((key) => {
      if (form[key as keyof typeof form].length < 4) {
        logErrors.push(key + " is too small");
      }
    });
    setLogError(logErrors);

    if (logErrors.length === 0) {
      regUser.mutate({ login: userName, password: password });
    }
  };

  useEffect(() => {
    if (regUser.isError) {
      setLogError([regUser.error?.message]);
    }
  }, [regUser.isError]);

  if (regUser.status === "success") {
    changeForm(<LoginForm closeLogin={closeLogin} changeForm={changeForm} />);
  }

  const handleLogin = () => {
    changeForm(<LoginForm closeLogin={closeLogin} changeForm={changeForm} />);
  };

  return (
    <div id="loginForm">
      {errors.map((err) => (
        <Alert variant="danger">{err}</Alert>
      ))}
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
      <InputGroup className="loginInput p-0">
        <InputGroup.Text id="basic-addon1" className="">
          Password
        </InputGroup.Text>
        <Form.Control
          value={rPassword}
          onChange={(e) => setSetRPassword(e.target.value)}
          placeholder="repeat Password"
          aria-label="repeat Password"
          type="password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button
        className="w-100 formButton"
        variant="primary"
        type="submit"
        onClick={handleRegister}
      >
        Register
      </Button>
      <Button
        className="w-100"
        variant="primary"
        type="submit"
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
};
