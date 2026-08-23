import { Product } from "./Product";

export const ProductTab = () => {
  let arr = ["nice", "good", "babu"];
  let arr2 = { a: "nice", b: "good", c: "babu" };
  let arr3 = [
    <li key="a"> nice </li>,
    <li key="b"> good </li>,
    <li key="c"> babu </li>,
  ];

  return (
    <div>
      <Product title="Phone" price={1000} options={arr} options1={arr2} />
      <Product title="Laptop" price={5000} options2={arr3} />
      <Product title="Pen" price={50} />
    </div>
  );
};
