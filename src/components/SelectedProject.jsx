import Tasks from './Tasks.jsx'
import { useState } from 'react'

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const formattedDate = new Date(project.duedate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    const handleDelete = () => {
        onDelete();
    }

    return (
        <>
            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold text-stone-700 mb-4">Confirm Deletion</h2>
                        <p className="text-stone-600 mb-6">Are you sure you want to delete this project?</p>
                        <div className="flex justify-end gap-4">
                            <button 
                                className="px-4 py-2 text-stone-600 hover:text-stone-950"
                                onClick={() => setShowConfirmation(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={() => {
                                    setShowConfirmation(false);
                                    handleDelete();
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-[35rem] mt-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex items-center justify-between ">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                        <button 
                            className="text-stone-600 hover:text-stone-950 hover:bg-red-400 hover:rounded-md hover:px-1 hover:font-bold" 
                            onClick={() => setShowConfirmation(true)}
                        >
                            Delete
                        </button>
                    </div>
                    <p className="mb-4 text-stone-400">{formattedDate}</p>
                    <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
                </header>
                <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
            </div >
        </>
    );
}