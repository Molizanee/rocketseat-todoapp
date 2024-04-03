interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <input
      placeholder={label}
      value={value}
      onChange={onChange}
      className="p-4 rounded-md bg-base-gray-500 border-base-gray-700 border-[1px] text-[1rem] text-base-gray-300 outline-none focus:ring-2 focus:ring-product-blue-dark focus:ring-opacity-50 w-full"
    />
  );
};

export default Input;
