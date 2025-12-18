//Mariem

// Import the cart context to access cart-related actions
import { useCart } from "../context/CartContext";

export default function CardItem({ elt }) {
   // Get addToCart function from CartContext
  const { addToCart } = useCart();

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={`/${elt.image}`} 
          alt={elt.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{elt.name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{elt.description}</p>
        <p className="mt-4 text-lg font-bold text-[#D4AF37]">${elt.price}</p>

        <button
          className="mt-4 w-full bg-[#D4AF37] text-white py-2 rounded-lg hover:bg-[#b8952d] transition"
          onClick={() => addToCart(elt)}
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}
