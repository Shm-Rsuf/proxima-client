import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  //signup function
  const signup = async (email, password) => {
    setLoading(true);
    setError(null);

    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/user/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const json = await res.json();

    //res.ok===false
    if (!res.ok) {
      setLoading(false);
      setError(json.error);
    }
    //res.ok===true
    if (res.ok) {
      //update auth Context
      dispatch({ type: "LOGIN", payload: json });
      //set to local storage
      localStorage.setItem("user", JSON.stringify(json));
      setLoading(false);
    }
  };

  return { signup, loading, error };
};
