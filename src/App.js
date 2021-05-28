import './App.css';
import SinglePagePDFViewer from './components/pdf/single-page';
import Banner from "./Banner.pdf";
import { useState } from 'react';

function App() {
  const [pdfFile, setPdfLife] = useState('');
  console.log(pdfFile);

  return (
    <div className="App">
        <div className="App-pdf">
          <SinglePagePDFViewer pdf={pdfFile} /> 
        </div>
        <input type="file" onChange={e=>setPdfLife(e.target.files[0] /*|| URL.createObjectURL(e.target.files[0]*/)}/>
    </div>
  );
}

export default App;
