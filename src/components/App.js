import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Heading from "./Heading/Heading"
import Footer from "./Footer/Footer"
import Services from "./OurServices/Services"
import Home from "./Home/Home"
import ContactForm from "./Contact/ContactForm"
import Schedule from "./Schedule/Schedule"
import AboutUs from "./AboutUs/AboutUs"
import AdminLogin from "./Admin/AdminLogin"
import AdminPanel from "./Admin/AdminPanel"
import EditHome from "./Admin/EditHome/EditHome"
import EditAboutUs from "./Admin/EditAboutUs/EditAboutUs"
import EditServices from "./Admin/EditServices/EditServices"
import PrivateRoute from "./PrivateRoute"
import { AuthProvider } from "../contexts/AuthContext"
import { ArticleProvider } from "../contexts/ArticleContext"

function App() {
  return (
    <div className="App">
      <Router>
        <Heading className="heading" />
        <AuthProvider>
          <ArticleProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={ContactForm} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/services" component={Services} />
              <Route path="/schedule" component={Schedule} />

              <Route path="/admin" component={AdminLogin} />
              <PrivateRoute exact path="/admin-panel" component={AdminPanel} />
              <PrivateRoute path="/edit-home" component={EditHome} />
              <PrivateRoute path="/edit-about-us" component={EditAboutUs} />
              <PrivateRoute path="/edit-services" component={EditServices} />
            </Switch>

            <Footer className="footer" />
          </ArticleProvider>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
