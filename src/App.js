import './App.scss'
import Navigation from "./components/navigation/Navigation";
import MobileNavigation from "./components/mobileNavigation/mobileNavigation";
import ActivedContent from "./components/activedContent/ActivedContent";

function App() {
  return (
    <section className="dashboard_main">
      <div className="mobile_navigation">
        <MobileNavigation/>
      </div>
      <div className="desktop_navigation">
        <Navigation/>
      </div>
      <ActivedContent/>
    </section>
  );
}

export default App;
