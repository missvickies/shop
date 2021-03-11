import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Cursor } from './components/cursor/cursor';
import SectionBS from './components/section-bestSellers/BestSellers';
import SectionAbt from "./components/section-about/About";
import SectionClln from "./components/section-collection/Collection"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className="App">
      <Cursor/>
      <Nav/>
      <Header id = ""/>
      <SectionBS/>
      <SectionAbt/>
      <SectionClln/>
      <Footer/>
    </div>
  );
}


export default App;
