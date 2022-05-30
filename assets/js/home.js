const bgColor={
    'Personal' : '#34a853',
    'Work' : '#9c27b0',
    'School' : '#fbbc05',
    'Cleaning' : '#4285f4',
    'Other' : '#ff5722'
};

const categoryDivs=document.getElementsByClassName('category');

for(let div of categoryDivs){
    let category=div.dataset.category;
    div.style.backgroundColor=bgColor[category];
}