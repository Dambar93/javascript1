

"use strict";


import {convertBytesToMb, dateNow} from "./modules/heplers.js";

const gallery = [
  {
    id:1,
    name: 'blue',
    file:'img/gallery/blue.png' ,
    size: 1115542,

    date:'2000-1-29 14:40:54'

  },
  {
    id:2,
    name: 'family',
    file:'img/gallery/family.png' ,
    size: 2221254,
    
    date:'2002-1-29 14:40:54'

  },
  {
    id:3,
    name: 'fish',
    file:'img/gallery/fish.png' ,
    size: 2242542,
    
    date:'2022-1-29 19:40:54'

  },
  {
    id:4,
    name: 'friends',
    file:'img/gallery/friends.png' ,
    size: 2224524,
    
    date:'2022-1-29 10:40:54'

  },
  {
    id:5,
    name: 'grass',
    file:'img/gallery/grass.png' ,
    size: 4444254,
    
    date:'2021-1-29 14:40:54'

  },
  {
    id:6,
    name: 'gymnast',
    file:'img/gallery/gymnast.png' ,
    size: 5554254,
    
    date:'2022-1-10 14:40:54'

  },
  {
    id:7,
    name: 'kid',
    file:'img/gallery/kid.png' ,
    size: 6664254,
    
    date:'2022-1-26 14:40:54'

  },
  {
    id:8,
    name: 'sunset',
    file:'img/gallery/sunset.png' ,
    size: 7774252,
   
    date:'2022-1-21 14:40:54'

  },
  {
    id:9,
    name: 'tulip',
    file:'img/gallery/tulip.png' ,
    size: 2884252,
    
    date:'2022-1-12 14:40:54'

  },
  {
    id:10,
    name: 'waitin',
    file:'img/gallery/waitin.png' ,
    size: 1994252,
    
    date:'2022-1-19 14:40:54'

  },
  {
    id:11,
    name: 'beutiful',
    file:'img/gallery/wonderful.png' ,
    size: 1116514,
   
    date:'2022-1-28 14:40:54'

  }
]


// let masyvas='';
// gallery.map(photos);
// function photos(item){

// masyvas+=  '<div class="col"><div class="card galery-image" ><img src="'
// +[item.file]+
// '" class="card-img-top" alt="'
// +[item.name]+
// '"><div class="card-body"><p class="card-text">'
// +[item.name]+
// '</p><p class="card-text gray-text">'
// +[item.size] +
// '</p></div></div></div>'
// ;
// }
// document.getElementById("photo").innerHTML = masyvas;

// let content='';
// for(let index=0;index<gallery.length;index++){
//   const item=gallery[index];
//   console.log(item);
//   content+='<div class="col"><div class="card galery-image" ><img src="'
//   +[item.file]+
//   '" class="card-img-top" alt="'
//   +[item.name]+
//   '"><div class="card-body"><p class="card-text">'
//   +[item.name]+
//   '</p><p class="card-text gray-text">'
//   +[item.size]+[item.measurment] +
//   '</p></div></div></div>';
// }
// console.log(content);
// document.getElementById("photo").innerHTML = content;


// function render(array){
// let content='';
// for(let index=0;index<array.length;index++){
//   const item=array[index];
//   let mb=convertBytesToMb(item.size);
//   console.log(item);
//   content+=`<div class="col"> <div class="card galery-image" > <img src="${item.file}" class="card-img-top" alt="${item.name}"><div class="card-body"><p class="card-text">${item.name}</p><p class="card-text gray-text">${mb} Mb</p></div></div></div>`;
//   addEventListener('click', function(){
//     console.log(item);
//   });

