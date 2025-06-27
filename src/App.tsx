import "./App.css";
import { TodoProvider } from "./context/ToDoContext";
import { Card } from "antd";
import ToDoTabs from "./components/ToDoTabs";

function App() {
  return (
    <TodoProvider>
      <Card
        title="Huy - Todo Tracker"
        style={{
          maxWidth: 500,
          width: "100%",
          margin: "3rem auto",
          minHeight: 450,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ToDoTabs />
      </Card>
    </TodoProvider>
  );
}

export default App;
