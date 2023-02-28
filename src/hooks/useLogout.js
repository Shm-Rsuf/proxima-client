import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();

  const logout = () => {
    //clear localstorage
    localStorage.removeItem("user");
    //logout dispatch
    logoutDispatch({ type: "LOGOUT" });
  };

  return { logout };
};
