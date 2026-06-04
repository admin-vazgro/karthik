import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CaseStudyMetrolink from './pages/CaseStudyMetrolink';
import CaseStudyAIQA from './pages/CaseStudyAIQA';
import CaseStudyDynamo from './pages/CaseStudyDynamo';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/metrolink" element={<CaseStudyMetrolink />} />
        <Route path="/case-study/ai-qa" element={<CaseStudyAIQA />} />
        <Route path="/case-study/dynamo" element={<CaseStudyDynamo />} />
      </Routes>
    </BrowserRouter>
  );
}
