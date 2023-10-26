AOS.init();
import {games} from "./data.js"
const divtrack = document.getElementById("tracks")

let i = 0
games.forEach((game) => {
    const tracker = document.createElement("div")
    tracker.className = "tracker-games" + i
    tracker.innerHTML = `
    <img src="${game.img}" width="60">
    <p class="team-name m-2">${game.team1}</p>
    <p class="rondas-teams m-2">${game.rondaB}</p>
    <p class="m-2">-</p>
    <p class="rondas-teams m-2">${game.rondaR}</p>
    <p class="team-name m-2">${game.team2}</p>
    <img src="${game.img2}" width="60">
    `
    i = i + 1
    divtrack.append(tracker)
})
