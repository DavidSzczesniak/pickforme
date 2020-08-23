import React from 'react';
import './BodyIntro.css';

const BodyIntro = (props) => (
    <section className="body__intro">
        <header>
            <h1>{props.title}</h1>
        </header>
        <p>{props.blurb}</p>
    </section>
);

export default BodyIntro;
