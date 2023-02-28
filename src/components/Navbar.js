import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();

  const { logout } = useLogout();

  //logout handler
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-sky-900">
      <Link to="/" className="logo text-xl font-medium text-sky-400">
        Proxima
      </Link>

      <nav className="flex gap-5">
        {!user && (
          <div className="flex gap-5">
            <Link
              to="/login"
              className="font-medium hover:text-sky-400 duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-medium hover:text-sky-400 duration-300"
            >
              Signup
            </Link>
          </div>
        )}

        {user && (
          <div className="flex gap-5 items-center">
            <span>{user.email}</span>
            <button
              onClick={handleLogout}
              type="submit"
              className="bg-rose-500 text-slate-100 py-2 px-4  rounded-lg tracking-wide hover:bg-rose-500/75 duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
