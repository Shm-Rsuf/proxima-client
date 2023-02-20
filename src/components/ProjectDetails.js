import { currencyFormater } from "../utilis/currencyFormater";
import { useProjectContext } from "../hooks/useProjectContext";

import moment from "moment";

const ProjectDetails = ({ project }) => {
  const { dispatch } = useProjectContext();

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:5000/api/projects/${project._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: json });
    }
  };

  return (
    <div className="project bg-slate-800 p-5 rounded-lg shadow-lg border border-slate-700 flex flex-col gap-5 w-[25rem]">
      <div className="top">
        <span className="text-sky-400">Id: {project._id}</span>
        <h3 className="text-2xl capitalize truncate">{project.title}</h3>
        <span className="uppercase font-medium text-slate-500 text-xs tracking-widest">
          {project.tech}
        </span>
      </div>
      <div className="mid text-slate-300 flex gap-5">
        <div className="mid-left flex flex-col">
          <span>{currencyFormater(project.budget)}</span>
          <span>Added: {moment(project.createdAt).format("MMM DD")}</span>
          <span>Updated: {moment(project.updatedAt).format("MMM DD")}</span>
        </div>
        <div className="mid-right flex flex-col">
          <span>Manager: {project.manager}</span>
          <span>Developers: {project.dev}</span>
          <span>
            Duration:{" "}
            {` ${project.duration} week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>
      <div className="bottom flex gap-5">
        <button className="bg-sky-400 text-slate-900 py-2 px-5 rounded shadow-lg hover:bg-sky-50 duration-300">
          update
        </button>
        <button
          onClick={handleDelete}
          className="text-rose-500 hover:underline duration-300"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
