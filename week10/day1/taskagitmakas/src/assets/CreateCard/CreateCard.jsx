import React, { useEffect, useState } from "react";
import "./CreateCard.scss";

function CreateCard() {
  const [products, setProducts] = useState([]);
  const [inputValueOne, setInputValueOne] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  async function getAllProducts() {
    const res = await fetch("https://northwind.vercel.app/api/products");
    const data = await res.json();
    return data;
  }

  async function createCard() {
    const data = await getAllProducts();
    setProducts(data);
  }

  async function deleteProduct(id) {
    await fetch(`https://northwind.vercel.app/api/products/`+id, {
      method: "DELETE",
    });
    createCard();
  }

  async function createProduct(obj) {
    await fetch("https://northwind.vercel.app/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    createCard();
  }

  async function editProduct(id, obj) {
    await fetch(`https://northwind.vercel.app/api/products/`+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    createCard();
  }

  function formSubmit(e) {
    e.preventDefault();

    const obj = {
      name: inputValueOne,
      unitPrice: inputValueTwo,
    };

    if (editingProduct) {
      editProduct(editingProduct.id, obj);
    } 
    else {
      createProduct(obj);
    }

    setInputValueOne("");
    setInputValueTwo("");
    setEditingProduct(null);
  }

  useEffect(() => {
    createCard();
  }, []);

  function startEditing(product) {
    setEditingProduct(product);
    setInputValueOne(product.name);
    setInputValueTwo(product.unitPrice);
  }

  return (
    <div>
      <h1>Products</h1>

      <form action="" onSubmit={formSubmit}>
        <input
          type="text"
          onChange={(e) => setInputValueOne(e.target.value)}
          value={inputValueOne}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) => setInputValueTwo(e.target.value)}
          value={inputValueTwo}
          placeholder="Unit Price"
        />
        <button type="submit">{editingProduct ? "Edit" : "Add"}</button>
      </form>
      
      <ol className="products">
        {products.map((product) => (
          <div className="card_container" key={product.id}>
            <div className={`Card ${product.discontinued ? "red" : ""}`}>
              <div className="Card_text">
                <h2>{product.name} | {product.unitPrice} $</h2>
              </div>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
              <button onClick={() => startEditing(product)}>Edit</button>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default CreateCard;
