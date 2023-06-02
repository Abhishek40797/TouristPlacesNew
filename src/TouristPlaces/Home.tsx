import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./Pages/HomePage";
import { Headers } from "./Pages/Header";
import { Footer } from "./Pages/Footer";
import { Expore } from "./Pages/HomeExpore";
import { Reservations } from "./Pages/HomeReservation";
import { Blogs } from "./Pages/Blogs";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

export const TouristHome = ()=>{
    return (
        <>
            <BrowserRouter>
                <Headers/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destinations" element={<Expore/>} />
                    <Route path="/deservations" element={<Reservations/>} />
                    <Route path="/dlogs" element={<Blogs/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}