import { useTheme } from "../context/ThemeContext";

const DarkModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div dir="ltr">
      <button
        onClick={toggleTheme}
        className={`relative inline-flex h-12 w-[100px] items-center rounded-full cursor-pointer transition-colors duration-200 ${
          isDarkMode ? "bg-primary" : "bg-theme"
        }`}
        aria-label="تغییر حالت رنگ"
      >
        {/* Icons Container */}
        <div className="absolute inset-0 flex justify-between items-center px-3">
          <span
            className={`text-2xl ${
              isDarkMode ? "text-primary" : "text-amber-100"
            }`}
          >
            🌙
          </span>
          <span
            className={`text-2xl ${
              !isDarkMode ? "text-amber-100" : "text-blue-200"
            }`}
          >
            ☀️
          </span>
        </div>

        {/* Thumb */}
        <span
          className={`absolute h-10 w-10 transform rounded-full bg-white shadow-md transition-all duration-200 flex items-center justify-center ${
            isDarkMode ? "left-[4px]" : "left-[calc(100%-44px)]"
          }`}
        >
          {isDarkMode ? (
            <span className="text-xl">🌙</span>
          ) : (
            <span className="text-xl">☀️</span>
          )}
        </span>
      </button>

      <p className="text-opposite text-lg">
        {!isDarkMode ? "حالت روز" : "حالت شب"}
      </p>
    </div>
  );
};

export default DarkModeSwitch;
