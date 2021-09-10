import './assets/css/main.css'
import HeaderComponent from "./components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DonationsPage from "./pages/donationsPage";
import {Container} from "@material-ui/core";
import {Provider} from "react-redux";
import store from "./redux/store";
import DonationDetailPage from "./pages/donationDetailPage";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App ">
                  <Container maxWidth="md" className={'container'}>
                      <Switch>
                          <Route exact path="/" component={DonationsPage}/>
                          <Route  path="/detail" component={DonationDetailPage}/>
                      </Switch>
                  </Container>

              </div>
          </Router>
      </Provider>


  );
}

export default App;
