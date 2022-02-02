let message = document.querySelector("#message")

const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    let deletedMovieTitle = evt.target.parentNode.firstElementChild.textContent
    message.textContent = `${deletedMovieTitle} deleted!`
    revealMessage()
}

const crossOffMovie = (evt) => {
    evt.target.classList.toggle("checked")
    let movieText = evt.target.textContent

    if (evt.target.classList.contains("checked") === true) {
        
        message.textContent = `${movieText} watched!`
    } else {
        message.textContent = `${movieText} added back!`
    }
    revealMessage()
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

const revealMessage = () => {
    message.classList.remove("hide")
    setTimeout(function() {
        message.classList.add("hide")
    }, 1000)
}



let form = document.querySelector("form")
form.addEventListener("submit", addMovie)