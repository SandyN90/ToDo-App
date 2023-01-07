import { React, useState } from "react";

// const toDoList = [];
export default function ToDoApp() {
    const [i, setI] = useState(-1);

    const [text, setText] = useState("text");

    const [toDoList, setToDoList] = useState([]);

    function handler(event) {
        setText(event.target.value)
    }

    // Add of text to array
    function addTextToArray() {
        console.log("before data", toDoList, text);
        setToDoList((preToDoValue) => [...preToDoValue, text]);
        console.log("after added data", toDoList);
        setText("")

    }

    // Function to Update text of the elements
    function updateData(index, toDo) {
        setText(toDo);
        setI(index);
        console.log("index", toDoList);
    }

    // Function to delete Element of the toDoList
    function deleteNode(index) {
        setToDoList(toDoList.filter((element, key) => index !== key));
    }

    // Function to add data to same index which is going to be updated
    function updateNewData() {
        toDoList[i] = text;
        setToDoList([...toDoList])
        console.log("update data", toDoList);
    }

    return (
        <>
            {/* main heading */}
            <div className="h-20 w-full bg-cyan-100 flex items-center justify-center">
                <h1 className="text-black text-2xl font-bold">To Do APP</h1>
            </div>

            {/* input box */}

            <h1 className="text-center mt-5">main content</h1>
            <div className="h-full max-w-5xl bg-slate-400 mx-auto mt-10">
                <div className="flex justify-around">
                    <input
                        type="text"
                        className="h-10 max-w-2xl border border-gray-700 rounded-md"
                        placeholder="   Enter the text here"
                        value={text}
                        onInput={handler}
                    />
                    <button
                        className="h-10 w-20 bg-cyan-600"
                        onClick={updateNewData}>
                        Update
                    </button>

                    <button
                        className="h-10 w-20 bg-cyan-100 rounded-md ml-10 border border-gray-300"
                        onClick={addTextToArray}
                    >Add</button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto rounded-2xl bg-red-100">
                {
                    toDoList.map((toDo, index) => (
                        <div key={index} className="flex justify-around mt-10 divide-y pt-2 divide-gray-600  items-center">
                            <div>
                                {toDo}
                            </div>
                            <div className="py-2">
                                <button
                                    className="w-20 h-10 bg-blue-300 mr-4"
                                    onClick={() => updateData(index, toDo)}
                                >
                                    Update
                                </button>

                                <button
                                    className="w-20 h-10 bg-red-400"
                                    onClick={() => deleteNode(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}