import Price from "./Price";
export function Products({title,idx}) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,495", "9,999", "899", "299"];

  let description = [
    "High-performance gaming laptop",
    "Apple flagship smartphone",
    "Wireless Bluetooth earbuds",
    "Powerful Intel i7 workstation laptop"
  ];
  return (
    <div className="Product">
        <p><b>{title}</b></p>
        <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>{description[idx]}</p>
        <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]} />
    </div>
    );
}
