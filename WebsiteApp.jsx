import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import WebsiteNavbar from './WebsiteNavbar';


function WebsiteApp() {



    //Router
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WebsiteNavbar />} />
                




            </Routes>
        </BrowserRouter>
    )
}
