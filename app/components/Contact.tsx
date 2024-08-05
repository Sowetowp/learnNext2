"use client";
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact: React.FC = () => {
    useEffect(() => {
        // Ensure Leaflet's CSS is included
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <section className='w-full max-w-7xl m-auto bg-stone-50 py-28'>
            <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Get in touch with us</h2>
            <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry standard.</p>
            <div className='w-full px-10'>
                <div className='md:w-1/2 w-full px-3'>
                    <MapContainer center={[6.5965, 3.3421]} zoom={13} className='w-full h-96'>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[6.5965, 3.3421]}>
                            <Popup>Na here i dey!!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='md:w-1/2 w-full px-3'></div>
            </div>
        </section>
    );
}

export default Contact;
