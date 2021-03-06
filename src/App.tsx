import { Button } from 'components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App p-6 items-center justify-center">
        <h1 className="text-blue-400 font-extrabold">Hello World!</h1>
        <p className="tracking-widest">This is my first React App.</p>
        <Button label="Button" colorBg="red" colorText="white" onClick={() => {console.log("click")}} />
    </div>
  );
}

export default App;