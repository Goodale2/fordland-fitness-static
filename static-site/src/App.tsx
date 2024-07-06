import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import IndividualPlans from './pages/IndividualPlans';
import FamilyPlans from './pages/FamilyPlans';
import Waiver from './pages/Waiver';
import Terms from './pages/TermsOfService';
import ParentalWaiver from './pages/ParentalWaiver';
import SMSTerms from './pages/SMSTerms';

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/individual_plans" element={<IndividualPlans/>} />
            <Route path="/family_plan" element={<FamilyPlans/>} />
            <Route path="/waiver" element={<Waiver/>} />
            <Route path="/terms_of_service" element={<Terms/>} />
            <Route path="/parental_waiver" element={<ParentalWaiver/>} />
            <Route path="/sms_terms" element={<SMSTerms/>} />
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
