import { TextBox } from './TextBox';
import { ProductTab } from './ProductTab';
// import { Title, Sum } from './Title';

function BasicLearning() {
  const buttonSubmit = () => {
    console.log("Submit");
  };
  return (
    <div className="BasicLearning">
      <h1>Hello React</h1>
      <button onClick={buttonSubmit}>Submit</button>
      {/* <Title /> */}
      {/* <Sum /> */}
      <TextBox name="Swaraj" colour="Green" />
      <ProductTab />
    </div>
  );
}

export default BasicLearning;
