import React from "react";
import "./MyButton.css";

let isLoggedIn = true;

function handleLogout(event) {
  console.log("User logged out", event);
  isLoggedIn = false;
}

function MyButton() {
  return (
    <>
      { isLoggedIn ? ( 
        <button className="my-button" onClick={handleLogout} >
          Logout
        </button>
      ) : (
        <button className = "my-button" >
          Login
        </button>
      )}

      {
        isLoggedIn && (
          <button className = "my-button" >
            Profile
          </button>
        )
      }
    </>
  );
}

export default MyButton;