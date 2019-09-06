// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


 function cards () {
    const newCard =document.createElement('div')
    const newHeadline = document.createElement('div')
    const newAuthor = document.createElement('div');
    const newImgContainer = document.createElement('div');
    const newImg =document.createElement('src')
    const newBy = document.createElement('span')


    newCard.appendChild.add(newHeadline)
    newCard.appendChild.add(newAuthor)
    newAuthor.appendChild.add(newImgContainer)
    newImgContainer.appendChild.add(newImg)
    newAuthor.appendChild.add(newBy)

    newCard.classList.add('card')
    newAuthor.classList.add('author')


    newHeadline.textContent = 'Hlep'

        return newCard

 }
 const cardContain = document.querySelector('.cards-container')