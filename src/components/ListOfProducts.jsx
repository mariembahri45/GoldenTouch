
import CardItem from "./CardItem";
export default function ListOfProducts({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumDecrement,
  handleSumIncrement,
  handleSumDelete,
  sum,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-around",flexWrap:"wrap" }}>
        {product.map((elt) => (
          <CardItem
            elt={elt}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            handleSumDecrement={handleSumDecrement}
            handleSumIncrement={handleSumIncrement}
            sum={sum}
            handleSumDelete={handleSumDelete}
          />
        ))}
      </div>

      <div style={{ textAlign: "center", fontFamily:"intial" }}>
        {product.length !== 0 ? (
          <h2> Total: {sum} $ </h2>
        ) : (
          <h1> You have no Products</h1>
        )}
      </div>
    </div>
  );
}
