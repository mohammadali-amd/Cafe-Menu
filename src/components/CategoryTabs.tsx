import { type Category } from "../types";

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-stone-800 border-t border-stone-950 shadow-md">
      <div className="flex overflow-x-auto py-2 px-4 md:justify-center gap-4 md:gap-10">
        {categories.map((category) => (
          <button
            key={category.category}
            onClick={() => onSelectCategory(category)}
            className={`flex flex-col justify-center items-center gap-1 px-4 py-2 rounded-full size-22 whitespace-nowrap ${
              selectedCategory.category === category.category
                ? "bg-rose-700 text-white"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            <img
              src={category.image}
              alt={category.category}
              className="size-9"
              loading="lazy"
            />
            <span className="text-[8pt] w-18">{category.category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
