import React from "react";

export default function CardItem({
  elt,
}) {
 

  return (
    <div className="group relative bg-white rounded-md shadow-md overflow-hidden w-full"> {/* Full width to fill grid cell */}
      <img
        alt={elt.name}
        src={elt.image}
        className="aspect-square w-full object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 transition-opacity duration-300" // Added duration for smoother hover
      />
      <div className="p-4 flex flex-col gap-4"> {/* Padding and vertical flex layout */}
        <div className="flex justify-between items-start"> {/* Name/price: justify-between, items-start for alignment */}
          <h3 className="text-sm font-semibold text-gray-900"> {/* Smaller text like example */}
            {elt.name}
          </h3>
          <p className="text-sm font-medium text-gray-900 ml-2">{elt.price} $</p> {/* Inline margin for spacing */}
        </div>

        <div className="flex justify-center gap-3 items-center"> {/* Centered quantity row */}

        </div>

      </div>
    </div>
  );
}