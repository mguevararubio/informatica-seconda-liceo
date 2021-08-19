document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'cafe',
        img: 'Imagenes/Cartas/cafe.png'
      },
      {
        name: 'hamburguesa',
        img: 'Imagenes/Cartas/hamburguesa.png'
      },
      {
        name: 'Ice cream',
        img: 'Imagenes/Cartas/Ice cream.png'
      },
      {
        name: 'Pizza',
        img: 'Imagenes/Cartas/Pizza.png'
      },
      {
        name: 'Paleta',
        img: 'Imagenes/Cartas/Paleta.png'
      },
      {
        name: 'Sandia',
        img: 'Imagenes/Cartas/Sandia.png'
      },
      {
        name: 'cupcake',
        img: 'Imagenes/Cartas/cupcake.png'
      },
      {
        name: 'Dona',
        img: 'Imagenes/Cartas/Dona.png'
      },
      {
        name: 'cafe',
        img: 'Imagenes/Cartas/cafe.png'
      },
      {
        name: 'hamburguesa',
        img: 'Imagenes/Cartas/hamburguesa.png'
      },
      {
        name: 'Ice cream',
        img: 'Imagenes/Cartas/Ice cream.png'
      },
      {
        name: 'Pizza',
        img: 'Imagenes/Cartas/Pizza.png'
      },
      {
        name: 'Paleta',
        img: 'Imagenes/Cartas/Paleta.png'
      },
      {
        name: 'Sandia',
        img: 'Imagenes/Cartas/Sandia.png'
      },
      {
        name: 'cupcake',
        img: 'Imagenes/Cartas/cupcake.png'
      },
      {
        name: 'Dona',
        img: 'Imagenes/Cartas/Dona.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Imagenes/Cartas/Azul-claro.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'Imagenes/Cartas/Azul-claro.png')
        cards[optionTwoId].setAttribute('src', 'Imagenes/Cartas/Azul-claro.png')
        alert('La misma imagen')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Encontraste una pareja')
        cards[optionOneId].setAttribute('src', 'Imagenes/Cartas/Blanco.png')
        cards[optionTwoId].setAttribute('src', 'Imagenes/Cartas/Blanco.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'Imagenes/Cartas/Azul-claro.png')
        cards[optionTwoId].setAttribute('src', 'Imagenes/Cartas/Azul-claro.png')
        alert('Sigue intentando')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Felicitaciones, ganaste'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })