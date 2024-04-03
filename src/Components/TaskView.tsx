import ClipBoard from "../assets/Clipboard.svg";
import { tasks } from "../service/tasksApi";
import TaskCard from "./TaskCard";

const TaskView = () => {
  function deleteTask() {
    console.log("Task deleted");
    tasks.pop();
  }

  return (
    <div className="flex flex-col w-full gap-5">
      <div className="flex justify-between font-bold text-[1rem]">
        <span className="text-product-blue flex items-center gap-[0.5rem]">
          Tarefas Criadas
          <span className="px-3 py-1 rounded-xl bg-base-gray-400 text-base-gray-200">
            0
          </span>
        </span>
        <span className="text-product-purple flex items-center gap-[0.5rem]">
          Concluídas
          <span className="px-3 py-1 rounded-xl bg-base-gray-400 text-base-gray-200">
            0
          </span>
        </span>
      </div>
      <div className="h-[0.1rem] w-full bg-base-gray-500 rounded-xl" />
      {tasks.length === 0 && (
        <div className=" flex flex-col items-center gap-3">
          <img src={ClipBoard} />
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
          title={task.title}
          checked={task.checked}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskView;
