import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import { HashRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { ContactPage } from './components/ContactPage/ContactPage';
import { UserLoginPage } from './components/UserLoginPage/UserLoginPage';
import CategoryPage from './components/CategoryPage/CateogoryPage';
import AdministratorLoginPage from './components/AdministratorLoginPage/AdministratorLoginPage';
import OrdersPage from './OrdersPage/OrdersPage';
import { UserRegistrationPage } from './components/UserRegistrationPage/UserRegistrationPage';
import AdministratorDashboardCategory from './components/AdministratorDashboardCategory/AdministratorDashboardcCategoryPage';
import AdministratorDashboard from './components/AdministratorDashboard/AdministratorDashboard';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
         <Route exact path="/" component ={ HomePage } />
         <Route exact path="/contact" component ={ ContactPage } />
         <Route exact path="/user/login" component ={ UserLoginPage } />
         <Route exact path="/category/:id" component ={ CategoryPage } />
         <Route path="/user/register" component={ UserRegistrationPage } />
        <Route path="/category/:cId" component={ CategoryPage } />
        <Route path="/user/orders" component={ OrdersPage } />
        <Route path="/administrator/login" component={ AdministratorLoginPage } />
        <Route exact path="/administrator/dashboard" component={ AdministratorDashboard } />
        <Route path="/administrator/dashboard/category" component={ AdministratorDashboardCategory } />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
