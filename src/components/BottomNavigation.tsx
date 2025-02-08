import { pageNavProps } from "../App";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { PersianNumber } from "../utils/PersianNumber";

interface CategoryTabsProps {
  pages: pageNavProps[];
  pageNav: pageNavProps;
  setpageNav: (category: pageNavProps) => void;
}

export default function BottomNavigation({
  pages,
  pageNav,
  setpageNav,
}: CategoryTabsProps) {
  const { totalItems } = useCart();
  const { isDarkMode } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 bg-background-2 shadow-lg text-opposite">
      <div className="flex">
        {pages.map((page) => (
          <button
            key={page.title}
            onClick={() => setpageNav(page)}
            className={`flex flex-col justify-center items-center gap-1.5 py-2 w-full ${
              pageNav.title === page.title
                ? "bg-background"
                : `${
                    isDarkMode ? "hover:bg-stone-700" : "hover:bg-stone-400"
                  } duration-200`
            }`}
          >
            <div className="relative">
              <img src={page.image} alt={page.title} className="size-6" />
              {page.title === "سفارشات" && totalItems > 0 && (
                <span className="absolute top-0 right-5 bg-primary text-white rounded-full text-xs flex justify-center items-center size-4.5">
                  {PersianNumber(totalItems.toString())}
                </span>
              )}
            </div>

            <span className="text-[10pt]">{page.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
