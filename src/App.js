import Pages from "./pages/Pages";
import './App.css';
import Logo from "./assets/Foodie.svg";
import Navigation from "./components/navigation/Navigation";


function App() {
  return (
    <div className="App">

        <div className="outer-container">
            <div>
                <img src={Logo} alt="foodie"/>
            </div>

            <div className="inner-container">



                    <Navigation />
                    <Pages/>

                <h1>Foodie App</h1>

            </div>
        </div>
    </div>
  );
}

export default App;
