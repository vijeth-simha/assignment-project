import './App.css';
import ChartComponent from './components/ChartComponent';
import {generateDummyRecords} from './helpers/helper'
function App() {
  console.log(generateDummyRecords());
  return (
    <ChartComponent />
  );
}

export default App;
