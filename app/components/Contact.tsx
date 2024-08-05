"use client";
import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Contact: React.FC = () => {
    useEffect(() => {
        const map = new maplibregl.Map({
            container: 'map', // Container ID
            style: 'https://demotiles.maplibre.org/style.json', // Map style
            center: [3.3421, 6.5965], // Starting position [lng, lat]
            zoom: 13, // Starting zoom
        });

        // Add a marker
        new maplibregl.Marker()
            .setLngLat([3.3421, 6.5965])
            .setPopup(new maplibregl.Popup().setText('Na here i dey!!'))
            .addTo(map);

        return () => map.remove();
    }, []);

    return (
        <section className='w-full max-w-7xl m-auto bg-stone-50 py-28'>
            <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Get in touch with us</h2>
            <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry standard.</p>
            <div className='w-full px-10'>
                <div id="map" className='md:w-1/2 w-full px-3 h-96'></div>
                <div className='md:w-1/2 w-full px-3'></div>
            </div>
        </section>
    );
}

export default Contact;
