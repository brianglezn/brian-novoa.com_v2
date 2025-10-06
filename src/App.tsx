import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './pages/components/ScrollToTop';
import Landing from './pages/landing/Landing';
import Projects from './pages/projects/Projects';
import ProfitLost from './pages/projects/cases/ProfitLost';
import CartaHub from './pages/projects/cases/CartaHub';
import Footer from './pages/components/Footer';
import Header from './pages/components/Header';

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/profit-lost" element={<ProfitLost />} />
                        <Route path="/projects/cartahub" element={<CartaHub />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
