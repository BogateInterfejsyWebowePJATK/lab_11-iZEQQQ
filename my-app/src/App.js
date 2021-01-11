import {random} from "./RandomNumGenerator/RandomNumGenerator"
import './App.css';

function App() {
    return (
        <div className="App">
            <p>10 random numbers</p>
            <ul>{random()}</ul>
        </div>
    );
}

export default App;
