import { useState } from 'react';
import Button from './Button.jsx';

export default function Home({ onStartProject }) {
  const [projectData, setProjectData] = useState({
    title: '',
    description: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (projectData.title.trim() === '') return;
    onStartProject(projectData);
    setProjectData({ title: '', description: '' }); // Reset form after submission
  }

  return (
    <div className="mt-24 text-center w-2/3 mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-stone-600">
        Welcome to Project Manager
      </h1>
      <p className="text-stone-400 mb-8">
        Start managing your projects by creating a new one or selecting from existing projects.
      </p>
      
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex flex-col gap-4 w-full">
          <input
            type="text"
            className="w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            placeholder="Project Title"
            value={projectData.title}
            onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
          />
          <textarea
            className="w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            placeholder="Project Description"
            value={projectData.description}
            onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
          />
          <Button>Create Project</Button>
        </div>
      </form>
    </div>
  );
}