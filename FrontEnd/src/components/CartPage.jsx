import { useState } from "react";
import { useCart } from "../context/CartContext";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    subTotal,
    total,
    setDiscount
  } = useCart();

  const [promo, setPromo] = useState("");
  const [message, setMessage] = useState("");

  const applyPromo = () => {
    const code = promo.toUpperCase().trim();

    if (code === "GOLD10") {
      setDiscount(10);
      setMessage("✅ Promo applied: $10 discount");
    } else if (code === "GOLD20") {
      setDiscount(20);
      setMessage("✅ Promo applied: $20 discount");
    } else if (code === "GOLD50") {
      setDiscount(50);
      setMessage("✅ Promo applied: $50 discount");
    } else {
      setDiscount(0);
      setMessage("❌ Invalid promo code");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty 🛍️</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-[#D4AF37] font-bold">${item.price}</p>
                </div>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <TrashIcon className="h-6 w-6" />
              </button>
            </div>
          ))}

          {/* PROMO CODE */}
          <div className="mt-8">
            <h2 className="font-semibold text-lg mb-2">Promo Code</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={promo}
                onChange={e => setPromo(e.target.value)}
                className="border px-3 py-2 rounded w-48"
                placeholder="Enter code"
              />
              <button
                onClick={applyPromo}
                className="bg-[#D4AF37] text-white px-4 py-2 rounded"
              >
                Apply
              </button>
            </div>

            {message && (
              <p className={`mt-2 text-sm ${message.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}
          </div>

          {/* TOTALS */}
          <div className="mt-8 border-t pt-6 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span className="text-red-600">
                -${(subTotal - total).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span className="text-[#D4AF37]">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
