"use strict"

const jokeForm = document.getElementById("request-joke");
const jokeWrapper = document.getElementById("joke-wrapper");


const formatJoke = (joke)=> {
    if ( joke.type === "twopart") {
        const setup = document.createElement('div');
        setup.className = "setup"
        setup.innerText = joke.setup;
        
        const delivery = document.createElement('div');
        delivery.className = "delivery"
        delivery.innerText = joke.delivery;
        
        jokeWrapper.innerText = "";
        jokeWrapper.appendChild(setup);
        jokeWrapper.appendChild(delivery);
    } else {
        const joke_element = document.createElement('div');
        joke_element.className = "joke"
        joke_element.textContent = joke.joke;
        
        jokeWrapper.innerText = "";
        jokeWrapper.appendChild(joke_element);
    }
}

const requestAJoke = ()=> {
    
    const request = new XMLHttpRequest();
    
    const url = "https://v2.jokeapi.dev/joke/Any?safe-mode"
    request.open("GET", url);
    request.send();
    
    request.addEventListener("readystatechange", (e)=> {
        // console.log(e.target);
        if ( e.target.readyState === 4) {
            console.log(e.target);
            // jokeWrapper.innerText = e.target.responseText;
            const joke = JSON.parse(e.target.responseText)
            formatJoke(joke);
            
        }
    })
    
}

jokeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    requestAJoke();
})