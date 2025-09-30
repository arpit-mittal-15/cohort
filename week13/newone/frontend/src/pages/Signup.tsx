import { useState } from "react";
import axios from "axios";
import LabeledInput from "../hooks/LabeledInput";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = "http://localhost:8000";

const Signup = () => {

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    name: "",
  });

  const userSignup = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
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
      <div>Signup</div>
      <div>
        <LabeledInput
          name="name"
          title="Name"
          placeholder="John Doe"
          dispatchFn={setUserDetails}
          currState={userDetails}
        />
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
        <button onClick={userSignup}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
