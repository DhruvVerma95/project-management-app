import Input from "./Input.jsx";
import Modal from "./Modal.jsx"
import { useRef } from "react";
export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const duedate = useRef();

    function handleSave() {

        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDuedate = duedate.current.value;
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDuedate.trim() === '') {

            modal.current.open();
            return;
        }
        //validation..
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            duedate: enteredDuedate

        });

    }

    return (
        <>
            <Modal ref={modal} >
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input❗</h2>
                <p className="text-stone-600 mb">Oops!..Looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb"  >Please try again!</p>
            </Modal>
            <div className="w-[35rem] mt-16 ">

                <menu className="flex items-center justify-end gap-4">
                    <li> <button className="text-stone-800 hover:text-stone-950 " onClick={onCancel}>Cancel</button></li>
                    <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={duedate} label="Due Date" />
                </div>
            </div></>);

}