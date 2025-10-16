import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './pages/components/ScrollToTop';
import Landing from './pages/landing-software/Landing';
import WebDesignLanding from './pages/landing-design/Landing';
import Projects from './pages/projects/Projects';
import ProfitLost from './pages/projects/cases/ProfitLost';
import CartaHub from './pages/projects/cases/CartaHub';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';
import Footer from './pages/components/Footer';
import Header from './pages/components/Header';
import Brian from './pages/linktree/Brian';

function AppShell() {
    const location = useLocation();
    const hideHeader = location.pathname.startsWith('/brian');
    return (
        <div className="min-h-screen flex flex-col">
            {!hideHeader && <Header />}
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/webs" element={<WebDesignLanding />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/profit-lost" element={<ProfitLost />} />
                    <Route path="/projects/cartahub" element={<CartaHub />} />
                    <Route path="/legal/privacy" element={<Privacy />} />
                    <Route path="/legal/terms" element={<Terms />} />
                    <Route path="/legal/cookies" element={<Cookies />} />
                    <Route path="/brian" element={<Brian />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AppShell />
        </BrowserRouter>
    );
}
