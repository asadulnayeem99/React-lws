import Calculator from "./Components/Calculator";
import Bracket from "./Components/Inheritance/Composition/Bracket";
import Emoji from "./Components/Inheritance/Composition/Emoji";
import Text from "./Components/Inheritance/Composition/Text";

function App() {
  return (
    <div className="App">
      <Calculator />
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji>
    </div>
  );
}

export default App;
