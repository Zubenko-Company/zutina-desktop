import { FC, useEffect, useState } from "react";
import "./loginScreen.css";
import { useDispatch } from "react-redux";
import { userAuth } from "../../state/user/userSlice";
import { LoginForm } from "./login";

export const LoginScreen: FC = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [currentForm, setCurentForm] = useState(<></>);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurentForm(
      <LoginForm
        closeLogin={() => {
          dispatch(userAuth(true));
          setIsDisplayed(!isDisplayed);
        }}
        changeForm={setCurentForm}
      />
    );
  }, []);

  const formPos = {
    top: "0",
  };

  if (!isDisplayed) {
    formPos.top = "-100vh";
  }

  return (
    <div id="loginScreen" style={formPos}>
      {currentForm}
    </div>
  );
};
