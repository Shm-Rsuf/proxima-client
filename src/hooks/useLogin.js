import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  //login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/user/login`,
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

  return { login, loading, error };
};
