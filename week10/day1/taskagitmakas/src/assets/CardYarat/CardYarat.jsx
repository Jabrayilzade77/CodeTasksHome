import React from "react";
import "./CardYarat.scss";
import { useState } from "react";
import { useEffect } from "react";

function CardYarat() {

    const [listItem, setListItem] = useState([])
    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [edit, setEdit] = useState("")

    async function getAllProducts() {
        const res = await fetch("https://northwind.vercel.app/api/products")
        const data = res.json()
        return data    
    }

    async function cardItem() {
        const data = await getAllProducts()
        setListItem(data)
    }

    async function deleteProducts(id) {
        const data = await fetch("https://northwind.vercel.app/api/products/"+id,{method:"delete"})
        cardItem()
    }

    async function createProducts(obj) {
        const data = await fetch("https://northwind.vercel.app/api/products",{
            method:"post",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(obj)
        })
        cardItem()
    }

    async function editProcuts(id,obj) {
        const data = await fetch("https://northwind.vercel.app/api/products/"+id,{
            method:"put",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(obj)
        })
        cardItem()
    }


    function startEdit(listItems) {
        setEdit(listItems)
        setInputName(listItems.name)
        setInputPrice(listItems.unitPrice)
    }
    

    function submitForm(e) {
        e.preventDefault()
        let obj = {
            name:inputName,
            unitPrice:inputPrice
        }
        if(edit){
            editProcuts(edit.id,obj)
        }
        else{
            cardItem(obj)
        }
        createProducts(obj)
        setInputName("")
        setInputPrice("")
    }

  
  
    useEffect(() => {
     cardItem()
    }, [])
    
  return (
    <div>
        
        <form action="" onSubmit={submitForm}>
            <input type="text" value={inputName} onChange={(e)=> setInputName(e.target.value)} name="" id="" placeholder="name"/>
            <input type="text" value={inputPrice} onChange={(e)=> setInputPrice(e.target.value)}  name="" id="" placeholder="price"/>
            <button>add</button>
        </form>

      <ol className="list_items">
       {listItem.map((x)=>(
        <li key={x.id} className="list"> 
            <p className={x.discontinued ? "red" : ""}>{x.name} | {x.unitPrice} $</p>
            <button onClick={()=> deleteProducts(x.id)} style={{margin:"10px"}}>delete</button>
            <button onClick={()=>startEdit(x)}>edit</button>
        </li>
       ))}
      </ol>
    </div>
  );
}

export default CardYarat;
