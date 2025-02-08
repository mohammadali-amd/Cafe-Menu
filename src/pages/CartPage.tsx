import { useCart } from "../context/CartContext";
import { PersianNumber } from "../utils/PersianNumber";

const CartPage = () => {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    clearCart,
    totalItems,
    // totalPrice,
  } = useCart();

  return (
    <div>
      <h1 className="pt-20 text-2xl text-center text-opposite font-bold mb-4 bg-background-2 p-4">
        لیست سفارشات
      </h1>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-opposite">لیست سفارشات شما خالی است</p>
        ) : (
          <>
            <div className="space-y-4 text-white">
              {cartItems.map((cartItem) => (
                <div
                  key={cartItem.item.title}
                  className="bg-foreground rounded-full p-4"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.title}
                        className="w-16 h-16 rounded-lg object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div>
                        <h3 className="text-lg text-text font-semibold">
                          {cartItem.item.title}
                        </h3>
                        {/* <p className="text-primary">
                          {PersianNumber(cartItem.item.price.toLocaleString())}{" "}
                          تومان
                        </p> */}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(cartItem.item)}
                        className="bg-primary px-3 py-1 rounded-full flex justify-center items-center w-7 h-7 text-xl"
                      >
                        -
                      </button>
                      <span className="w-4 text-center text-text text-lg">
                        {PersianNumber(cartItem.quantity.toString())}
                      </span>
                      <button
                        onClick={() => addToCart(cartItem.item)}
                        className="bg-theme px-3 py-1 rounded-full flex justify-center items-center w-7 h-7 text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-stone-700 rounded-full">
              <div className="flex justify-between text-white">
                <span>تعداد سفارشات :</span>
                <span>{PersianNumber(totalItems.toString())}</span>
              </div>
              {/* <div className="flex justify-between text-white mt-2">
                <span>مجموع قیمت :</span>
                <span>{PersianNumber(totalPrice.toLocaleString())} تومان</span>
              </div> */}
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={clearCart}
                className="flex-1 bg-primary text-white py-2 rounded-full"
              >
                حذف تمام سفارشات
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
