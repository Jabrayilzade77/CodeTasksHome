import React from "react";
import { useState } from "react";

function TasKagitMakasOyunu() {
  const [istifadeciSecimi, setIstifadeciSecimi] = useState("");
  const [komputerinSecimi, setKomputerinSecimi] = useState("");
  const [cavab, setCavab] = useState("");

  const randomSecim = () => {
    const secimler = ["Tas", "Kagit", "Makas"];
    return secimler[Math.floor(Math.random() * secimler.length)];
  };

  const secimiDuzelt =(secim) => {
    const komputer = randomSecim();
    setIstifadeciSecimi(secim);
    setKomputerinSecimi(komputer);
    qazananiTap(secim, komputer);
  }

  const qazananiTap = (istifadeci, komputer) => {
    if (istifadeci === komputer) {
      setCavab("Beraber qaldiniz..");
    } 
    else if (
      (istifadeci === "Tas" && komputer === "Makas") ||
      (istifadeci === "Kagit" && komputer === "Tas") ||
      (istifadeci === "Makas" && komputer === "Kagit")
    ) {
      setCavab("Siz qazandiniz");
    } 
    else {
      setCavab("Komputer qazandi");
    }
  };

  return (
    <>
      <div>
        <h1>Tas Kagit Makas Oyunu</h1>
        <button onClick={() =>secimiDuzelt("Tas")}>Tas</button>
        <button onClick={() =>secimiDuzelt("Kagit")}>Kagit</button>
        <button onClick={() =>secimiDuzelt("Makas")}>Makas</button>
      </div>
      {istifadeciSecimi && komputerinSecimi && (
        <div>
          <p>Sizin secim : {istifadeciSecimi}</p>
          <p>Komputerin secimi: {komputerinSecimi}</p>
          <p>Cavab: {cavab}</p>
        </div>
      )}
    </>
  );
}

export default TasKagitMakasOyunu;
