"use strict";
const gallery = [
  {
    name: 'blue',
    file:'img/gallery/blue.png' ,
    size: '77.7kB',

    date:'2021-11-01'

  },
  {
    name: 'family',
    file:'img/gallery/family.png' ,
    size: '55.9kB',
    
    date:'2021-11-01'

  },
  {
    name: 'fish',
    file:'img/gallery/fish.png' ,
    size: '33.5kB',
    
    date:'2021-11-01'

  },
  {
    name: 'friends',
    file:'img/gallery/friends.png' ,
    size: '47.6kB',
    
    date:'2021-11-01'

  },
  {
    name: 'grass',
    file:'img/gallery/grass.png' ,
    size: '42.8kB',
    
    date:'2021-11-01'

  },
  {
    name: 'gymnast',
    file:'img/gallery/gymnast.png' ,
    size: '88.4kB',
    
    date:'2021-11-01'

  },
  {
    name: 'kid',
    file:'img/gallery/kid.png' ,
    size: '57.5kB',
    
    date:'2021-11-01'

  },
  {
    name: 'sunset',
    file:'img/gallery/sunset.png' ,
    size: '24.8kB',
   
    date:'2021-11-01'

  },
  {
    name: 'tulip',
    file:'img/gallery/tulip.png' ,
    size: '28.6kB',
    
    date:'2021-11-01'

  },
  {
    name: 'waitin',
    file:'img/gallery/waitin.png' ,
    size: '65.1kB',
    
    date:'2021-11-01'

  },
  {
    name: 'wonderful',
    file:'img/gallery/wonderful.png' ,
    size: '89.4kB',
   
    date:'2021-11-01'

  }
]



// gallery.map(photos);
// function photos(item){



//   return '<div class="col"><div class="card galery-image" ><img src="'
//   +[item.file]+
//   '" class="card-img-top" alt="'
//   +[item.name]+
//   '"><div class="card-body"><p class="card-text">'
//   +[item.name]+
//   '</p><p class="card-text gray-text">'
//   +[item.size,item.measurment] +
//   '</p></div></div></div>';
// }
// document.getElementById("photo").innerHTML = gallery.map(photos);

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

let content='';
for(let index=0;index<gallery.length;index++){
  const item=gallery[index];
  console.log(item);
  content+=`<div class="col"> <div class="card galery-image" > <img src="${item.file}" class="card-img-top" alt="${item.name}"><div class="card-body"><p class="card-text">${item.name}</p><p class="card-text gray-text">${item.size}</p></div></div></div>`;
}
console.log(content);
document.getElementById("photo").innerHTML = content;