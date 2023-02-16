const ProjectForm = () => {
  return (
    <form className="project-form flex flex-col gap-3">
      <h2 className="text-sky-400 text-3xl capitalize font-medium mb-10">
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
          type="text"
          placeholder="e.g. e-commerce website"
          id="title"
          className="bg-transparent py-[5px] px-[6px] border border-slate-500 rounded-lg outline-none focus:border-sky-500 duration-300"
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
          type="text"
          placeholder="e.g. react, node.js, redux etc."
          id="tech"
          className="bg-transparent py-[5px] px-[6px] border border-slate-500 rounded-lg outline-none focus:border-sky-500 duration-300"
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
          type="number"
          placeholder="e.g. 500"
          id="budget"
          className="bg-transparent py-[5px] px-[6px] border border-slate-500 rounded-lg outline-none focus:border-sky-500 duration-300"
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
          type="number"
          placeholder="e.g. 1 week"
          id="duration"
          className="bg-transparent py-[5px] px-[6px] border border-slate-500 rounded-lg outline-none focus:border-sky-500 duration-300"
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
          type="text"
          placeholder="e.g. Mr. X"
          id="manager"
          className="bg-transparent py-[5px] px-[6px] border border-slate-500 rounded-lg outline-none focus:border-sky-500 duration-300"
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
          type="number"
          placeholder="e.g. 5"
          id="dev"
          className="bg-transparent py-[5px] px-[6px] border border-slate-500 rounded-lg outline-none focus:border-sky-500 duration-300"
        />
      </div>

      <button
        type="submit"
        className="bg-sky-500 text-slate-900 py-2 uppercase rounded-lg tracking-wider hover:bg-slate-50 duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ProjectForm;
