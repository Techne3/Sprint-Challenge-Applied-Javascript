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


 function cards (data) {
    const newCard =document.createElement('div')
    const newHeadline = document.createElement('div')
    const newAuthor = document.createElement('div');
    const newImgContainer = document.createElement('div');
    const newImg =document.createElement('img')
    const newBy = document.createElement('span')


    newCard.appendChild(newHeadline)
    newCard.appendChild(newAuthor)
    newAuthor.appendChild(newImgContainer)
    newImgContainer.appendChild(newImg)
    newAuthor.appendChild(newBy)

    newCard.classList.add('card')
    newHeadline.classList.add('headline')
    newAuthor.classList.add('author')
    newImgContainer.classList.add('img-container')

    
    newHeadline.textContent = `${data.headline}`
    // newAuthor.textContent=`Author: ${data.authorName}`
    newImg.src=`${data.authorPhoto}`
    newBy.textContent=`By: ${data.authorName}`

        return newCard

 }
 const cardContain = document.querySelector('.cards-container')
//  cardContain.appendChild(cards())

// let newArticle = ['javascript', 'bootstrap', '']

 axios.get('https://lambda-times-backend.herokuapp.com/articles/')
.then(response => {
//   console.log(response.data.articles.bootstrap[0])
//   console.log(response.data.articles.javascript)
  console.log(response.data.articles)
    articleArray = response.data.articles.bootstrap;
        cardContain.appendChild(cards(articleArray[0]))
    
})

.catch(error=>{
  console.log("This looks wrong", error)
} )
  

axios.get('https://lambda-times-backend.herokuapp.com/articles/')
.then(response => {
  console.log(response.data.articles.bootstrap[0])
  console.log(response.data.articles.javascript)
  console.log(response.data.articles)
    articleArray = response.data.articles.javascript;
        cardContain.appendChild(cards(articleArray[0]))
    
})

.catch(error=>{
  console.log("This looks wrong", error)
} )

axios.get('https://lambda-times-backend.herokuapp.com/articles/')
.then(response => {
  console.log(response.data.articles.bootstrap[0])
  console.log(response.data.articles.javascript)
  console.log(response.data.articles)
    articleArray = response.data.articles.technology;
        cardContain.appendChild(cards(articleArray[0]))
    
})

.catch(error=>{
  console.log("This looks wrong", error)
} )
axios.get('https://lambda-times-backend.herokuapp.com/articles/')
.then(response => {
  console.log(response.data.articles.bootstrap[0])
  console.log(response.data.articles.javascript)
  console.log(response.data.articles)
    articleArray = response.data.articles.jquery;
        cardContain.appendChild(cards(articleArray[0]))
    
})

.catch(error=>{
  console.log("This looks wrong", error)
} )
axios.get('https://lambda-times-backend.herokuapp.com/articles/')
.then(response => {
  console.log(response.data.articles.bootstrap[0])
  console.log(response.data.articles.javascript)
  console.log(response.data.articles)
    articleArray = response.data.articles.node;
        cardContain.appendChild(cards(articleArray[0]))
    
})

.catch(error=>{
  console.log("This looks wrong", error)
} )
