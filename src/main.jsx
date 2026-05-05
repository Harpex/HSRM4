import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import QualityProcess from "./pages/QualityProcess.jsx";
import Solutions from "./pages/Solutions.jsx";
import Contact from "./pages/Contact.jsx";
import "./styles.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <section style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#082032", color: "#fff", padding: 24 }}>
          <div style={{ maxWidth: 720 }}>
            <h1>Hasmop site yüklenemedi</h1>
            <p>{this.state.error.message}</p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

const rootElement = document.getElementById("root");

try {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/urunler" element={<Products />} />
              <Route path="/urunler/:slug" element={<ProductDetail />} />
              <Route path="/uretim-kalite" element={<QualityProcess />} />
              <Route path="/kurumsal-cozumler" element={<Solutions />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>,
  );
} catch (error) {
  rootElement.innerHTML = `
    <section style="min-height:100vh;display:grid;place-items:center;background:#082032;color:#fff;font-family:Arial,sans-serif;padding:24px">
      <div style="max-width:720px">
        <h1>Hasmop site yüklenemedi</h1>
        <p>${error.message}</p>
      </div>
    </section>
  `;
}
