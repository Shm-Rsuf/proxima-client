import { useEffect, useState } from "react";
import ProjectDetails from "../components/ProjectDetails";
const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loadin, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/projects");
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
        setProjects(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setError(false);
      }
    };

    getProjects();
  }, []);
  return (
    <div className="home container mx-auto py-20 grid grid-cols-7">
      <div className="home-left col-span-5">
        <h2 className="text-sky-400 text-3xl capitalize font-medium mb-10">
          all projects
        </h2>
        <div className="projects-wrapper flex flex-wrap gap-10">
          {projects &&
            projects.map((project) => (
              <ProjectDetails key={project._id} project={project} />
            ))}
        </div>
      </div>
      <div className="home-right"></div>
    </div>
  );
};

export default Home;
