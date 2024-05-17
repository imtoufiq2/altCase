import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Kyc from "../pages/kyc/Kyc";
import VerifyMobile from "../pages/verifyMobile/VerifyMobile";
import { PrivateRoute } from "./private-route";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "./home";
import Dashboard from "../pages/dashboard/Dashboard";
import BankAccountDetails from "../pages/BankAccountDetails/Index";
import ReferAndEarn from "../pages/Refer & Earn/Index";
import Portfolio from "../pages/Portfolio/Index";
import Invest from "../pages/Invest/Index";
import InvestDetails from "./InvestDetails";
import FDPaymentSummary from "./FDPaymentSummary";
import PortfolioInvestmentDetails from "./portfolioInvestmentDetails";
import Profile from "./profile";
import SuccessPage from "./successPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-bank-account" element={<BankAccountDetails />} />
      <Route path="/verifyMobile" element={<VerifyMobile />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/invest/:id" element={<InvestDetails />} />
      <Route path="/fd-summary" element={<FDPaymentSummary />} />
      {/* this is for the porfd-summarytfolio */}
      <Route path="/portfolio" element={<Portfolio />} />

      <Route
        path="/portfolio/investment-details/:id"
        element={<PortfolioInvestmentDetails />}
      />
      <Route path="/earnRewards" element={<ReferAndEarn />} />
      <Route path="/profile" element={<Profile />} />
      <Route element={<PrivateRoute />}>
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/add-bank-account" element={<BankAccountDetails />} />
      </Route>
      <Route path="/success" element={<SuccessPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export { Routers };
