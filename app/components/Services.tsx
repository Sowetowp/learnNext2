import React from 'react'

const Services = () => {
    const exp = [
        {
            img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#fff"></path> </g></svg>,
            head: "Business Planning"
        },
        {
            img: <svg className='w-5' fill="#fff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>globe</title> <path d="M19.063 8.094c2.063 2.063 3.344 4.875 3.344 7.906 0 3.063-1.281 5.813-3.344 7.875s-4.844 3.313-7.875 3.313c-3.063 0-5.813-1.25-7.875-3.313s-3.313-4.813-3.313-7.875c0-3.031 1.25-5.844 3.313-7.906s4.813-3.313 7.875-3.313c3.031 0 5.813 1.25 7.875 3.313zM12.469 22.313h0.063c0.094 0 0.188 0.031 0.25 0.125 0.063 0.063 0.125 0.125 0.25 0.125 0.031 0 0.063-0.031 0.063-0.094 0-0.125 0.031-0.25 0.031-0.281 0.031-0.094 0.094-0.094 0.156-0.094 0.031 0 0.031 0 0.031-0.063l-0.063-0.063c-0.031 0-0.063 0.031-0.063 0.063-0.031 0.031-0.063 0.063-0.094 0l-0.188 0.125-0.219-0.063-0.375-0.563 0.125-0.813c0-0.031-0.031-0.094-0.125-0.125s-0.094-0.094-0.063-0.125c-0.125-0.063-0.281-0.125-0.469-0.125-0.031 0-0.125 0.031-0.281 0.063-0.156 0-0.25 0-0.25-0.063 0-0.094 0.094-0.281 0.156-0.5 0.031-0.094 0.063-0.25 0.094-0.313 0-0.063 0.031-0.125 0.031-0.125l0.156-0.375-0.031-0.063-0.219-0.031c-0.063 0-0.281 0.125-0.438 0.25-0.156 0.188-0.281 0.344-0.281 0.469l-0.625 0.125c-0.125 0-0.25-0.031-0.344-0.156-0.031-0.156-0.125-0.344-0.25-0.531-0.125-0.156-0.156-0.313-0.156-0.469 0-0.188 0.031-0.438 0.094-0.594 0.063-0.188 0.063-0.406-0.063-0.594 0.031 0 0.125-0.063 0.063-0.125l0.156-0.188 0.031-0.031 0.031 0.031c0.125-0.094 0.344-0.125 0.531-0.094 0.219 0.031 0.344-0.063 0.406-0.219l0.219 0.219c0.063 0.031 0.188-0.188 0.188-0.25l-0.094-0.063 0.563-0.125 0.031 0.063h0.25l0.313 0.188c0.031 0 0.063-0.031 0.094-0.063 0.063-0.063 0.094-0.063 0.125-0.031l0.281 0.313c-0.031 0.063-0.031 0.125-0.031 0.188 0.031 0.031 0.063 0.063 0.063 0.094 0 0.125 0.281 0.688 0.438 0.688 0.094 0 0.125-0.063 0.094-0.188v-0.25c0-0.156-0.031-0.344-0.094-0.531-0.094-0.156-0.156-0.375-0.219-0.563v-0.063c0-0.094 0.063-0.188 0.188-0.25 0.094-0.063 0.156-0.125 0.156-0.125 0.094-0.063 0.188-0.156 0.313-0.219 0.094-0.063 0.188-0.219 0.25-0.313l0.094-0.219v-0.125h0.094s0.063-0.031 0.063-0.094c0 0-0.031-0.031-0.063-0.031-0.031-0.031-0.125-0.094-0.188-0.156l0.063-0.063c0.094-0.094 0.125-0.313 0.063-0.406l0.25-0.125c-0.063 0.125 0.125 0.156 0.188 0.125l0.125-0.281c-0.063-0.156-0.094 0 0-0.188 0.094-0.031 0.188-0.063 0.281-0.125 0.094-0.031 0.156-0.063 0.25-0.063 0.031 0 0.063 0.031 0.063 0.031 0.063 0 0.094-0.031 0.094-0.031 0-0.094-0.031-0.156-0.063-0.156l0.156-0.344c0.125 0 0.25-0.063 0.313-0.188l0.25-0.031c0.063 0 0.094-0.031 0.094-0.094v-0.063l0.469-0.125 0.063-0.156-0.125-0.188s0.031-0.031 0.031-0.063-0.031-0.063-0.063-0.094c-0.031 0-0.063-0.031-0.094-0.031-0.031-0.031-0.063-0.063-0.094-0.063h0.25s0.125-0.031 0.125-0.125c0-0.125-0.063-0.156-0.188-0.156-0.344 0-0.875 0.125-1.063 0.5l-0.188 0.094 0.25-0.25 0.031-0.063c0-0.031-0.031-0.063-0.094-0.094h-0.094c0.313 0 0.5-0.094 0.625-0.188 0.094-0.094 0.188-0.188 0.406-0.25 0.219 0.031 0.438 0.031 0.656 0.031 0.188-0.031 0.375-0.031 0.594-0.031 0.094-0.063 0.219-0.188 0.281-0.313l0.313-0.031c0.063 0.063 0.281-0.094 0.281-0.188s-0.031-0.125-0.125-0.156-0.188-0.094-0.188-0.188v-0.094c0.031-0.031 0-0.063-0.031-0.063-0.125 0-0.438 0.156-0.531 0.219-0.063 0.063-0.094-0.031-0.094-0.094l0.031 0.031 0.125-0.063 0.313-0.125 0.031-0.031c0-0.125-0.188-0.156-0.25-0.156-0.031 0-0.094 0.031-0.156 0.063-0.063 0-0.125 0-0.125-0.063l0.031-0.063c-0.219-0.156-0.406-0.469-0.406-0.563v-0.125c0.031-0.031 0-0.031-0.063-0.031h-0.094c-0.031 0.031-0.063 0-0.063-0.063s-0.125-0.406-0.281-0.406l-0.094 0.094c0 0.063-0.031 0.094-0.094 0.125s-0.094 0.063-0.094 0.094h-0.031l-0.313 0.188c0-0.063-0.031-0.063-0.063-0.031-0.031 0-0.031 0.031-0.094 0.031h-0.063c0.156 0 0.125-0.219 0-0.219l-0.25 0.031c-0.063 0-0.063 0 0-0.063 0.031-0.063 0.094-0.125 0.031-0.188 0-0.063-0.031-0.063-0.063-0.031l0.063-0.094c0.063-0.031-0.031-0.156-0.094-0.219l-0.281-0.031-0.188-0.188c-0.031 0.031-0.063 0-0.125-0.031-0.031-0.031-0.094-0.094-0.125-0.094l-0.219 0.094-0.563-0.125c-0.063 0-0.156 0.031-0.156 0.125 0 0.031 0 0.063 0.031 0.063 0.063 0.031 0.063 0.063 0.063 0.094s0.031 0.156 0.063 0.313c0 0.156 0 0.219-0.094 0.188l-0.125 0.188c0 0.063 0.063 0.094 0.094 0.094 0.094 0.063 0.188 0.156 0.25 0.25 0.063 0.063 0.063 0.156 0.031 0.25l-0.594 0.469v0.031c0 0.094 0 0.156 0.031 0.219 0.063 0.063 0.063 0.156 0.125 0.25 0.156 0.063 0.156 0.125 0.031 0.188-0.063 0-0.125 0.031-0.188 0.063l-0.063 0.063c0 0.031-0.031 0.031-0.063 0.031h-0.156s0-0.031 0.031-0.031c0 0 0.031-0.031 0.031-0.063l-0.281-0.156-0.125-0.219c0.031-0.094 0.031-0.156 0-0.188s-0.031-0.094-0.031-0.156-0.063-0.219-0.188-0.219c-0.156 0-0.281 0.031-0.438 0.063 0.063-0.031-0.063-0.188-0.094-0.188-0.156 0-0.344-0.063-0.563-0.188s-0.375-0.188-0.5-0.188c-0.094 0-0.281 0.031-0.406 0.094 0.063-0.031 0.063-0.063 0.094-0.156l-0.188-0.313-0.031-0.031c-0.063 0-0.125 0.031-0.188 0.094-0.063 0.031-0.156 0-0.156-0.125 0-0.031 0.031-0.063 0.031-0.063 0.031-0.031 0.031-0.031 0-0.063 0-0.094 0.031-0.188 0.125-0.281 0.063-0.063 0.094-0.188 0.125-0.281 0.063-0.031 0.063-0.063 0.063-0.094 0-0.063 0.031-0.063 0.063-0.063 0.063 0 0.156-0.031 0.219-0.063 0.063-0.063 0.125-0.094 0.219-0.094l0.031-0.094c0-0.031-0.094-0.063-0.281-0.094-0.219-0.031-0.313-0.031-0.313-0.094l0.031-0.031c0.188 0.063 0.344 0.094 0.438 0.094 0.188 0.031 0.281-0.031 0.469-0.125 0.063-0.031 0.25-0.094 0.406-0.188 0-0.031-0.031-0.031-0.125-0.063h0.125l0.219-0.125v-0.125l-0.063-0.063 0.313-0.063c-0.031-0.063 0.031-0.094 0.063-0.094 0.063 0 0.125 0.031 0.188 0.094s0.094 0.063 0.125 0.063l0.281-0.094c0-0.031 0.031-0.031 0.094-0.031 0.063-0.031 0.094-0.063 0.063-0.094l-0.219-0.219c-0.063 0-0.094-0.094-0.031-0.094 0.094 0 0.156-0.031 0.094-0.125-0.063-0.031-0.156-0.094-0.25-0.125-0.094-0.063-0.188-0.094-0.281-0.094-0.063 0-0.188 0.031-0.188 0.125 0 0.063 0.031 0.063 0.063 0.063 0.063 0 0.094 0.031 0.094 0.063 0.063 0.031 0.031 0.063-0.031 0.063h-0.063c-0.063 0-0.156 0.063-0.219 0.188-0.063 0.094-0.156 0.188-0.25 0.219-0.031 0-0.031 0-0.031-0.031 0.031-0.031 0-0.031 0-0.063-0.031-0.031-0.063-0.063-0.094-0.063-0.063-0.031-0.125-0.031-0.125-0.063 0-0.063 0.063-0.094 0.125-0.188 0.031-0.094-0.063-0.125-0.219-0.125-0.063 0-0.125 0.031-0.156 0.094-0.031 0.031-0.063 0.094-0.094 0.156l-0.313-0.344-0.25-0.031c0-0.063 0.031-0.125 0.063-0.188 0.063-0.125-0.188-0.281-0.281-0.375-0.031 0-0.094-0.031-0.156-0.031-0.031 0-0.219 0.156-0.344 0.219-0.063 0.031-0.094 0.063-0.094 0.094 0 0.063 0.063 0.063 0.156 0.063h-0.031c-0.063 0-0.094 0.031-0.094 0.125 0 0.031 0.25 0.094 0.313 0.094s0.125 0 0.125 0.031c0.031 0.031 0.031 0.031 0.094 0.031l0.094-0.031v0.063s-0.031 0.063-0.031 0.063l0.031 0.094-0.313 0.156-0.031 0.031c-0.031 0-0.063 0-0.063 0.031s0 0.094 0.063 0.156c0.031 0.063 0 0.094-0.156 0.094l-0.094-0.063c0-0.063-0.063-0.125-0.219-0.188-0.281-0.094-0.781-0.125-1.219-0.125-0.219-0.031-0.375-0.031-0.5-0.031l-0.469 0.156 0.125 0.25c-0.031 0-0.094 0.031-0.094 0.031-0.125-0.094-0.313-0.281-0.375-0.281l-0.219-0.031c-0.688 0.031-1.5 0.688-2.281 1.469s-1.469 1.656-1.813 2.188h0.063c0.063 0 0.094-0.031 0.188-0.063 0.063-0.031 0.094 0.031 0.094 0.125 0 0.063 0 0.094-0.031 0.156s0.031 0.094 0.156 0.094c0.031 0 0.063-0.031 0.063-0.094 0.031-0.063 0.031-0.063 0.031 0l0.063 0.219v0.031c0 0.031-0.031 0.063-0.063 0.094-0.094 0.031 0 0.125 0.094 0.125h0.156l0.063-0.031 0.031-0.031c0 0.125 0.125 0.156 0.219 0.156h0.031s-0.031 0.063-0.063 0.094c-0.063 0-0.063 0.031 0 0.063l0.313 0.063v0.031l0.188 0.406c0 0.063-0.063 0.219-0.125 0.219s-0.063-0.031-0.063-0.063c0.031 0 0.031-0.031 0.031-0.094 0-0.031-0.031-0.063-0.031-0.094-0.031-0.031-0.094-0.031-0.219-0.031-0.031 0-0.125 0-0.063 0.094l0.156 0.344 0.063 0.063c-0.188 0-0.219 0.625-0.219 0.813l0.031 0.25 0.031 0.094v0.031l-0.031 0.281 0.375 0.625h0.094c0 0.031 0 0.063-0.031 0.094s-0.031 0.063-0.031 0.125l0.125 0.094c0 0.188 0.063 0.219 0.219 0.375 0 0.094 0.125 0.219 0.313 0.344 0.219 0.094 0.344 0.156 0.406 0.188 0.125 0.438 0.344 0.906 0.656 1.188l0.031 0.188-0.063 0.063c-0.063 0-0.063 0.031-0.031 0.063l0.25 0.125c0.063-0.063 0.094 0 0.156 0.094 0.063 0.125 0.094 0.188 0.125 0.219v0.094l0.156 0.219 0.063 0.063 0.063-0.156c-0.063-0.156-0.281-0.5-0.469-0.781-0.094-0.156-0.188-0.313-0.281-0.438-0.063-0.094-0.094-0.156-0.094-0.188s-0.031-0.375-0.063-0.438c0.031 0.031 0.125 0.063 0.188 0.094 0.094 0.031 0.188 0.063 0.25 0.094 0.031 0.25 0.125 0.438 0.281 0.594 0.125 0.125 0.25 0.281 0.344 0.469-0.063 0.063 0.063 0.063 0.125 0.063 0.031 0.063 0.031 0.094 0.031 0.219 0.281 0.281 0.844 0.938 0.844 1.219v0.031l-0.063 0.188c0.125 0.281 0.406 0.5 0.688 0.594h0.063c0.156 0.094 0.375 0.188 0.594 0.281 0.188 0.125 0.375 0.219 0.563 0.281l0.313-0.188c0.156 0.031 0.344 0.188 0.563 0.375s0.5 0.406 0.875 0.469c0.125-0.094 0.188-0.063 0.188 0.063v0.063l0.344 0.406 0.063 0.188c0.188 0.125 0.406 0.313 0.5 0.531zM8.438 6.594l-0.031-0.063c-0.063-0.031-0.219-0.094-0.281-0.094-0.031 0-0.094 0.031-0.219 0.063-0.219 0.125-0.563 0.219-0.813 0.344-0.125 0.063-0.219 0.094-0.281 0.094 0.125 0 0.25-0.031 0.375-0.094 0.094-0.063 0.219-0.094 0.344-0.094l0.094 0.063c0.063 0.031 0.094 0.031 0.156 0.031 0.031 0 0.063 0 0.125 0.063 0.063-0.031 0.125-0.031 0.219 0.031l0.094-0.063v-0.125l-0.031-0.063 0.063 0.031c0.063 0 0.125-0.031 0.188-0.125zM13.156 24.906l0.031 0.188c0 0.063-0.031 0.063-0.063 0.125-0.094 0.063-0.25 0.156-0.25 0.344 0 0.031 0.031 0.063 0.031 0.125 0.031 0.031 0.063 0.063 0.063 0.125 0 0.031-0.031 0.063-0.031 0.094 2.156-0.375 4.094-1.406 5.594-3h-0.031c-0.063 0.031-0.156 0.031-0.188 0l-0.094 0.031-0.156-0.031h-0.094c-0.063-0.094-0.125-0.156-0.219-0.219l-0.031-0.031c-0.031 0-0.063 0-0.063 0.063 0-0.281-0.219-0.531-0.469-0.531 0 0.031-0.031 0.031-0.031 0.031h-0.063l-0.063-0.031h0.094l0.063-0.188-0.156-0.094-0.031 0.031c-0.125-0.031-0.219-0.094-0.281-0.219l-0.094-0.031v0.031l-0.063 0.031c-0.125 0.031-0.219 0.063-0.281 0.094-0.125-0.031-0.219-0.094-0.25-0.125l-0.375 0.031c0-0.125-0.063-0.281-0.219-0.281-0.188 0-0.438 0-0.5 0.219 0 0.063 0.031 0.156 0.063 0.188v0.125l-0.031 0.063-0.031 0.031h-0.031l-0.094-0.219 0.094-0.125c-0.031-0.063-0.031-0.094-0.031-0.156s-0.031-0.094-0.031-0.156l-0.031-0.031h-0.094l-0.188 0.125h-0.125l-0.031 0.063c-0.031 0-0.031 0.031-0.031 0.063 0 0-0.031 0-0.031 0.031l-0.031-0.031h-0.125c-0.063 0.063-0.094 0.156-0.125 0.25l0.063 0.063-0.156 0.063-0.031 0.063-0.094 0.063v0.031h-0.031v0.156h-0.031c-0.031-0.125-0.125-0.25-0.313-0.344h-0.094v0.063c0 0.063 0.063 0.094 0.125 0.125 0.063 0.063 0.094 0.125 0.125 0.156-0.031-0.031-0.094 0-0.094 0.031v0.063l0.188 0.281v0.531l0.063 0.125c-0.063 0.156-0.125 0.313-0.219 0.406v-0.031l-0.063 0.031-0.031 0.031-0.031 0.125 0.031 0.031v0.031l-0.063-0.063-0.031 0.188-0.156 0.063c-0.063 0.031-0.094 0.063-0.063 0.156 0 0.063-0.031 0.094-0.094 0.125l0.031 0.063-0.063 0.094c0 0.031 0 0.063-0.031 0.063v0.125l0.031 0.219 0.063 0.031 0.063-0.031z"></path> </g></svg>,
            head: "Market Research"
        },
        {
            img: <svg className='w-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22 12v8h-1v-8zm-4 8V7h-1v13zm-4 0V2h-1v18zm-4 0V7H9v13zm-5 0h1v-8H5zM1 1v22h22v-1H2V1z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>,
            head: "Investment"
        },
        {
            img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16.5 11.3308C16.5 13.1552 14.7029 15 12 15C9.29713 15 7.5 13.1552 7.5 11.3308V7.5H16.5V11.3308ZM17.9502 12C17.7751 13.1667 17.1485 14.2115 16.2263 15H18V16.5L12 16.5L6 16.5V15H7.77371C6.67832 14.0635 6 12.7654 6 11.3308V6H18C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H17.9502ZM18 7.5V10.5C18.8284 10.5 19.5 9.82843 19.5 9C19.5 8.17157 18.8284 7.5 18 7.5ZM7.5 18.75L7.5 17.25L16.5 17.25V18.75L7.5 18.75Z" fill="#fff"></path> </g></svg>,
            head: "Management"
        }
    ]
    return (
        <>
            <section id='sec4' className='w-full max-w-7xl m-auto bg-stone-50 py-28'>
                <h2 data-aos="fade-up" data-aos-duration="1000" className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]'>Our services</h2>
                <p data-aos="fade-up" data-aos-duration="1000" className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-[60%] xl:w-[40%] text-center'>There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.</p>
                <div className='w-full px-10 flex flex-wrap'>
                    {exp.map((ex, index) => (
                        <div key={index} className='xl:w-1/4 md:w-1/2 w-full md:px-10 text-center mt-14'>
                            <span data-aos="fade-up" data-aos-duration="1000" className='bg-blue-700 inline-block p-4'>{ex.img}</span>
                            <p className='font-medium text-[0.9rem] mt-4'>{ex.head}</p>
                            <p className='text-sm text-gray-500 mt-3'>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard .</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Services