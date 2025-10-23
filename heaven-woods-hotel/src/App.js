// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from './context/LanguageContext';
import { BookingProvider } from './context/BookingContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { theme, GlobalStyles } from './styles/global';

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <BookingProvider>
          <GlobalStyles />
          <Router>
            <ScrollToTop />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/booking-confirmation" element={<BookingConfirmation />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </BookingProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;