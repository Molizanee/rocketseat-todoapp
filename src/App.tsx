import { useState } from "react";
import Logo from "./assets/Logo.svg";
import Button from "./Components/Button";
import Input from "./Components/Input";
import TaskView from "./Components/TaskView";

function App() {
  const [taskTitle, setTaskTitle] = useState("");

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
          <Button
            label="Criar"
            onClick={() => {
              console.log("clicked");
            }}
          />
        </div>
        <TaskView />
      </div>
      <div className="bg-base-gray-700 flex w-screen h-[12.5rem] items-center justify-center " />
      <div className="bg-base-gray-600 flex w-screen h-screen" />
    </div>
  );
}

export default App;
