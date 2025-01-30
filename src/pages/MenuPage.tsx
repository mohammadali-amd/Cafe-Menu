import { useState } from "react";
import MenuList from "../components/MenuList";
import menuData from "../assets/data/menu.json";
import { type MenuData, type Category } from "../types";
import CategoryTabs from "../components/CategoryTabs";

const MenuPage = () => {
  const data: MenuData = menuData;

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    data.categories[0]
  );

  return (
    <div>
      <CategoryTabs
        categories={data.categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <MenuList items={selectedCategory.items} />
    </div>
  );
};

export default MenuPage;
