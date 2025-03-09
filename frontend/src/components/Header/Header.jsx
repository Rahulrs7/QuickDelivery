import React, { useState, useEffect } from 'react';
import './Header.css';

const images = [
    '/header_img.png',
    '/resized_img1.png',
    '/resized_img2.png',
    '/resized_img3.png'
];

const Header = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);
    const [menu, setMenu] = useState("");
    return (
        <div className='header' style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <a href="#explore-menu" onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>
                    <button>View Menu</button>
                </a>

            </div>
        </div>
    );
};

export default Header;
