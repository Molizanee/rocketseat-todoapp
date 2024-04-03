import Plus from "../assets/plus.svg";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-md flex items-center justify-center gap-2 bg-product-blue-dark text-base-gray-100 text-[1rem] outline-none focus:ring-2 focus:ring-product-blue-dark focus:ring-opacity-50"
    >
      {label}
      <img src={Plus} />
    </button>
  );
};

export default Button;