// }
// return document.getElementById("photo").innerHTML = content;
// }

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
const selectedItems=[];
const render = (arr) => {
  arr?.forEach(element => {
    const imageItem = document.createElement('div');
    const image = document.createElement('div');
    const card_body = document.createElement('div');
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    let mb=convertBytesToMb(element.size);
    img.setAttribute('src',`${element.file}`);
    img.setAttribute('class','card-img-top');
    img.setAttribute('alt',`${element.name}`);
    p1.textContent = element.name;
    p1.setAttribute('class','card-text');
    p2.setAttribute('class','card-text gray-text');
    card_body.setAttribute('class','card-body');
    p2.textContent = mb+' Mb';
    imageItem.className = 'col';
    image.className = 'card galery-image';    
    imageItem.appendChild(image);
    image.appendChild(img);
    image.appendChild(card_body);
    card_body.appendChild(p1);
    card_body.appendChild(p2);
    
  
    imageItem.addEventListener('click',function(){
      if(selectedItems.includes(element.id)){
       
        removeItemOnce(selectedItems,element.id);
       
        imageItem.setAttribute('style','opacity:1;');
        

      }else{
        selectedItems.push(element.id);
        imageItem.setAttribute('style','opacity:0.5;');
       
      }

    })
    
    document.getElementById('photo').appendChild(imageItem);

  });
}
function space(array){
  let size=0;
  for(let index=0;index<array.length;index++){
    const item=array[index];
    let mb=convertBytesToMb(item.size);
   
    size+=mb;
  }
  return document.getElementById("size").innerHTML = `<div class="gb flex direction-column "><div id="show_capacity" class="flex  numbers justify-between"><h4 >${size} / 100 Mb  </h4> <img src="img/add.png" alt=""></div><progress id="capacity" value="${size}" max="100">  </progress></div>`
}


function del(){
  document.getElementById('delete').addEventListener('click', function () {
    console.log(selectedItems);
    console.log('delete');
    
    let filteredPersons = gallery.filter(item=>!selectedItems.includes(item.id))
    
    gallery.length=0;
    gallery.push.apply(gallery,filteredPersons);
    document.getElementById('photo').innerHTML = "";
    
    render(gallery)
    space(gallery)
    
    selectedItems.length=0
    
  })
  }


function upload(image){
document.getElementById('uploadBtn').addEventListener('click', function () {
  const images2 = [];
  for (let i = 0; i < document.getElementById('file')?.files.length; i++) {
    const element = document.getElementById('file')?.files[i];
    console.log(element);
    let lastid=gallery[gallery.length-1]['id'];
    
    images2.push({
      id:lastid+1,
      name: element.name,
      size: element.size,
      file: URL.createObjectURL(element),
      date: `${dateNow()}`
    })
    gallery.push({
      id:lastid+1,
      name: element.name,
      size: element.size,
      file: URL.createObjectURL(element),
      date: `${dateNow()}`
    })


  }
  console.log(dateNow());
  
  render(images2)
  space(gallery)
  
})
}
document.getElementById('sort_name').addEventListener('click',function(){

  let sorting=gallery.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
  this.classList.toggle("selected",render(gallery));
  document.getElementById('photo').innerHTML = "";
  document.getElementById('sort_size')?.classList.remove("selected");
  document.getElementById('sort_date')?.classList.remove("selected");
 
  render(sorting)
})

document.getElementById('sort_size').addEventListener('click',function(){
 
  let sorting=gallery.sort(function (a, b) {
    return a.size - b.size;
  });
  document.getElementById('photo').innerHTML = "";
  document.getElementById('sort_name')?.classList.remove("selected");
  document.getElementById('sort_date')?.classList.remove("selected");
  this.classList.toggle("selected");
  render(sorting)
})

document.getElementById('sort_date').addEventListener('click',function(){
 
  let sorting=gallery.sort(function(a, b) {
    var nameA = a.date.toUpperCase(); // ignore upper and lowercase
    var nameB = b.date.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) { 
      return 1;
    }

    return 0;
  });
  document.getElementById('photo').innerHTML = "";
  document.getElementById('sort_size')?.classList.remove("selected");
  document.getElementById('sort_name')?.classList.remove("selected");
  this.classList.toggle("selected");
  
  render(sorting)
})
let result=[];
document.getElementById('myInput').onkeyup = function() {
   // Declare variables
   var input, filter, ul, li, a, i, txtValue;
   input = document.getElementById('myInput');
   filter = input.value.toUpperCase();
  
  console.log(filter);
   
   // filter = input.value.toUpperCase();
   // ul = document.getElementById("myUL");
   // li = ul.getElementsByTagName('li');
    
   // Loop through all list items, and hide those who don't match the search query
   for (i = 0; i < gallery.length-1; i++) {
    a=gallery[i]['name'].toUpperCase().indexOf(filter);
    console.log(a)
   
    console.log(result)
    if(a > -1){
      console.log(gallery[i]['name'].toUpperCase())
      result.push({
        
        id:gallery[i]['id'],
      name: gallery[i]['name'],
      size: gallery[i]['size'],
      file: gallery[i]['file'],
      date: gallery[i]['date']
      }
      )
    }else { '<h1>No Results</h1>'}

   }
   document.getElementById('photo').innerHTML = "";
   render(result)
   result.length=0
    }
 
  



del()
render(gallery)
space(gallery)
upload(gallery)




