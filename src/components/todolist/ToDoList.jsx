import React, {useState} from "react";

const ToDoList = () => {
    const [todos, settodos] = useState(10);
    return (<div>Uusi komponentti {todos}</div>)
}

export default ToDoList;