import './App.css';
import MyList from './MyList';

function App(props) {
  return (
    <div className="App">
      <MyList theList={props.theList} />
    </div>
  );
}

export default App;
