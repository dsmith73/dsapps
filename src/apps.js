const container = document.querySelector(".container")

const projects = [
  { name: "CodeMind",               image: "images/codemind.jpg",       link: "https://dsmith73.github.io/toolbox/js/codemind/index.html" },
  { name: "Wordle",                 image: "images/wordle.jpg",         link: "https://dsmith73.github.io/toolbox/js/wordle/wordle.html" },
  { name: "Calculator",             image: "images/calculator.jpg",     link: "https://dsmith73.github.io/toolbox/js/calculator/index.html" },
  { name: "Card-Match",             image: "images/card-match.jpg",     link: "https://dsmith73.github.io/toolbox/js/card-match/card-match.html" },
  { name: " Mine Sweeper",          image: "images/mine-sweeper.jpg",   link: "https://dsmith73.github.io/toolbox/js/minesweeper/index.html" },
  { name: " Simon Says",            image: "images/simon-says.jpg",     link: "https://dsmith73.github.io/toolbox/js/simon-says/index.html" },
  { name: "Markdown Maker",         image: "images/markdown-maker.jpg", link: "https://dsmith73.github.io/toolbox/js/md-maker/index.html" },
  { name: "Asteroids",              image: "images/asteroids.jpg",      link: "https://dsmith73.github.io/toolbox/js/asteroids/index.html" },
  { name: "Matrix Screen",          image: "images/matrix-screen.jpg",  link: "https://dsmith73.github.io/toolbox/js/matrix/index.html" },
  { name: "Random Trivia",          image: "images/trivia.jpg",         link: "https://dsmith73-quiz-app.glitch.me/" },
  { name: "Basic Website Template", image: "images/basic-website.jpg",  link: "https://dsmith73.github.io/toolbox/css/basic-website/index.html" },
  { name: "Synthesizer",            image: "images/synthesizer.jpg",    link: "https://dsmith73.github.io/toolbox/js/synth/synth.html" },
]

const showProjects = () => {
    let output = ""
    projects.forEach(
        ({ name, image, link }) =>
            (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="${link}" target="_blank">Check it out</a>
                </div>
            `)
    )
    container.innerHTML = output
}
  
document.addEventListener("DOMContentLoaded", showProjects)
