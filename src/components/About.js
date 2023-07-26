import React from "react";

function About ({about}) {
    return (
        <aside>
            <img src={`https://via.placeholder.com/215`} alt='blog logo' />
            <p>{about}</p>
        </aside>
    );
}

export default About;