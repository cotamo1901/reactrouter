import "./App.css";
import {Router} from './Router.jsx'
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/404";

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
      <Router routes ={appRoutes} defaultComponent={Page404} />
    </main>
  );
}

export default App;
