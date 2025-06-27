import { Input, Tabs } from "antd";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useState } from "react";

function ToDoTabs() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Tabs
      defaultActiveKey="all"
      items={[
        {
          key: "all",
          label: "All",
          children: (
            <div style={{ minHeight: 250 }}>
              <ToDoForm />
              <ToDoList />
            </div>
          ),
        },
        {
          key: "completed",
          label: "Completed",
          children: (
            <div style={{ minHeight: 250 }}>
              <div style={{ width: "100%" }}>
                <Input.Search
                  placeholder="Please enter todo"
                  allowClear
                  onChange={(e) => setSearchTerm(e.target.value)}
                  enterButton
                />
              </div>
              <ToDoList showCompleted searchTerm={searchTerm} />
            </div>
          ),
        },
      ]}
    />
  );
}

export default ToDoTabs;
