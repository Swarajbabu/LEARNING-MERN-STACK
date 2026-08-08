import "./Product.css";
// Passing the defalt valu and it works like the functions
const Product = ({ title, price = 10, options, options1,options2}) => {
  return (
    <div className="Product">
      <h3>Product Title: {title}</h3>
      <p>{options}</p>
      <p>{options1?.a}</p>
      <p>{options2}</p>

      {/* another meather to print the arr or acces the array */}
      <p>{options?.map((featuer)=> <li>{featuer}</li>)}</p>
      <h5>Product Price: {price}</h5>
    </div>
  );
};

export { Product };