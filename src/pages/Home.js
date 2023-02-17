import { useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";
import ProjectForm from "../components/ProjectForm";
import { useProjectContext } from "../hooks/useProjectContext";

const Home = () => {
  const { projects, dispatch } = useProjectContext();

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("http://localhost:5000/api/projects");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };
    getAllProjects();
  }, [dispatch]);

  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-5">
      <div className="home-left col-span-2">
        <h2 className="text-sky-400 text-3xl capitalize font-medium mb-10">
          all projects
        </h2>
        <div className="projects-wrapper flex flex-wrap gap-8">
          {projects &&
            projects.map((project) => (
              <ProjectDetails key={project._id} project={project} />
            ))}
        </div>
      </div>
      <ProjectForm />
    </div>
  );
};

export default Home;
