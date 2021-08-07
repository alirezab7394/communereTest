import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import LocationsProvider from "./components/Providers/LocationsProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LocationsProvider>
        <Layout>
          <Homepage />
        </Layout>
      </LocationsProvider>
    </div>
  );
}

export default App;
