import { useCart } from "../context/CartContext";
import { type MenuItem } from "../types";
import { PersianNumber } from "../utils/PersianNumber";

export default function MenuList({ items }: { items: MenuItem[] }) {
  const { addToCart, decreaseQuantity, getItemQuantity } = useCart();

  return (
    <div className="grid gap-4 p-4 pt-22 pb-18">
      {items.map((item) => {
        const quantity = getItemQuantity(item);

        return (
          <div
            key={item.title + item.image + item.price}
            className="bg-foreground text-white rounded-full p-4"
          >
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-lg object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div>
                  <h3 className="text-lg text-text font-semibold">
                    {item.title}
                  </h3>
                  {item.ingredients && (
                    <p className="mt-1 text-[9pt] line-clamp-2 w-30">
                      {item.ingredients}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {/* <div className="min-w-fit font-bold text-primary">
                  {PersianNumber(item.price.toLocaleString())}{" "}
                  <span className="text-[8pt]">تومان</span>
                </div> */}
                {quantity > 0 ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="bg-primary px-2 py-0.5 rounded-full flex justify-center items-center w-7 h-7 text-xl"
                    >
                      -
                    </button>
                    <span className="w-4 text-center text-text text-xl">
                      {PersianNumber(quantity.toString())}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-theme px-2 py-0.5 rounded-full flex justify-center items-center w-7 h-7 text-xl"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-theme px-4 py-2 rounded-full text-sm"
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
