/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import requests from "../utils/requests";

const Nav = ({ onGenreClick }) => {
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => onGenreClick(key)} // Вызываем функцию onGenreClick при клике на жанр
            className={`last:pr-30 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500
            }`}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-8 w-1/13" />
    </nav>
  );
};

export default Nav;
