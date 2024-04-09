import { useState } from "react";
import Logo from "./assets/Logo.svg";
import Button from "./Components/Button";
import Input from "./Components/Input";
import TaskView from "./Components/TaskView";
import { tasks } from "./service/tasksApi";

function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasksState, setTasksState] = useState(tasks);

  function createTask() {
    if (!taskTitle.trim()) return; // Prevents creating a task with an empty title

    setTasksState((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1, // Consider using a unique ID generation strategy
        title: taskTitle,
        checked: false,
      },
    ]);
    setTaskTitle("");
  }

  function deleteTask(id: number) {
    setTasksState(tasksState.filter((task) => task.id !== id));
  }

  function checkTask(id: number) {
    setTasksState((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="absolute z-10 mt-[4.4rem] flex flex-col items-center gap-[3.3rem] w-[46rem]">
        <img src={Logo} />
        <div className="flex gap-[0.5rem] w-full">
          <Input
            label="Adicionar nova tarefa"
            value={taskTitle}
            onChange={(event) => {
              setTaskTitle(event.target.value);
            }}
          />
          <Button label="Criar" onClick={createTask} />
        </div>
        <TaskView
          tasks={tasksState}
          deleteTask={deleteTask}
          checkTask={checkTask}
        />
      </div>
      <div className="bg-base-gray-700 flex w-screen h-[12.5rem] items-center justify-center " />
      <div className="bg-base-gray-600 flex w-screen h-screen" />
    </div>
  );
}

export default App;
