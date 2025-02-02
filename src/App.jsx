import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState, useEffect } from 'react'
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: JSON.parse(localStorage.getItem('projects')) || [],
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  });

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectsState.projects));
    localStorage.setItem('tasks', JSON.stringify(projectsState.tasks));
  }, [projectsState.projects, projectsState.tasks]);

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.floor(100 * Math.random());
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    });

  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,

        selectedProjectId: null
      }
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,

      }
    });
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.floor(100 * Math.random())
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }


  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject tasks={projectsState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} project={selectedProject} onDelete={handleDeleteProject} />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-4 mx-4 flex gap-8 bg-stone-200  rounded-xl">

      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
