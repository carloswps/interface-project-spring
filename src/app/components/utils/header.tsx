export const Header = () => {
  return (
    <header className={"bg-indigo-950 py-4 text-gray-300"}>
      <div className={"container mx-auto flex items-center justify-between px-4"}>
        <h1 className={"text-3xl font-bold"}>Image Gallery</h1>
        <nav className={"text-lg font-semibold text-gray-200"}>
          <ul className={"flex space-x-6"}>
            <li>
              <a
                href={"#"}
                className={
                  "inline-block cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-400"
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={"#"}
                className={
                  "inline-block cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-400"
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href={"#"}
                className={
                  "inline-block cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-400"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
