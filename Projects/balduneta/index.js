import {games} from "./data.js"
const divtrack = document.getElementById("tracks")

let i = 0
games.forEach((game) => {
    const tracker = document.createElement("div")
    tracker.className = "tracker-games" +  i
    tracker.innerHTML = `
    <img src="${game.img}" width="60">
    <p class="team-name m-2" data-aos="fade-out" data-aos-delay="300">${game.team1}</p>
    <p class="rondas-teams m-2">${game.rondaB}</p>
    <p class="m-2">-</p>
    <p class="rondas-teams m-2">${game.rondaR}</p>
    <p class="team-name m-2" data-aos="fade-out" data-aos-delay="300">${game.team2}</p>
    <img src="${game.img2}" width="60">
    `;
    const vod = document.createElement("div")
    vod.className = "vod-review"
    vod.innerHTML = `
    <a href="${game.vod}" target="_blank" class="v-review">📺 Vod Review</a>
    `;

    const fecha = document.createElement("div")
    fecha.className = "fecha-game"
    fecha.innerHTML = `
    <p>${game.date}</p>
    `;

    i = i + 1

    divtrack.append(fecha)
    divtrack.append(tracker)
    divtrack.append(vod)
})

AOS.init();