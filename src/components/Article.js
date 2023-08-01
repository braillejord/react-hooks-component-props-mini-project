import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {minutesRead(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;


function minutesRead(minutes) {
    const coffeeInterval = 5;
    const bentoInterval = 10;
    const numCoffees = Math.ceil(minutes / coffeeInterval)
    const numBentos = Math.ceil(minutes / bentoInterval)

    return minutes <= 30 ? '☕️'.repeat(numCoffees) : '🍱'.repeat(numBentos)
}