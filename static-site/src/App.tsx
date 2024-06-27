import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import IndividualPlans from './pages/IndividualPlans';
import FamilyPlans from './pages/FamilyPlans';

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/individual_plans" element={<IndividualPlans/>} />
            <Route path="/family_plan" element={<FamilyPlans/>} />
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
