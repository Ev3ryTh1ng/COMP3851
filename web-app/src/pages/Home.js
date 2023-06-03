
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "../components/Banner";
import {FirstDay} from "../components/FirstDay";
import { FacultyInfo } from '../components/FacultyInfo';
import { Footer } from '../components/Footer';
import {Testimonial} from "../components/Testimonial"
import {FAQ} from "../components/FAQ"

function Home({ onPageChange, onTestimonialsDataUpdate}) {
    
    const handleTestimonialsFormSubmit = (newData) => {
        onTestimonialsDataUpdate(newData);
        onPageChange('Testimonials')
    };

    return (
        <div>
            <Banner />
            <FirstDay />
            <FacultyInfo />
            <Testimonial setStudent={handleTestimonialsFormSubmit}/>
            <FAQ />
            <Footer />
        </div>
    );  
}

export {Home}