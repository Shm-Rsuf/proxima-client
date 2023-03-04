import { useState } from "react";
import { useProjectContext } from "../hooks/useProjectContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ProjectForm = ({ project, setIsModalOpen, setIsOverlayOpen }) => {
  const [title, setTitle] = useState(project ? project.title : "");
  const [tech, setTech] = useState(project ? project.tech : "");
  const [budget, setBudget] = useState(project ? project.budget : "");
  const [manager, setManager] = useState(project ? project.manager : "");
  const [duration, setDuration] = useState(project ? project.duration : "");
  const [dev, setDev] = useState(project ? project.dev : "");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { dispatch } = useProjectContext();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must logged in");
      return;
    }

    //data
    const projectObj = { title, tech, budget, manager, duration, dev };

    // if there is no project, send post request
    if (!project) {
      //post request
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(projectObj),
      });
      const json = await res.json();
      //!res.ok setError
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }

      //res.ok
      if (res.ok) {
        setTitle("");
        setTech("");
        setBudget("");
        setDuration("");
        setManager("");
        setDev("");
        setEmptyFields([]);
        setError(null);
        dispatch({ type: "CREATE_PROJECT", payload: json });
      }
      return;
    }

    // if there is a project, send patch request
    if (project) {
      //send patch req
      const res = await fetch(
        `http://localhost:5000/api/projects/${project._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(projectObj),
        }
      );
      const json = await res.json();
      //!res.ok
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }

      //res.ok
      if (res.ok) {
        setError(null);
        setEmptyFields([]);

        //dispatch
        dispatch({ type: "UPDATE_PROJECT", payload: json });

        //remove modal and overlay
        setIsModalOpen(false);
        setIsOverlayOpen(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form flex flex-col gap-3">
      <h2
        className={`text-sky-400 text-3xl capitalize font-medium mb-10 ${
          project ? "hidden" : ""
        }`}
      >
        add a new project
      </h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="title"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Project Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="e.g. e-commerce website"
          id="title"
          className={`bg-transparent py-[5px] px-[6px] border  rounded-lg outline-none focus:border-sky-500 duration-300 ${
            emptyFields.includes("title")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="tech"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Technologies
        </label>
        <input
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          type="text"
          placeholder="e.g. react, node.js, redux etc."
          id="tech"
          className={`bg-transparent py-[5px] px-[6px] border  rounded-lg outline-none focus:border-sky-500 duration-300 ${
            emptyFields.includes("tech")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="budget"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Budget (in USD)
        </label>
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          type="number"
          placeholder="e.g. 500"
          id="budget"
          className={`bg-transparent py-[5px] px-[6px] border  rounded-lg outline-none focus:border-sky-500 duration-300 ${
            emptyFields.includes("budget")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="duration"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Duration (in weeks)
        </label>
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          type="number"
          placeholder="e.g. 1 week"
          id="duration"
          className={`bg-transparent py-[5px] px-[6px] border  rounded-lg outline-none focus:border-sky-500 duration-300 ${
            emptyFields.includes("duration")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="manager"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Manager
        </label>
        <input
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          type="text"
          placeholder="e.g. Mr. X"
          id="manager"
          className={`bg-transparent py-[5px] px-[6px] border  rounded-lg outline-none focus:border-sky-500 duration-300 ${
            emptyFields.includes("manager")
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="dev"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Developers
        </label>
        <input
          value={dev}
          onChange={(e) => setDev(e.target.value)}
          type="number"
          placeholder="e.g. 5"
          id="dev"
          className={`bg-transparent py-[5px] px-[6px] border  rounded-lg outline-none focus:border-sky-500 duration-300 ${
            emptyFields.includes("dev") ? "border-rose-500" : "border-slate-500"
          }`}
        />
      </div>

      <button
        type="submit"
        className="bg-sky-500 text-slate-900 py-2 uppercase rounded-lg tracking-wider hover:bg-slate-50 duration-300"
      >
        {project ? "confirm update" : "Submit"}
      </button>
      {error && (
        <p className="bg-rose-500/50 p-3 rounded-lg border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default ProjectForm;
