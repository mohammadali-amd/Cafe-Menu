export interface MenuItem {
  title: string;
  price: number;
  ingredients?: string;
  image?: string;
}

export interface Category {
  category: string;
  image: string;
  items: MenuItem[];
}

export interface MenuData {
  categories: Category[];
}
