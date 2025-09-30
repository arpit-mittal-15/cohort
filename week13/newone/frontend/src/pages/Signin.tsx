import { useState } from "react";
import axios from "axios";
import LabeledInput from "../hooks/LabeledInput";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = "http://localhost:8000";

const Signin = () => {

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const userLogin = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        userDetails
      );

      if (response) {
        localStorage.setItem("userToken", response.data.token);
        navigate('/');
      }
    } catch (e) {
      console.log("Cannot log in ", e);
    }
  };

  return (
    <div>
      <div>Signin</div>
      <div>
        <LabeledInput
          name="email"
          title="Email"
          placeholder="example@gmail.com"
          dispatchFn={setUserDetails}
          currState={userDetails}
        />
        <LabeledInput
          name="password"
          title="Password"
          type="password"
          placeholder="password"
          dispatchFn={setUserDetails}
          currState={userDetails}
        />
        <button onClick={userLogin}>Login</button>
      </div>
    </div>
  );
};

export default Signin;
