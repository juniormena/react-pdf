import './App.css';
import SinglePagePDFViewer from './components/pdf/single-page';
import Banner from "./Banner.pdf";

function App() {
  return (
    <div className="App">
        <div className="App-pdf">
          <SinglePagePDFViewer pdf={Banner} /> 
        </div>
    </div>
  );
}

export default App;
