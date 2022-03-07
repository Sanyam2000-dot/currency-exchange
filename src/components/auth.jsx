import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

function Auth() {
  let navigate = useNavigate();

  const uiConfig = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider).then(() => {
      navigate("/home/");
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={{
          padding: "0.5rem",
          border: "1px solid #D3D3D3",
          borderRadius: "5px",
        }}
        onClick={uiConfig}
      >
        <div style={{ display: "flex" }}>
          <div>Sign In with Google</div>{" "}
          <div style={{ marginLeft: "4px" }}>
            <img width={"30px"} height={"30px"} src="/google.svg" alt="" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Auth;
