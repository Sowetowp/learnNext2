"use client";
import Carousel from "./components/Carousel";
import Expert from "./components/Expert";
import Founded from "./components/Founded";
import Award from "./components/Award";
import Services from "./components/Services";
import Consultants from "./components/Consultants";
import Happy from "./components/Happy";
import CaseStudies from "./components/CaseStudies";
import Testimony from "./components/Testimony";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [view, setView] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const offsetTop = (section as HTMLElement).offsetTop - 200;
        if (scrollTop >= offsetTop && scrollTop < offsetTop + (section as HTMLElement).offsetHeight) {
          setView(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const texts = {
    slides: [
      { img: '/hero-4.jpg', title: "Talented Consultants", details: "With over 20 years experience helping business to find comprehensive solutions", url: "#sec4", btn: "OUR SERVICES" },
      { img: '/hero-5.jpeg', title: "Qualified Professionals", details: "We have spent thousands of hours to learn technology for solving problems", url: "#sec2", btn: "ABOUT US" },
      { img: '/hero-6.jpg', title: "Returns Guaranteed", details: "We have helped hundreds of companies to grow their business in the competitive world", url: "#sec6", btn: "CASE STUDIES" },
    ],
    contactData: {
      head: "Get in touch with us",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard.",
      exp: [
        {
          img: <svg className='w-5' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1d4ed8"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <polygon className="fill-blue-700" points="434.162,293.382 434.162,493.862 308.321,493.862 308.321,368.583 203.682,368.583 203.682,493.862 77.841,493.862 77.841,293.382 256.002,153.862 "></polygon> <polygon className="fill-blue-700" points="0,242.682 256,38.93 512,242.682 482.21,285.764 256,105.722 29.79,285.764 "></polygon> <polygon className="fill-blue-700" points="439.853,18.138 439.853,148.538 376.573,98.138 376.573,18.138 "></polygon> </g> </g></svg>,
          head: "CONTACT ADDRESS",
          det: "833 Indian Summer Court Carol Stream, IL 60188"
        },
        {
          img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
          head: "EMAIL ADDRESS",
          det: "caliberthemes@gmail.com",
          det1: "info.caliber@gmail.com"
        },
        {
          img: <svg className='w-5' viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#1d4ed8"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>call [#192]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#1d4ed8"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596" id="call-[#192]"> </path> </g> </g> </g> </g></svg>,
          head: "PHONE NUMBER",
          det: "1-800-440-010",
          det1: "1-800-044-107"
        }
      ],
      coordinate: { lat: 6.5827, lng: 3.3405 }
    },
    navData: "SPERE",
    expertData: {
      head: "We are an expert consulting firm.",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae. Sapiente quos illum ab rem deleniti adipisci suscipit dignissimos.Sapiente quos illum ab rem deleniti adipisci suscipit dignissimos.",
      exp: [
        {
          img: <svg className='w-5' fill="#fff" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bell-solid</title> <path className="clr-i-solid clr-i-solid-path-1" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"></path><path className="clr-i-solid clr-i-solid-path-2" d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"></path> <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect> </g></svg>,
          head: "Modern Design",
          body: "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
        },
        {
          img: <svg className='w-5' viewBox="0 -7.5 104 104" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>17-multimeda-speaker-megaphone</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="3.Multimedia" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"> <g id="Multimedia-(Color)" transform="translate(-1298.000000, -308.000000)" stroke="#fff" strokeWidth="3.5"> <g id="17-multimeda-speaker-megaphone" transform="translate(1300.000000, 310.000000)"> <rect id="Layer-1" fill="#fff" x="92" y="0" width="8" height="74" rx="4"> </rect> <path d="M52,22.2792969 C52,22.2792969 76.1601562,22.2792969 92,2.04785156 L92,72 C75.9351563,51.9902344 52,51.9902344 52,51.9902344 L52,22.2792969 Z" id="Layer-2" fill="#FFFFFF"> </path> <rect id="Layer-3" fill="#fff" x="12" y="19" width="40" height="36" rx="3"> </rect> <path d="M10,49 L5,49 C2.23857625,49 0,46.76369 0,43.9980273 L0,30.0019727 C0,27.2394595 2.24419519,25 5,25 L10,25" id="Layer-4" fill="#fff"> </path> <path d="M20.5,28 L43.5,28" id="Layer-5" fill="#fff"> </path> <path d="M30,55 L18,55 L18,81.0007252 C18,83.2132053 19.7889923,85 21.9958262,85 L32.4243989,84.9999999 C34.3526936,85 36.5622035,82.3296774 34.5478516,80 C34.5478516,80 30,74.6191406 30,72.8208008 C30,69.8348349 30,55 30,55 Z" id="Layer-6" fill="#fff"> </path> </g> </g> </g> </g></svg>,
          head: "Free Support",
          body: "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
        },
        {
          img: <svg className='w-5' fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"></path></g></svg>,
          head: "Responsive",
          body: "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
        }
      ]
    },
    foundedData: {
      head: "Founded with the goal to serve expertise",
      imp: "Template is easy to setup and run",
      imp1: "Free support and lifetime updates",
      imp2: "Modern and unique design"
    },
    awardData: "We are award winning business consultant",
    servicesData: {
      head:"Our services",
      body:"There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.",
      exp: [
          {
              img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#fff"></path> </g></svg>,
              head: "Business Planning",
              body:"Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
          },
          {
              img: <svg className='w-5' fill="#fff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>globe</title> <path d="M19.063 8.094c2.063 2.063 3.344 4.875 3.344 7.906 0 3.063-1.281 5.813-3.344 7.875s-4.844 3.313-7.875 3.313c-3.063 0-5.813-1.25-7.875-3.313s-3.313-4.813-3.313-7.875c0-3.031 1.25-5.844 3.313-7.906s4.813-3.313 7.875-3.313c3.031 0 5.813 1.25 7.875 3.313zM12.469 22.313h0.063c0.094 0 0.188 0.031 0.25 0.125 0.063 0.063 0.125 0.125 0.25 0.125 0.031 0 0.063-0.031 0.063-0.094 0-0.125 0.031-0.25 0.031-0.281 0.031-0.094 0.094-0.094 0.156-0.094 0.031 0 0.031 0 0.031-0.063l-0.063-0.063c-0.031 0-0.063 0.031-0.063 0.063-0.031 0.031-0.063 0.063-0.094 0l-0.188 0.125-0.219-0.063-0.375-0.563 0.125-0.813c0-0.031-0.031-0.094-0.125-0.125s-0.094-0.094-0.063-0.125c-0.125-0.063-0.281-0.125-0.469-0.125-0.031 0-0.125 0.031-0.281 0.063-0.156 0-0.25 0-0.25-0.063 0-0.094 0.094-0.281 0.156-0.5 0.031-0.094 0.063-0.25 0.094-0.313 0-0.063 0.031-0.125 0.031-0.125l0.156-0.375-0.031-0.063-0.219-0.031c-0.063 0-0.281 0.125-0.438 0.25-0.156 0.188-0.281 0.344-0.281 0.469l-0.625 0.125c-0.125 0-0.25-0.031-0.344-0.156-0.031-0.156-0.125-0.344-0.25-0.531-0.125-0.156-0.156-0.313-0.156-0.469 0-0.188 0.031-0.438 0.094-0.594 0.063-0.188 0.063-0.406-0.063-0.594 0.031 0 0.125-0.063 0.063-0.125l0.156-0.188 0.031-0.031 0.031 0.031c0.125-0.094 0.344-0.125 0.531-0.094 0.219 0.031 0.344-0.063 0.406-0.219l0.219 0.219c0.063 0.031 0.188-0.188 0.188-0.25l-0.094-0.063 0.563-0.125 0.031 0.063h0.25l0.313 0.188c0.031 0 0.063-0.031 0.094-0.063 0.063-0.063 0.094-0.063 0.125-0.031l0.281 0.313c-0.031 0.063-0.031 0.125-0.031 0.188 0.031 0.031 0.063 0.063 0.063 0.094 0 0.125 0.281 0.688 0.438 0.688 0.094 0 0.125-0.063 0.094-0.188v-0.25c0-0.156-0.031-0.344-0.094-0.531-0.094-0.156-0.156-0.375-0.219-0.563v-0.063c0-0.094 0.063-0.188 0.188-0.25 0.094-0.063 0.156-0.125 0.156-0.125 0.094-0.063 0.188-0.156 0.313-0.219 0.094-0.063 0.188-0.219 0.25-0.313l0.094-0.219v-0.125h0.094s0.063-0.031 0.063-0.094c0 0-0.031-0.031-0.063-0.031-0.031-0.031-0.125-0.094-0.188-0.156l0.063-0.063c0.094-0.094 0.125-0.313 0.063-0.406l0.25-0.125c-0.063 0.125 0.125 0.156 0.188 0.125l0.125-0.281c-0.063-0.156-0.094 0 0-0.188 0.094-0.031 0.188-0.063 0.281-0.125 0.094-0.031 0.156-0.063 0.25-0.063 0.031 0 0.063 0.031 0.063 0.031 0.063 0 0.094-0.031 0.094-0.031 0-0.094-0.031-0.156-0.063-0.156l0.156-0.344c0.125 0 0.25-0.063 0.313-0.188l0.25-0.031c0.063 0 0.094-0.031 0.094-0.094v-0.063l0.469-0.125 0.063-0.156-0.125-0.188s0.031-0.031 0.031-0.063-0.031-0.063-0.063-0.094c-0.031 0-0.063-0.031-0.094-0.031-0.031-0.031-0.063-0.063-0.094-0.063h0.25s0.125-0.031 0.125-0.125c0-0.125-0.063-0.156-0.188-0.156-0.344 0-0.875 0.125-1.063 0.5l-0.188 0.094 0.25-0.25 0.031-0.063c0-0.031-0.031-0.063-0.094-0.094h-0.094c0.313 0 0.5-0.094 0.625-0.188 0.094-0.094 0.188-0.188 0.406-0.25 0.219 0.031 0.438 0.031 0.656 0.031 0.188-0.031 0.375-0.031 0.594-0.031 0.094-0.063 0.219-0.188 0.281-0.313l0.313-0.031c0.063 0.063 0.281-0.094 0.281-0.188s-0.031-0.125-0.125-0.156-0.188-0.094-0.188-0.188v-0.094c0.031-0.031 0-0.063-0.031-0.063-0.125 0-0.438 0.156-0.531 0.219-0.063 0.063-0.094-0.031-0.094-0.094l0.031 0.031 0.125-0.063 0.313-0.125 0.031-0.031c0-0.125-0.188-0.156-0.25-0.156-0.031 0-0.094 0.031-0.156 0.063-0.063 0-0.125 0-0.125-0.063l0.031-0.063c-0.219-0.156-0.406-0.469-0.406-0.563v-0.125c0.031-0.031 0-0.031-0.063-0.031h-0.094c-0.031 0.031-0.063 0-0.063-0.063s-0.125-0.406-0.281-0.406l-0.094 0.094c0 0.063-0.031 0.094-0.094 0.125s-0.094 0.063-0.094 0.094h-0.031l-0.313 0.188c0-0.063-0.031-0.063-0.063-0.031-0.031 0-0.031 0.031-0.094 0.031h-0.063c0.156 0 0.125-0.219 0-0.219l-0.25 0.031c-0.063 0-0.063 0 0-0.063 0.031-0.063 0.094-0.125 0.031-0.188 0-0.063-0.031-0.063-0.063-0.031l0.063-0.094c0.063-0.031-0.031-0.156-0.094-0.219l-0.281-0.031-0.188-0.188c-0.031 0.031-0.063 0-0.125-0.031-0.031-0.031-0.094-0.094-0.125-0.094l-0.219 0.094-0.563-0.125c-0.063 0-0.156 0.031-0.156 0.125 0 0.031 0 0.063 0.031 0.063 0.063 0.031 0.063 0.063 0.063 0.094s0.031 0.156 0.063 0.313c0 0.156 0 0.219-0.094 0.188l-0.125 0.188c0 0.063 0.063 0.094 0.094 0.094 0.094 0.063 0.188 0.156 0.25 0.25 0.063 0.063 0.063 0.156 0.031 0.25l-0.594 0.469v0.031c0 0.094 0 0.156 0.031 0.219 0.063 0.063 0.063 0.156 0.125 0.25 0.156 0.063 0.156 0.125 0.031 0.188-0.063 0-0.125 0.031-0.188 0.063l-0.063 0.063c0 0.031-0.031 0.031-0.063 0.031h-0.156s0-0.031 0.031-0.031c0 0 0.031-0.031 0.031-0.063l-0.281-0.156-0.125-0.219c0.031-0.094 0.031-0.156 0-0.188s-0.031-0.094-0.031-0.156-0.063-0.219-0.188-0.219c-0.156 0-0.281 0.031-0.438 0.063 0.063-0.031-0.063-0.188-0.094-0.188-0.156 0-0.344-0.063-0.563-0.188s-0.375-0.188-0.5-0.188c-0.094 0-0.281 0.031-0.406 0.094 0.063-0.031 0.063-0.063 0.094-0.156l-0.188-0.313-0.031-0.031c-0.063 0-0.125 0.031-0.188 0.094-0.063 0.031-0.156 0-0.156-0.125 0-0.031 0.031-0.063 0.031-0.063 0.031-0.031 0.031-0.031 0-0.063 0-0.094 0.031-0.188 0.125-0.281 0.063-0.063 0.094-0.188 0.125-0.281 0.063-0.031 0.063-0.063 0.063-0.094 0-0.063 0.031-0.063 0.063-0.063 0.063 0 0.156-0.031 0.219-0.063 0.063-0.063 0.125-0.094 0.219-0.094l0.031-0.094c0-0.031-0.094-0.063-0.281-0.094-0.219-0.031-0.313-0.031-0.313-0.094l0.031-0.031c0.188 0.063 0.344 0.094 0.438 0.094 0.188 0.031 0.281-0.031 0.469-0.125 0.063-0.031 0.25-0.094 0.406-0.188 0-0.031-0.031-0.031-0.125-0.063h0.125l0.219-0.125v-0.125l-0.063-0.063 0.313-0.063c-0.031-0.063 0.031-0.094 0.063-0.094 0.063 0 0.125 0.031 0.188 0.094s0.094 0.063 0.125 0.063l0.281-0.094c0-0.031 0.031-0.031 0.094-0.031 0.063-0.031 0.094-0.063 0.063-0.094l-0.219-0.219c-0.063 0-0.094-0.094-0.031-0.094 0.094 0 0.156-0.031 0.094-0.125-0.063-0.031-0.156-0.094-0.25-0.125-0.094-0.063-0.188-0.094-0.281-0.094-0.063 0-0.188 0.031-0.188 0.125 0 0.063 0.031 0.063 0.063 0.063 0.063 0 0.094 0.031 0.094 0.063 0.063 0.031 0.031 0.063-0.031 0.063h-0.063c-0.063 0-0.156 0.063-0.219 0.188-0.063 0.094-0.156 0.188-0.25 0.219-0.031 0-0.031 0-0.031-0.031 0.031-0.031 0-0.031 0-0.063-0.031-0.031-0.063-0.063-0.094-0.063-0.063-0.031-0.125-0.031-0.125-0.063 0-0.063 0.063-0.094 0.125-0.188 0.031-0.094-0.063-0.125-0.219-0.125-0.063 0-0.125 0.031-0.156 0.094-0.031 0.031-0.063 0.094-0.094 0.156l-0.313-0.344-0.25-0.031c0-0.063 0.031-0.125 0.063-0.188 0.063-0.125-0.188-0.281-0.281-0.375-0.031 0-0.094-0.031-0.156-0.031-0.031 0-0.219 0.156-0.344 0.219-0.063 0.031-0.094 0.063-0.094 0.094 0 0.063 0.063 0.063 0.156 0.063h-0.031c-0.063 0-0.094 0.031-0.094 0.125 0 0.031 0.25 0.094 0.313 0.094s0.125 0 0.125 0.031c0.031 0.031 0.031 0.031 0.094 0.031l0.094-0.031v0.063s-0.031 0.063-0.031 0.063l0.031 0.094-0.313 0.156-0.031 0.031c-0.031 0-0.063 0-0.063 0.031s0 0.094 0.063 0.156c0.031 0.063 0 0.094-0.156 0.094l-0.094-0.063c0-0.063-0.063-0.125-0.219-0.188-0.281-0.094-0.781-0.125-1.219-0.125-0.219-0.031-0.375-0.031-0.5-0.031l-0.469 0.156 0.125 0.25c-0.031 0-0.094 0.031-0.094 0.031-0.125-0.094-0.313-0.281-0.375-0.281l-0.219-0.031c-0.688 0.031-1.5 0.688-2.281 1.469s-1.469 1.656-1.813 2.188h0.063c0.063 0 0.094-0.031 0.188-0.063 0.063-0.031 0.094 0.031 0.094 0.125 0 0.063 0 0.094-0.031 0.156s0.031 0.094 0.156 0.094c0.031 0 0.063-0.031 0.063-0.094 0.031-0.063 0.031-0.063 0.031 0l0.063 0.219v0.031c0 0.031-0.031 0.063-0.063 0.094-0.094 0.031 0 0.125 0.094 0.125h0.156l0.063-0.031 0.031-0.031c0 0.125 0.125 0.156 0.219 0.156h0.031s-0.031 0.063-0.063 0.094c-0.063 0-0.063 0.031 0 0.063l0.313 0.063v0.031l0.188 0.406c0 0.063-0.063 0.219-0.125 0.219s-0.063-0.031-0.063-0.063c0.031 0 0.031-0.031 0.031-0.094 0-0.031-0.031-0.063-0.031-0.094-0.031-0.031-0.094-0.031-0.219-0.031-0.031 0-0.125 0-0.063 0.094l0.156 0.344 0.063 0.063c-0.188 0-0.219 0.625-0.219 0.813l0.031 0.25 0.031 0.094v0.031l-0.031 0.281 0.375 0.625h0.094c0 0.031 0 0.063-0.031 0.094s-0.031 0.063-0.031 0.125l0.125 0.094c0 0.188 0.063 0.219 0.219 0.375 0 0.094 0.125 0.219 0.313 0.344 0.219 0.094 0.344 0.156 0.406 0.188 0.125 0.438 0.344 0.906 0.656 1.188l0.031 0.188-0.063 0.063c-0.063 0-0.063 0.031-0.031 0.063l0.25 0.125c0.063-0.063 0.094 0 0.156 0.094 0.063 0.125 0.094 0.188 0.125 0.219v0.094l0.156 0.219 0.063 0.063 0.063-0.156c-0.063-0.156-0.281-0.5-0.469-0.781-0.094-0.156-0.188-0.313-0.281-0.438-0.063-0.094-0.094-0.156-0.094-0.188s-0.031-0.375-0.063-0.438c0.031 0.031 0.125 0.063 0.188 0.094 0.094 0.031 0.188 0.063 0.25 0.094 0.031 0.25 0.125 0.438 0.281 0.594 0.125 0.125 0.25 0.281 0.344 0.469-0.063 0.063 0.063 0.063 0.125 0.063 0.031 0.063 0.031 0.094 0.031 0.219 0.281 0.281 0.844 0.938 0.844 1.219v0.031l-0.063 0.188c0.125 0.281 0.406 0.5 0.688 0.594h0.063c0.156 0.094 0.375 0.188 0.594 0.281 0.188 0.125 0.375 0.219 0.563 0.281l0.313-0.188c0.156 0.031 0.344 0.188 0.563 0.375s0.5 0.406 0.875 0.469c0.125-0.094 0.188-0.063 0.188 0.063v0.063l0.344 0.406 0.063 0.188c0.188 0.125 0.406 0.313 0.5 0.531zM8.438 6.594l-0.031-0.063c-0.063-0.031-0.219-0.094-0.281-0.094-0.031 0-0.094 0.031-0.219 0.063-0.219 0.125-0.563 0.219-0.813 0.344-0.125 0.063-0.219 0.094-0.281 0.094 0.125 0 0.25-0.031 0.375-0.094 0.094-0.063 0.219-0.094 0.344-0.094l0.094 0.063c0.063 0.031 0.094 0.031 0.156 0.031 0.031 0 0.063 0 0.125 0.063 0.063-0.031 0.125-0.031 0.219 0.031l0.094-0.063v-0.125l-0.031-0.063 0.063 0.031c0.063 0 0.125-0.031 0.188-0.125zM13.156 24.906l0.031 0.188c0 0.063-0.031 0.063-0.063 0.125-0.094 0.063-0.25 0.156-0.25 0.344 0 0.031 0.031 0.063 0.031 0.125 0.031 0.031 0.063 0.063 0.063 0.125 0 0.031-0.031 0.063-0.031 0.094 2.156-0.375 4.094-1.406 5.594-3h-0.031c-0.063 0.031-0.156 0.031-0.188 0l-0.094 0.031-0.156-0.031h-0.094c-0.063-0.094-0.125-0.156-0.219-0.219l-0.031-0.031c-0.031 0-0.063 0-0.063 0.063 0-0.281-0.219-0.531-0.469-0.531 0 0.031-0.031 0.031-0.031 0.031h-0.063l-0.063-0.031h0.094l0.063-0.188-0.156-0.094-0.031 0.031c-0.125-0.031-0.219-0.094-0.281-0.219l-0.094-0.031v0.031l-0.063 0.031c-0.125 0.031-0.219 0.063-0.281 0.094-0.125-0.031-0.219-0.094-0.25-0.125l-0.375 0.031c0-0.125-0.063-0.281-0.219-0.281-0.188 0-0.438 0-0.5 0.219 0 0.063 0.031 0.156 0.063 0.188v0.125l-0.031 0.063-0.031 0.031h-0.031l-0.094-0.219 0.094-0.125c-0.031-0.063-0.031-0.094-0.031-0.156s-0.031-0.094-0.031-0.156l-0.031-0.031h-0.094l-0.188 0.125h-0.125l-0.031 0.063c-0.031 0-0.031 0.031-0.031 0.063 0 0-0.031 0-0.031 0.031l-0.031-0.031h-0.125c-0.063 0.063-0.094 0.156-0.125 0.25l0.063 0.063-0.156 0.063-0.031 0.063-0.094 0.063v0.031h-0.031v0.156h-0.031c-0.031-0.125-0.125-0.25-0.313-0.344h-0.094v0.063c0 0.063 0.063 0.094 0.125 0.125 0.063 0.063 0.094 0.125 0.125 0.156-0.031-0.031-0.094 0-0.094 0.031v0.063l0.188 0.281v0.531l0.063 0.125c-0.063 0.156-0.125 0.313-0.219 0.406v-0.031l-0.063 0.031-0.031 0.031-0.031 0.125 0.031 0.031v0.031l-0.063-0.063-0.031 0.188-0.156 0.063c-0.063 0.031-0.094 0.063-0.063 0.156 0 0.063-0.031 0.094-0.094 0.125l0.031 0.063-0.063 0.094c0 0.031 0 0.063-0.031 0.063v0.125l0.031 0.219 0.063 0.031 0.063-0.031z"></path> </g></svg>,
              head: "Market Research",
              body:"Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
          },
          {
              img: <svg className='w-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22 12v8h-1v-8zm-4 8V7h-1v13zm-4 0V2h-1v18zm-4 0V7H9v13zm-5 0h1v-8H5zM1 1v22h22v-1H2V1z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>,
              head: "Investment",
              body:"Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
          },
          {
              img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16.5 11.3308C16.5 13.1552 14.7029 15 12 15C9.29713 15 7.5 13.1552 7.5 11.3308V7.5H16.5V11.3308ZM17.9502 12C17.7751 13.1667 17.1485 14.2115 16.2263 15H18V16.5L12 16.5L6 16.5V15H7.77371C6.67832 14.0635 6 12.7654 6 11.3308V6H18C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H17.9502ZM18 7.5V10.5C18.8284 10.5 19.5 9.82843 19.5 9C19.5 8.17157 18.8284 7.5 18 7.5ZM7.5 18.75L7.5 17.25L16.5 17.25V18.75L7.5 18.75Z" fill="#fff"></path> </g></svg>,
              head: "Management",
              body:"Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard ."
          }
      ]
  },
  consultantData:{
    head:"Our expert consultants",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.",
    exp: [
        { img: "/img-10.jpg", name: "JAMES WILLAMSON", post: "FOUNDER" },
        { img: "/img-17.jpg", name: "KATE NELSON", post: "ACCOUNTANT" },
        { img: "/img-13.jpg", name: "LISA RAY", post: "DESIGNER" },
        { img: "/img-15.jpg", name: "JOHN DOE", post: "DIRECTOR" }
    ]
}
  }
  return (
    <>
      <Carousel view={view} slides={texts.slides} navData={texts.navData} />
      <Expert expertData={texts.expertData} />
      <Founded foundedData={texts.foundedData} />
      <Award awardData={texts.awardData} />
      <Services servicesData={texts.servicesData}/>
      <Consultants consultantData={texts.consultantData}/>
      <Happy view={view}  />
      <CaseStudies />
      <Testimony />
      <Blog />
      <Contact contactData={texts.contactData} />
      <Footer />
    </>
  );
}
