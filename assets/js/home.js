// --------------- An object containing colors corresponding to category divs present inside every task---------------
const bgColor={
    'Personal' : '#34a853',
    'Work' : '#9c27b0',
    'School' : '#fbbc05',
    'Cleaning' : '#4285f4',
    'Other' : '#ff5722'
};

// --------------- Getting every category div with class name 'category ---------------
const categoryDivs=document.getElementsByClassName('category');

// --------------- Color coding every category div ---------------
for(let div of categoryDivs){
    let category=div.dataset.category;
    div.style.backgroundColor=bgColor[category];
}