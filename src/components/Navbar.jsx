import { NavbarData } from "../data/Navbar";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex items-center py-2 bg-orange-600 border-b-2 border-black">
      {/* Logo Section */}
      <div className="text-white font-bold text-3xl px-8">
        MYNOTES
      </div>

      {/* Navigation Links Section */}
      <div className="flex flex-1 justify-center items-center gap-x-24">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              `px-3  rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold text-2xl border border-solid  border-blue-600"
                  : "bg-blue-100 text-blue-700 font-semimedium text-xl"
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