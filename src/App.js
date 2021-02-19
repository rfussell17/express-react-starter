import "./components/customers/customers.css";
import Customers from "./components/customers/Customers";
import Products from "./components/Products"

function App() {
  return (
    <div className="App">
      <Customers />
      <Products name="stuff" type="thing"/>
    </div>
  );
}

export default App;
