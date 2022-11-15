import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Contactos from '../components/contactos/Contactos';

export const AboutUs = () => {
    return (
        <>
        <Navbar />
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda exercitationem earum molestias dolorum veniam praesentium quas, accusamus modi quam labore est optio voluptate repellendus id fuga at ipsa porro?</p>
        <Contactos />
        <Footer />
        </>
    )
}