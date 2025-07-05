import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminAuth from './components/AdminAuth';

import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Join from './pages/Join';
import Contact from './pages/Contact';
import StudioPage from './pages/StudioPage';
import NotificationModal from './components/NotificationModal';

const App = () => {
  return (
    <Router>
      {/* Global Notification Popup */}
      <NotificationModal />

      {/* Full Page Wrapper */}
      <div className="flex flex-col min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">

        {/* Header/Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow w-full px-4 sm:px-6 md:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/board" element={<Board />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/admin" 
              element={
                <AdminAuth>
                  <StudioPage />
                </AdminAuth>
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
