import { Download, Folder, Home, Phone, Workflow } from "lucide-react";

const Header = () => {
  return (
    <div className="ml-auto mr-auto p-2 bg-gray-800 m-0 rounded-xl justify-between flex flex-col md:flex-row items-center gap-4 flex-wrap">
      <h1 className="text-4xl w-fit rounded-lg p-2 bg-gray-800 text-mint-500 font-sriracha">
        Pradyumn Daga
      </h1>
      <div className="flex flex-wrap gap-4">
        <button className="text-white text-2xl border p-2 rounded-lg hover:text-mint-500 cursor-pointer">
          <Home />
        </button>
        <button className="text-white text-2xl border p-2 rounded-lg hover:text-mint-500 cursor-pointer">
          <Folder />
        </button>
        <button className="text-white text-2xl border p-2 rounded-lg hover:text-mint-500 cursor-pointer">
          <Phone />
        </button>
      <button className="text-white text-2xl border p-2 rounded-lg hover:text-mint-500 cursor-pointer">
        <Download />
      </button>
      </div>

    </div>
  );
};

export default Header;
