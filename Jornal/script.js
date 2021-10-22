const news = [
    {
        title:"The biggest stadium in the world",
        txt: "Rungrado May Day Stadium is the biggest soccer stadium in the word, its capacity is 150000 spectators, the stadium is in Pyongyang, in North Korea.",
        url: "https://imagens-revista-pro.vivadecora.com.br/uploads/2019/02/Maior-est%C3%A1dio-do-mundo-Rose-Bowl-Stadium-1.jpg"
    },
    {
        title:"Subnautica VS Below Zero",
        txt: "Subnautica: below zero launched 2 months ago and surpassed Subnautica in sales, the second version of the game was at least 3 times better for most players. Having a new map much bigger and with a lot more things to do in-game.",
        url: "data:image/jpeg;base64,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"
    },
    {
        title:"Kobra Kai VS Karate Kid",
        txt: "We all know that the Cobra kai series exploded on netflix gaining a lot of fame as a sequel to the original karate kid. Cobra kai is considered by many to be a huge improvement for the universe as it explores the characters much better than movies and takes more time to develop them.",
        url: "https://i.ytimg.com/vi/5TqY7wV1uQU/maxresdefault.jpg"
    },
    {
        title:"League of Legends",
        txt: "The worlds, also known as League of Legends World Championship...",
        url: "https://gulfbusiness.com/wp-content/uploads/2020/08/League-of-Legends-world-championship.jpg"
    }
]

window.addEventListener("DOMContentLoaded", trocarNoticia())

function trocarNoticia(){

    for (let i = 0; i < news.length; i++) {
        const title = document.querySelector("#title" + i);
        const p = document.querySelector("#p" + i);
        const img = document.querySelector("#img" + i);

        title.innerHTML = news[i].title;
        p.innerHTML = news[i].txt;
        img.src = news[i].url;
       
    }
}