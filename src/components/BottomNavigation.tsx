import { pageNavProps } from "../App";
import { useCart } from "../context/CartContext";
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

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-800 border-t border-stone-950 shadow-lg">
      <div className="flex">
        {pages.map((page) => (
          <button
            key={page.title}
            onClick={() => setpageNav(page)}
            className={`flex flex-col justify-center items-center gap-1.5 py-2 w-full ${
              pageNav.title === page.title
                ? "bg-stone-900"
                : "hover:bg-stone-700"
            }`}
          >
            <div className="relative">
              <img src={page.image} alt={page.title} className="size-6" />
              {page.title === "سفارشات" && totalItems > 0 && (
                <span className="absolute top-0 right-5 bg-rose-700 text-white rounded-full text-xs flex justify-center items-center size-4.5">
                  {PersianNumber(totalItems.toString())}
                </span>
              )}
            </div>

            <span className="text-[10pt] text-white">{page.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
