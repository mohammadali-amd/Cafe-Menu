import { useCart } from "../context/CartContext";
import { PersianNumber } from "../utils/PersianNumber";

const CartPage = () => {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <div>
      <h1 className="text-2xl text-center font-bold mb-4 text-white bg-stone-800 p-4">
        لیست سفارشات
      </h1>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-white text-center">لیست سفارشات شما خالی است</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((cartItem) => (
                <div
                  key={cartItem.item.title}
                  className="bg-stone-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.title}
                        className="w-16 h-16 rounded-lg object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {cartItem.item.title}
                        </h3>
                        <p className="text-rose-700">
                          {PersianNumber(cartItem.item.price.toLocaleString())}{" "}
                          تومان
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(cartItem.item)}
                        className="bg-rose-600 text-white px-3 py-1 rounded"
                      >
                        -
                      </button>
                      <span className="w-4 text-center text-lg">
                        {PersianNumber(cartItem.quantity.toString())}
                      </span>
                      <button
                        onClick={() => addToCart(cartItem.item)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-stone-700 rounded-lg">
              <div className="flex justify-between text-white">
                <span>تعداد سفارشات :</span>
                <span>{PersianNumber(totalItems.toString())}</span>
              </div>
              <div className="flex justify-between text-white mt-2">
                <span>مجموع قیمت :</span>
                <span>{PersianNumber(totalPrice.toLocaleString())} تومان</span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={clearCart}
                className="flex-1 bg-rose-700 text-white py-2 rounded-lg"
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
