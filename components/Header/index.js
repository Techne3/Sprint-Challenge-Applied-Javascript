// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component




function Header(data) {

    const newHeader = document.createElement('div');
    const newDate = document.createElement('span');
    const title =document.createElement('h1');
    const temp = document.createElement('span');


    //structure
    newHeader.appendChild(newDate);
    newHeader.appendChild(title)
    newHeader.appendChild(temp)

    //
    newHeader.classList.add('header')
    newDate.classList.add('date')
    temp.classList.add('temp')


    // newHeader.textContent ='help'
    newDate.textContent ='SMARCH 28, 2019'
    title.textContent="Lambda Times"
    temp.textContent='98'

    return newHeader
    

}
const container = document.querySelector('.header-container')
container.appendChild(Header())


