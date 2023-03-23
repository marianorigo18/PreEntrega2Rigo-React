import { MainLeyouts } from "./layouts";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainLeyouts>
        <MainRoutes/>
      </MainLeyouts>
    </div>
  );
}

export default App;
