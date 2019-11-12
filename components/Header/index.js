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


const headerData = {
    date: 'SMARCH 28, 2019',
    temp: '98°',
};

function Header(date, temp) {

    const 
        header = document.createElement('div'),
        headerDate =  document.createElement('span'),
        headerH1 = document.createElement('h1'),
        headerTemp = document.createElement('span');
    
    headerDate.textContent = date;
    headerH1.textContent = "Lambda Times";
    headerTemp.textContent = temp;
        
    header.appendChild(headerDate);
    header.appendChild(headerH1);
    header.appendChild(headerTemp);
        
    header.classList.add('header');
    headerDate.classList.add('date')
    headerH1.classList.add('h1');
    headerTemp.classList.add('temp');
    
    return header;
    }
    
    
    const headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(Header(headerData.date, headerData.temp));