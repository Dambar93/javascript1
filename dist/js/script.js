

"use strict";

const gallery = [
  {
    name: 'blue',
    file:'img/gallery/blue.png' ,
    size: 1115542,

    date:'2021-11-01'

  },
  {
    name: 'family',
    file:'img/gallery/family.png' ,
    size: 2221254,
    
    date:'2021-11-30'

  },
  {
    name: 'fish',
    file:'img/gallery/fish.png' ,
    size: 2242542,
    
    date:'2021-11-11'

  },
  {
    name: 'friends',
    file:'img/gallery/friends.png' ,
    size: 2224524,
    
    date:'2021-11-08'

  },
  {
    name: 'grass',
    file:'img/gallery/grass.png' ,
    size: 4444254,
    
    date:'2021-11-10'

  },
  {
    name: 'gymnast',
    file:'img/gallery/gymnast.png' ,
    size: 5554254,
    
    date:'2021-11-13'

  },
  {
    name: 'kid',
    file:'img/gallery/kid.png' ,
    size: 6664254,
    
    date:'2021-11-31'

  },
  {
    name: 'sunset',
    file:'img/gallery/sunset.png' ,
    size: 7774252,
   
    date:'2021-11-01'

  },
  {
    name: 'tulip',
    file:'img/gallery/tulip.png' ,
    size: 2884252,
    
    date:'2021-11-02'

  },
  {
    name: 'waitin',
    file:'img/gallery/waitin.png' ,
    size: 1994252,
    
    date:'2021-11-21'

  },
  {
    name: 'wonderful',
    file:'img/gallery/wonderful.png' ,
    size: 1116514,
   
    date:'2021-11-22'

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


function render(array){
let content='';
for(let index=0;index<array.length;index++){
  const item=array[index];
  let mb=convertBytesToMb(item.size);
  console.log(item);
  content+=`<div class="col"> <div class="card galery-image" > <img src="${item.file}" class="card-img-top" alt="${item.name}"><div class="card-body"><p class="card-text">${item.name}</p><p class="card-text gray-text">${mb} Mb</p></div></div></div>`;
}
return document.getElementById("photo").innerHTML = content;
}


render(gallery);

import {convertBytesToMb} from "./modules/heplers.js";

function upload(image){
document.getElementById('uploadBtn').addEventListener('click', function () {

  for (let i = 0; i < document.getElementById('file')?.files.length; i++) {
    const element = document.getElementById('file')?.files[i];
    console.log(element.name);
    let mb=convertBytesToMb(element.size);
    image.push({
      name: element.name,
      size: mb,
      file: URL.createObjectURL(element),
    })
  }
  render(image);
  
})
}
upload(gallery)

function space(array){
  let size=0;
  for(let index=0;index<array.length;index++){
    const item=array[index];
    let mb=convertBytesToMb(item.size);
    console.log(mb);
    size+=mb;
  }
  return document.getElementById("size").innerHTML = `<div class="gb flex direction-column "><div id="show_capacity" class="flex  numbers justify-between"><h4 >${size} / 100 Mb  </h4> <img src="img/add.png" alt=""></div><progress id="capacity" value="${size}" max="100">  </progress></div>`
}
space(gallery)

