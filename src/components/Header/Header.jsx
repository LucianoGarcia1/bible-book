"use client"
import { useContextApp } from "@/context/useContext";

export const Header = () => {
  const { search, setSearch } = useContextApp();
  return (
    <header className="w-full p-5 flex justify-between items-center">
      <div>
        <h1 className="text-title font-extra_bold text-color_title">
          Bíblia Sagrada
        </h1>
      </div>

      <nav className="max-w-96 w-full">
        <form className="w-full">
          <input
            type="search"
            placeholder="Buscar..."
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            className="text-small border border-color_text rounded-md w-full py-3 px-5 placeholder:text-color_text"
          />
        </form>
      </nav>
    </header>
  );
};
