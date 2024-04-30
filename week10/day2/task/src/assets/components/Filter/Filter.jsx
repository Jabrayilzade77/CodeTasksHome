import React, { useEffect, useState } from "react";

function Filter() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

function sortInc(property) {
   setCategory( [...category].sort((a,b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0)))
}
function sortDec(property) {
    setCategory([...category].sort((a,b) => (a[property] < b[property]) ? 1 : ((b[property] < a[property]) ? -1 : 0)))
}

  return (
    <>
      <input type="text" value={search} onChange={e=>setSearch(e.target.value)} name="" id="" placeholder="search" />
    <button onClick={()=>sortInc("title")}>a-z</button>
    <button onClick={()=>sortDec("title")}>z-a</button>
      {category
        .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
        .map((x) => (
          <div key={x.id} style={{ border: "1px solid black", margin: "10px" }}>
            <h2>{x.title}</h2>
            <h2>{x.price}</h2>
          </div>
        ))}
    </>
  );
}

export default Filter;
