import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const sendData = (e) => {
    e.preventDefault();
    setProducts((prevProducts) => [
      ...prevProducts,
      { title: title, price: price },
    ]);
    navigate("/");
  };

  return (
    <>
      <h1 className="my-5 text-center">Add Product</h1>
      <div className="d-flex align-items-center justify-content-center">
        <Col md={6}>
          <Form onSubmit={sendData}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Publish
            </Button>
          </Form>
        </Col>
      </div>
    </>
  );
};

export default AddProduct;
