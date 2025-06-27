import { useState } from "react";
import { useToDo } from "../context/ToDoContext";
import { Button, Input } from "antd";

function ToDoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useToDo();

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Input
        placeholder="Please enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onPressEnter={handleAdd}
      />
      <Button type="primary" onClick={handleAdd} style={{marginLeft:10}}>Add</Button>
    </div>
  );
}

export default ToDoForm;
