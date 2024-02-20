import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// هنا الهيدر المتألف من
const Header = () => {
  return (
    <header className=" bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* this is logo fist item in header {h1 => {span * 2}}  */}
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className=" text-slate-500"> sahand</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        {/* search  this is form {input , icons{faicons}} two item in header  */}
        <from className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className=" bg-transparent outline-none w-24 sm:w-64"
          />
          <FaSearch className=" text-slate-300" />
        </from>
        {/* list of page likes {ul => li => link{ to move to page} } */}
        <ul className="flex gap-4">
          <li className="hidden p-1 rounded-md sm:inline  text-slate-700 hover:bg-slate-700 hover:text-white">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hidden p-1 rounded-md sm:inline  text-slate-700 hover:bg-slate-700 hover:text-white">
            <Link to={"/about"}> About</Link>
          </li>
          <li className=" p-1 rounded-md  text-slate-700 hover:bg-slate-700 hover:text-white">
            <Link to={"/sign-in"}> sign in </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
