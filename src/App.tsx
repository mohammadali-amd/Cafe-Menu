import { useState } from "react";
import BottomNavigation from "./components/BottomNavigation";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import InformationPage from "./pages/InformationPage";
import pages from "../public/data/pages.json";
import pagesLight from "../public/data/pages-light.json";
import { useTheme } from "./context/ThemeContext";

export interface pageNavProps {
  title: string;
  id: number;
  image: string;
}

export default function App() {
  const { isDarkMode } = useTheme();

  let data = pages;
  if (isDarkMode) data = pagesLight;

  const [pageNav, setpageNav] = useState<pageNavProps>(data.pages[0]);

  const getCurrentPage = () => {
    switch (pageNav.id) {
      case 1:
        return <MenuPage />;
      case 2:
        return <CartPage />;
      case 3:
        return <InformationPage />;
      default:
        return <MenuPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto pb-20">{getCurrentPage()}</main>

      <BottomNavigation
        pages={data.pages}
        pageNav={pageNav}
        setpageNav={setpageNav}
      />
    </div>
  );
}
