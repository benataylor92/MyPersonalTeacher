import React from 'react';
import '../Scss/_KS1Page.css';
import KeyStagePageTest from '../components/KeyStagePageComponents/KeyStageTestBox';

export default function KS1() {

    const keystageTitle = "Key Stage 1 - Maths";
    const titleDescription = "Take our online Key Stage 1 Maths test to track your progress over time";

    return (
        <KeyStagePageTest keystageTitle={keystageTitle} titleDescription={titleDescription}/>
    );    
}
