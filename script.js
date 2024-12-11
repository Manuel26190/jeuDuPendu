const fruits = [
    'banane',
    'fraise',
    'cerise',
    'pomme',
    'poire',
    'abricot',
    'kiwi',
]
const animals = [
    'chat',
    'chien',
    'oiseau',
    'poule',
    'lapin',
    'chameau',
    'renard',
]
const countries = [
    'France',
    'Belgique',
    'Allemagne',
    'Italie',
    'Espagne',
    'Portugal',
]

/* prendre un mot au hasard dans les arrays */
function getRandomWord(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}
const pendulWord = document.getElementById('mot-a-deviner')
let randomWord = getRandomWord(fruits)
console.log('randomWord : ', randomWord)
let hiddenWord = '_'.repeat(randomWord.length)

pendulWord.innerHTML = hiddenWord
/* Au click sur un theme cela génére un mot du tableau */
const fruitsBtn = document.querySelector('.theme-fruits-btn')
fruitsBtn.addEventListener('click', () => {
    randomWord = getRandomWord(fruits)
    pendulWord.innerHTML = '_'.repeat(randomWord.length)
})

const animalsBtn = document.querySelector('.theme-pet-btn')
animalsBtn.addEventListener('click', () => {
    randomWord = getRandomWord(animals)
    pendulWord.innerHTML = '_'.repeat(randomWord.length)
})

const countriesBtn = document.querySelector('.theme-country-btn')
countriesBtn.addEventListener('click', () => {
    randomWord = getRandomWord(countries)
    pendulWord.innerHTML = '_'.repeat(randomWord.length)
})

/*pendulWord.innerHTML = '_'.repeat(randomWord.length)*/

// Sélectionner tous les boutons de lettres
const letterButtons = document.querySelectorAll('.letter')

let remainingTurn = 8

const remainingTurnElement = document.getElementById('remaining-turn')
remainingTurnElement.textContent = remainingTurn

/*Ajouter un événement à chaque click sur bouton lettre*/
letterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const letter = button.textContent
        checkLetter(letter, randomWord)
        button.disabled = true

        if (hiddenWord === randomWord) {
            alert('Gagne')
        }
        if (remainingTurn < 2) {
            alert('Perdu')
        }
        if (remainingTurn > 0) {
            remainingTurn--
        }
        if (remainingTurn < 3) {
            remainingTurnElement.style.color = 'red'
        } else if (remainingTurn < 5) {
            remainingTurnElement.style.color = 'orange'
        }
        remainingTurnElement.textContent = remainingTurn
    })
})
/* Voire la solution */
const solutionBtn = document.getElementById('solution-btn')
solutionBtn.addEventListener('click', () => {
    pendulWord.innerHTML = randomWord
})
/* Recharge la page pour rejouer */
const replayBtn = document.getElementById('replay-btn')
replayBtn.addEventListener('click', () => {
    location.reload()
})

/*Ajouter un événement à chaque bouton*/
function checkLetter(letter, randomW) {
    let found = false /* lettre présente ou pas*/
    let randomWordArray = randomW.split('')
    // Vérifier chaque lettre du mot
    let indexFound = []
    for (let i = 0; i < randomWordArray.length; i++) {
        if (randomWordArray[i] === letter) {
            found = true
            indexFound.push(i)
        }
    }
    if (found) {
        let newWord = hiddenWord.split('')
        for (let y = 0; y < indexFound.length; y++) {
            newWord[indexFound[y]] = letter
        }
        hiddenWord = newWord.join('')
        pendulWord.innerHTML = hiddenWord
    }
}
// function checkLetter(letter) {
//     let found = false /* lettre présente ou pas*/
//     let randomWordArray = randomWord.split('')
//     // Vérifier chaque lettre du mot
//     let indexFound = []
//     for (let i = 0; i < randomWordArray.length; i++) {
//         if (randomWordArray[i] === letter) {
//             found = true
//             indexFound.push(i)
//         }
//     }
//     if (found) {
//         let newWord = hiddenWord.split('')
//         for (let y = 0; y < indexFound.length; y++) {
//             newWord[indexFound[y]] = letter
//         }
//         hiddenWord = newWord.join('')
//         pendulWord.innerHTML = hiddenWord
//     }
// }
