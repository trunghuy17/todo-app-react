import { useToDo } from "../context/ToDoContext";
import { Button, Checkbox, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

type Props = {
  showCompleted?: boolean;
};

function ToDoList({ showCompleted = false }: Props) {
  const { todos, toggleTodo, deleteTodo, clearCompleted } = useToDo();
  const data = showCompleted ? todos.filter((t) => t.completed) : todos;

  return (
    <>
      <List
        dataSource={data}
        renderItem={(todo) => (
          <List.Item
            actions={
              showCompleted
                ? [
                    <Button
                      icon={<DeleteOutlined />}
                      type="text"
                      danger
                      onClick={() => deleteTodo(todo.id)}
                    />,
                  ]
                : []
            }
          >
            {showCompleted ? (
              todo.text
            ) : (
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              >
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {" "}
                  {todo.text}
                </span>
              </Checkbox>
            )}
          </List.Item>
        )}
      />
      {!showCompleted && data.length > 0 && (
        <Button danger onClick={clearCompleted} style={{ marginTop: 10 }}>
          Delete All
        </Button>
      )}
    </>
  );
}

export default ToDoList;
