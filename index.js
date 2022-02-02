let message = document.querySelector("#message")

const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

const crossOffMovie = (evt) => {
    evt.target.classList.toggle("checked")

    if (evt.target.classList.contains("checked") === true) {
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
}

const addMovie = (evt) => {
    evt.preventDefault()
    let inputField = document.querySelector("input")

    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    let ul = document.querySelector("ul")
    ul.appendChild(movie)
}





let form = document.querySelector("form")
form.addEventListener("submit", addMovie)