import logo from './logo.svg';
import './App.css';
import NameForm from './form';

function App() {
  const arr = ["Huyen", "Hoa", "Hung", "Long"];
  return (
    <div className="App">
      <div>学生一覧</div>
      <NameForm/>
    </div>
  );
}

export default App;
