import './App.css';
import MyList from './MyList';
import MyUseState from './MyUseState';

function App(props) {
  console.log(props.sally);
  return (
    <div className="App">
      <MyUseState />
      <MyList jeremyList={props.sally} />
    </div>
  );
}

export default App;
