import "./App.css";
import {Router} from './Router.jsx'
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";

const appRoutes =[
  {
    path: "/",
    Componet: HomePage,
  },
  {
    path: "/about",
    Componet: AboutPage,
  },
  {
    path: "/contact",
    Componet: Contact,
  },

]

function App() {
  return (
    <main>
      <Router routes ={appRoutes} />
    </main>
  );
}

export default App;
