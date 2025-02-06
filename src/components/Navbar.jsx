import { NavbarData } from "../data/Navbar";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full h-full flex items-center py-3 bg-orange-600 border-b-2 border-black">
      {/* Logo Section */}
      <div className="text-white font-bold text-2xl px-8">
        <a className=" text-white p-1 no-underline" href="./">MYNOTES</a>
      </div>

      {/* Navigation Links Section */}
      <div className="flex flex-1 justify-center gap-32 -translate-x-28">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              `px-2 text-center rounded transition-all duration-150 ease-out no-underline ${
                isActive
                  ? " bg-blue-500 text-white font-semibold text-xl border border-solid  border-blue-600"
                  : "bg-blue-100 text-blue-700 font-semimedium"
              } hover:bg-blue-700 hover:text-white cursor-pointer`
            }
          >
          {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar