// import * as dotenv from 'dotenv';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.module.css";

//App state
import AppState from "./store/AppState";

//Components
import GlobalLayout from "./components/layout/GlobalLayout";
import ProtectedRoute from "./components/ProtectedRoute";

//Pages
import Home from "./pages/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import Account from "./pages/account/Account";
import EditProfile from "./pages/account/EditProfile";
import Settings from "./pages/Settings/Settings";
import Report from "./pages/report/Report";
import Support from "./pages/support/Support";
import ForgotPassword from "./pages/signup/ForgotPassword";
import ChangePassword from "./pages/signup/ChangePassword";
import Admin from "./pages/admin/Admin";
import AddBusinessRequest from "./pages/business-request/AddBusinessRequest";
import EditBusinessRequest from "./pages/business-request/EditBusinessRequest";
import MakePayment from "./pages/Payment/MakePayment";
import PaymentHistory from "./pages/Payment/PaymentHistory";
import Payment from "./pages/Payment/Payment";
import ConfirmFlutterPayment from "./pages/Payment/ConfirmFluttterPayment";
import AdminViewBusinessRequest from "./pages/business-request/AdminViewBusinessRequest";
import AdminViewSingleBusinessRequest from "./pages/business-request/AdminViewSingleBusinessRequest";
// import AdminSignUp from "./pages/signup/AdminSignup";
// import ScrollToTop from "./components/ScrollToTop";

// dotenv.config();

library.add(fab, fas);

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <AppState>
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          {/* <Route exact path="/signup/admin">
            <AdminSignUp />
          </Route> */}
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/auth/forgot-password">
            <ForgotPassword />
          </Route>

          <Route exact path="/account/changePassword">
            <ChangePassword />
          </Route>

          <GlobalLayout>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route exact path="/support">
              <Support />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <ProtectedRoute exact routePath="/account">
              <Account />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/account/edit">
              <EditProfile />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/settings">
              <Settings />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/business-request/add">
              <AddBusinessRequest />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/business-request/edit">
              <EditBusinessRequest />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/payment/makePayment">
              <MakePayment />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/payment/confirm">
              <Payment />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/payment/confirm/flutterwave">
              <ConfirmFlutterPayment />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/payment/history">
              <PaymentHistory />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/reports">
              <Report />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/admin/users">
              <Admin />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/admin/business-request">
              <AdminViewBusinessRequest />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/admin/business-request/single">
              <AdminViewSingleBusinessRequest />
            </ProtectedRoute>

            <ProtectedRoute exact routePath="/dashboard">
              <Dashboard />
            </ProtectedRoute>
          </GlobalLayout>
        </Switch>
      </AppState>
    </Router>
  );
}

export default App;
