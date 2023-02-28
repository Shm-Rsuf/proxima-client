import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, loading, error } = useSignup();

  //handle signup
  const handleSignup = async (e) => {
    e.preventDefault();

    //signup user
    await signup(email, password);
  };

  return (
    <form
      onSubmit={handleSignup}
      className="signup-form flex flex-col gap-5 py-10 max-w-sm mx-auto"
    >
      <h2 className="text-sky-400 text-3xl capitalize font-medium mb-10">
        signup
      </h2>

      <div className="form-control flex flex-col gap-1">
        <label
          htmlFor="email"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Email address:
        </label>
        <input
          required
          type="email"
          id="email"
          placeholder="abc@dev.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-slate-500 py-2 px-4 rounded-md outline-none focus:border-slate-400 duration-300"
        />
      </div>

      <div className="form-control flex flex-col gap-1">
        <label
          htmlFor="password"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Password:
        </label>
        <input
          required
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-2 px-4 rounded-md outline-none focus:border-slate-400 duration-300"
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-sky-400 py-2 text-slate-900 rounded-md mt-3 hover:bg-sky-500 duration-300"
      >
        Signup
      </button>
      {error && (
        <p className="bg-rose-500/50 p-3 rounded-md border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Signup;
