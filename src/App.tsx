import './App.css'
import HeaderPart1 from "./components/HeaderPart1/HeaderPart1.tsx";
import './assets/global.css'
import Headerpart2 from "./components/HeaderPart2/Headerpart2.tsx";
import News from "./components/News/News.tsx";
import Stories from "./components/Stories/Stories.tsx";
import PointsTable from "./components/PointsTable/PointsTable.tsx";
import Sponsors from "./components/Sponsors/Sponsors.tsx";
import Footer from "./components/Footer/Footer.tsx";
import RaceRibbon from "./components/RaceRibbon/RaceRibbon.tsx";

function App() {

  return (
    <div style={{backgroundColor: "rgb(21, 21, 30)"}}>
        <HeaderPart1/>
        <Headerpart2/>
        <RaceRibbon/>
        <News/>
        <Stories/>
        <PointsTable/>
        <Sponsors/>
        <Footer/>
        {/*<h1>Hello</h1>*/}
    </div>
  )
}

export default App
