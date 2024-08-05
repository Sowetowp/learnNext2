"use client";
import React, { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';

const Contact: React.FC = () => {
    useEffect(() => {
        const map = new Map({
            target: 'map', // The ID of the DOM element to render the map
            layers: [
                new TileLayer({
                    source: new OSM(), // OpenStreetMap tiles
                }),
            ],
            view: new View({
                center: fromLonLat([3.3421, 6.5965]), // Longitude and Latitude in EPSG:3857 projection
                zoom: 13, // Zoom level
            }),
        });

        return () => {
            // Cleanup map instance
            map.setTarget(undefined);
        };
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
