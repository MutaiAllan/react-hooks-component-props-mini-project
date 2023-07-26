import React from 'react';

function Article({id, title, date, preview, minutes}) {
    return (
        <article className="bg-blue">
            <h3 className="red">{title}</h3>
            <p>{date}</p>
            <p>{preview}</p>
            <p>{minutes} min read</p>
        </article>
    )
}

export default Article;