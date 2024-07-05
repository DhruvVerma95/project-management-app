import { useState } from "react";
export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);

    }
    function handleClick() {
        if (enteredTask.trim() === '') {
            return
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }


    return (<div className="flex items-center gap-4">
        <textarea onChange={handleChange} value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-300" />
        <button onClick={handleClick} className="text-stone-200 hover:text-orange- bg-stone-900 rounded-md px-2 py-2 hover:bg-orange-700" >Add Task</button>
    </div>);
}