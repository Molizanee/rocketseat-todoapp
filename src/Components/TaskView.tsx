import React from "react"; // Import React
import ClipBoard from "../assets/Clipboard.svg";
import TaskCard, { Task } from "./TaskCard"; // Assuming TaskCard and Task interface are correctly imported

interface TaskViewProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  checkTask: (id: number) => void;
}

const TaskView: React.FC<TaskViewProps> = ({
  tasks,
  deleteTask,
  checkTask,
}) => {
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="flex justify-between font-bold text-[1rem]">
        <span className="text-product-blue flex items-center gap-[0.5rem]">
          Tarefas Criadas
          <span className="px-3 py-1 rounded-xl bg-base-gray-400 text-base-gray-200">
            {tasks.length}
          </span>
        </span>
        <span className="text-product-purple flex items-center gap-[0.5rem]">
          Concluídas
          <span className="px-3 py-1 rounded-xl bg-base-gray-400 text-base-gray-200">
            {tasks.filter((task) => task.checked).length}/{tasks.length}
          </span>
        </span>
      </div>
      <div className="h-[0.1rem] w-full bg-base-gray-500 rounded-xl" />
      {tasks.length === 0 && (
        <div className="flex flex-col items-center gap-3">
          <img src={ClipBoard} alt="No Tasks" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-base-gray-300 font-semibold">
              Você ainda não tem tarefas cadastradas
            </span>
            <span className="text-base-gray-300">
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        </div>
      )}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          checked={task.checked}
          checkTask={() => checkTask(task.id)} // Correctly pass checkTask as a callback
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskView;
