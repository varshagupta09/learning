'use client';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/navbar';

const Template = ( {children}) => {

    useEffect(() => {
     require('bootstrap/dist/js/bootstrap.min.js');
    }, []);
    
  return (
    <div>
        <Navbar/>
        
        <h1>Some common content</h1>
        {children}</div>
  )
}

export default Template;