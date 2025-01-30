import { useCart } from "../context/CartContext";
import { type MenuItem } from "../types";
import { PersianNumber } from "../utils/PersianNumber";

export default function MenuList({ items }: { items: MenuItem[] }) {
  const { addToCart, decreaseQuantity, getItemQuantity } = useCart();

  return (
    <div className="grid gap-4 p-4 pt-34">
      {items.map((item) => {
        const quantity = getItemQuantity(item);

        return (
          <div
            key={item.title + item.image + item.price}
            className="bg-stone-200 rounded-lg p-4"
          >
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-2">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover"
                    loading="lazy"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  {item.ingredients && (
                    <p className="mt-1 text-[9pt] text-gray-600 line-clamp-2 w-30">
                      {item.ingredients}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="min-w-fit font-bold text-rose-700">
                  {PersianNumber(item.price.toLocaleString())}{" "}
                  <span className="text-[8pt]">تومان</span>
                </div>
                {quantity > 0 ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="bg-red-500 text-white px-2 py-0.5 rounded text-sm"
                    >
                      -
                    </button>
                    <span className="w-4 text-center">
                      {PersianNumber(quantity.toString())}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-yellow-500 text-white px-2 py-0.5 rounded text-sm"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
                  >
                    افزودن
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
