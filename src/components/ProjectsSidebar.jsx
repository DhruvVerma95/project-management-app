import Button from './Button.jsx'
export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {



    return (
        <aside className="w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-l-xl  ">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+Add Project</Button>
            </div>
            <div className="bg-orange-700 my-4 rounded-md  h-fit flex-col items-center">
                <ul>
                    {projects.map(project => {
                        let cssClasses = "full px-2 py-1 rounded-sm  my-1 hover:text-stone-200 hover:bg-stone-800 text-center w-full  ";
                        if (project.id === selectedProjectId) {
                            cssClasses += "text-stone-100 drop-shadow-lg bold"
                        } else {
                            cssClasses += " text-black"
                        }

                        return (
                            <li key={project.id}><button onClick={() => onSelectProject(project.id)}
                                className={cssClasses}>{project.title}</button></li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}