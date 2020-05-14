import React from 'react';
import '../Scss/_KS1Page.css';
import KeyStagePageTest from '../components/KeyStagePageComponents/KeyStageTestBox';

export default function KS1() {

    const words = "hello"; 

    return (
        <KeyStagePageTest words={words}/>
    );    
}
