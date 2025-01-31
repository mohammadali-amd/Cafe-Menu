import { useState } from "react";
import BottomNavigation from "./components/BottomNavigation";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import InformationPage from "./pages/InformationPage";
import pages from "./assets/data/pages.json";

export interface pageNavProps {
  title: string;
  id: number;
  image: string;
}

export default function App() {
  const data = pages;
  const [pageNav, setpageNav] = useState<pageNavProps>(data.pages[0]);

  return (
    <div className="min-h-screen bg-stone-900">
      <main className="max-w-4xl mx-auto pb-20">
        {pageNav.id === 1 ? (
          <MenuPage />
        ) : pageNav.id === 2 ? (
          <CartPage />
        ) : pageNav.id === 3 ? (
          <InformationPage />
        ) : (
          <MenuPage />
        )}
      </main>

      <BottomNavigation
        pages={data.pages}
        pageNav={pageNav}
        setpageNav={setpageNav}
      />
    </div>
  );
}
