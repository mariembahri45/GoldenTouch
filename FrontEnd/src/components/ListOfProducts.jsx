import CardItem from "./CardItem";

export default function ListOfProducts({
  product,
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your Products Cart</h2> {/* Customize text */}

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"> {/* Responsive grid with uniform gap */}
          {product.length > 0 ? (
            product.map((elt, index) => (
              <CardItem
                key={`${elt.id}-${index}-${elt.image}`} // Create Unique key for each product. It ensures each item has a distinct key even when IDs repeat
                elt={elt}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12"> {/* Full-width empty state in grid */}
              <h1 className="text-3xl font-bold text-gray-500">You have no Products</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}