import React from 'react';
import '../Scss/_KS2Page.css';
import KeyStagePageTest from '../components/KeyStagePageComponents/KeyStageTestBox';

export default function KS2() {

    const words = "Hello2"

    return (
        <KeyStagePageTest words={words}/>
    );    
}