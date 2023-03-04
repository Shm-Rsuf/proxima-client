import { useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";
import ProjectForm from "../components/ProjectForm";
import { useProjectContext } from "../hooks/useProjectContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { projects, dispatch } = useProjectContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("http://localhost:5000/api/projects", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };

    if (user) {
      getAllProjects();
    }
  }, [dispatch, user]);

  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-5">
      <div className="home-left col-span-2">
        <h2 className="text-sky-400 text-3xl capitalize font-medium mb-10">
          {projects.length < 1 ? "no projects" : "all project"}
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
