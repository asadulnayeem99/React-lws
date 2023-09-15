import ClockList from "./Components/ClockList";
import Form from "./Components/Form";
function App() {
  const quantity = [1, 2, 3];
  return (
    <div>
      <ClockList quantity={quantity}></ClockList>
      <Form></Form>
    </div>
  );
}

export default App;
