
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { useState } from 'react';
import { createContext } from 'react';
import { Home } from "./pages/Home"
import { TestimonialDetails } from './pages/TestimonialDetails';
import { useEffect } from 'react';
const TestimonialsContext = createContext();

function App() {
  const [page, setPage] = useState('Home');
  const [testimonialsData, setTestimonialsData] = useState([]);

  const handleTestimonialsDataUpdate = (newData) => {
    setTestimonialsData(newData);
  };

    useEffect(() => {
    if (page === 'Testimonials') {
      setTestimonialsData([]);
    }
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return (
          <Home onPageChange={setPage}            
            onTestimonialsDataUpdate={handleTestimonialsDataUpdate} 
          />
        );
      // case 'Faculty':
      //   return <FacultyPage onPageChange={setPage} />;
      case 'Testimonials':
        return (
          <TestimonialsContext.Provider value={testimonialsData}>
            <TestimonialDetails onPageChange={setPage} />
          </TestimonialsContext.Provider>
        );
      default:
        return null;
    }
  }
  return (
    <div className="App">
      <NavBar />
      {renderPage()}
    </div>
  );
}

export default App;
