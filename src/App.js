
import './App.css';
import {Blog,Features,Header,Footer,WhatGPT,Possibility} from "./containers/index";
import {Brand,Cta,Navbar} from "./components/index";


function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
