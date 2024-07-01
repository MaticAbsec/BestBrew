import React from "react";

import { useLocation, Route, Routes } from "react-router-dom";
import PrvaStran from "./prvastran";
import Iskanje from "./iskanje";
import MojaPiva from "./mojaPiva";
import About from "./about";
import BeerMap from "./map";
import IskanjeBarcode from "./iskanjeBarcode";
import { Napaka } from "./error";

import { AnimatePresence } from 'framer-motion'

export default function AnimacijaStrani() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<PrvaStran />}></Route>
                <Route path='/iskanje' element={<Iskanje />}></Route>
                <Route path='/mojepive' element={<MojaPiva />}></Route>
                <Route path='/onas' element={<About />}></Route>
                <Route path='/map' element={<BeerMap />}></Route>
                <Route path='/barcode' element={<IskanjeBarcode />}></Route>
                <Route path='*' element={<Napaka />}></Route>
            </Routes>
        </AnimatePresence>
    );
};