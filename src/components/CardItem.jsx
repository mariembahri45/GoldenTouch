import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardItem({
  elt,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumIncrement,
  handleSumDecrement,
  handleSumDelete,
}) {
  const increment = () => {
    handleIncrement(elt.id);
    handleSumIncrement(elt.price);
  };
  const decrement = () => {
    handleDecrement(elt.id);
    handleSumDecrement(elt);
  };

  const deleteProduct = () => {
    handleDelete(elt.id);
    handleSumDelete(elt);
  };

  return (
    <Card style={{ width: "18rem", marginTop: "60px" }}>
      <Card.Img variant="top" src={elt.image} style={{ maxHeight: "200px" }} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent"
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <Card.Title> {elt.name} </Card.Title>
          <Card.Text>{elt.price} $</Card.Text>
        </div>

        <>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button variant="success" onClick={increment}>
              +
            </Button>
            <span>{elt.qte}</span>
            <Button variant="primary" onClick={decrement}>
              -
            </Button>
          </div>

          <Button variant="danger" onClick={deleteProduct}>
            Delete
          </Button>
        </>
      </Card.Body>
    </Card>
  );
}
