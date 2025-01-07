import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

// TODO: Preserve input value on submit
const Searchbox: React.FC<Props> = ({ children }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/articulos?q=${value}`;
  };

  return (
    <form className="relative w-full md:w-auto" onSubmit={handleSubmit}>
      {children}

      <input
        type="search"
        placeholder="Buscar..."
        className="flex border border-cyan-300 rounded-lg items-center p-2.5 gap-2.5 bg-transparent w-full md:w-[350px] pl-10 text-sm"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Searchbox;
