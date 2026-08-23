import "./Product.css";
// Passing the defalt valu and it works like the functions
const Product = ({ title, price = 100, options }) => {
  let isDiscount = price > 4000;
  let styles = { backgroundColor: isDiscount ? "pink" : "" };
  return (
    <div className="Product" style={styles}>
      <h3>Product Title: {title}</h3>
      {/* <p>{options}</p>
      <p>{options1?.a}</p>
      <p>{options2}</p> */}

      {/* another meather to print the arr or acces the array */}
      <p>{options?.map((featuer)=> <li>{featuer}</li>)}</p>
      <h5>Product Price: {price}</h5>
    </div>
  );
};

export { Product };
