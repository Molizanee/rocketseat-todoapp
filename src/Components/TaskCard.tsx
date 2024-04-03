import Trash from "../assets/Trash.svg";

interface TaskCardProps {
  key: number;
  checked: boolean;
  title: string;
  deleteTask: () => void;
}

const TaskCard = ({ title, deleteTask, key, checked }: TaskCardProps) => {
  return (
    <div
      key={key}
      className="bg-base-gray-500 p-[1rem] rounded-lg stroke-base-gray-300 stroke-1 flex items-center justify-between text-base-gray-100"
    >
      <div className="flex items-center gap-3">
        {!checked ? (
          <div className="rounded-full border border-product-blue h-5 w-5 flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-product-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
          </div>
        ) : (
          <div className="rounded-full bg-product-purple h-5 w-5 flex items-center justify-center cursor-pointer">
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
          </div>
        )}
        <div className={checked ? "line-through text-base-gray-300" : ""}>
          {title}
        </div>
      </div>
      <button onClick={deleteTask}>
        <img src={Trash} />
      </button>
    </div>
  );
};

export default TaskCard;
