import Trash from "../assets/Trash.svg";

// Assuming the Task interface is defined elsewhere and imported here

export interface Task {
  id: number;
  title: string;
  checked: boolean;
}

export interface Tasks {
  tasks: Task[];
}
interface TaskCardProps extends Task {
  id: number;
  title: string;
  checked: boolean;
  deleteTask: () => void;
  checkTask: (id: number) => void; // Adjust this to accept the task ID
}

const TaskCard = ({
  id,
  title,
  checked,
  deleteTask,
  checkTask,
}: TaskCardProps) => {
  return (
    <div className="bg-base-gray-500 p-[1rem] rounded-lg stroke-base-gray-300 stroke-1 flex items-center justify-between text-base-gray-100">
      <div className="flex items-center gap-3">
        <div
          className={`rounded-full ${
            checked ? "bg-product-purple" : "border border-product-blue"
          } h-5 w-5 flex items-center justify-center cursor-pointer`}
          onClick={() => checkTask(id)} // Use the task's ID when toggling
        >
          {checked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-product-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
          )}
        </div>
        <div className={checked ? "line-through text-base-gray-300" : ""}>
          {title}
        </div>
      </div>
      <button onClick={deleteTask}>
        <img src={Trash} alt="Delete task" />
      </button>
    </div>
  );
};

export default TaskCard;
