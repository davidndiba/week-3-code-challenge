

const filmBar = document.getElementById("films")

let filmList = []

fetch("http://localhost:3000/films")
    .then(response => response.json())
    .then(data => data.forEach(element =>displayFirstFilm(element))
)

function displayFirstFilm(film) {
    const filmPoster = document.getElementById("poster")
    filmPoster.src = film.poster
    filmPoster.alt = film.title

    const filmTitle = document.getElementById("title")
    const filmRuntime = document.getElementById("runtime")
    const filmInfo = document.getElementById("film-info")
    const filmShowtime = document.getElementById("showtime")
    const filmRemainingTickets = document.getElementById("ticket-num")

    filmTitle.textContent = film.title
    filmRuntime.textContent = `${film.runtime} minutes`
    filmInfo.textContent = film.description
    filmShowtime.textContent = film.showtime
    filmRemainingTickets.textContent = film.capacity - film.tickets_sold
}


fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(json => {
        filmList = json
        renderFilms()
    })

function renderFilms() {
    filmBar.innerHTML = ""
    filmList.forEach(displayFilms)
}

function displayFilms(film) {
    const filmCard = document.createElement("li")
    filmCard.classList.add("film")
    filmCard.textContent = film.title
    filmBar.appendChild(filmCard)
    filmCard.addEventListener("click", () => displayFilmInfo(film))
}



function displayFilmInfo(film) {
    const filmPoster = document.getElementById("poster")
    filmPoster.src = film.poster
    filmPoster.alt = film.title

    const filmTitle = document.getElementById("title")
    const filmRuntime = document.getElementById("runtime")
    const filmInfo = document.getElementById("film-info")
    const filmShowtime = document.getElementById("showtime")
    const filmRemainingTickets = document.getElementById("ticket-num")

    filmTitle.textContent = film.title
    filmRuntime.textContent = `${film.runtime} minutes`
    filmInfo.textContent = film.description
    filmShowtime.textContent = film.showtime
    filmRemainingTickets.textContent = film.capacity - film.tickets_sold
}

document.getElementById("buy-ticket").addEventListener("click", () => buyTicket())
function buyTicket() {
    const filmRemainingTickets = document.getElementById("ticket-num")
    if (filmRemainingTickets.textContent > 0) {
        filmRemainingTickets.textContent--
    }
}