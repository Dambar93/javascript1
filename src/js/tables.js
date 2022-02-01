import {convertBytesToMb, dateNow,getPosts, deletePost, getPost, createPost, patchPost} from "./modules/heplers.js";


// getPost(1)
//   .then(data =>     

// document.getElementById('users_info').innerHTML = `<td>${data.name}</td> <td>${data.username}</td><td>${data.email}</td>`
  
//   )
//   .catch(err => console.log(err))

getPosts()
  .then(data => data)
  .catch(err => console.log(err))

async function loadData(){
  const response=await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  renderTable(data)
 
  }
  
loadData();

function renderTable(arr){

  arr.forEach(element => {   
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');
    const i1=document.createElement('i');
    const i2=document.createElement('i');
    const i3=document.createElement('i');
    const i4=document.createElement('i');
    i1.setAttribute('class','far fa-eye');
    i2.setAttribute('class','fas fa-plus');
    i3.setAttribute('class','far fa-edit');
    i4.setAttribute('class','fas fa-trash-alt');
    i1.addEventListener('click',function(){
      document.getElementById('pop_up').style.display='flex';
      viewUser(element.id);
    })
    i2.addEventListener('click',function(){
      document.getElementById('pop_up').style.display='flex';
      viewUser(element.id);

    })
    i3.addEventListener('click',function(){
      document.getElementById('pop_up').style.display='flex';
      viewUser(element.id);
    })
    i4.addEventListener('click',function(){
      console.log('delete',element.id)
    })

    td.textContent=element.id;
    td1.textContent=element.name;
    td2.textContent=element.username;
    td3.textContent=element.email;
    td4.textContent=element.address.street+' '+element.address.suite+' '+element.address.city;
    td5.textContent=element.company.name;
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    td6.appendChild(i1);
    td6.appendChild(i2);
    td6.appendChild(i3);
    td6.appendChild(i4);
    document.getElementById('table_header').appendChild(tr);
    
  }
  
  );
  
}

document.getElementById('pop_close').addEventListener('click',function(){
  document.getElementById('pop_up').style.display='none';
})


async function viewUser(id){
  const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  const div=document.createElement('div');
  const name = document.createElement('h5');
  const username = document.createElement('h5');
  const email = document.createElement('h5');
  const addres = document.createElement('h5');
  const phone = document.createElement('h5');
  const website = document.createElement('h5');
  const company = document.createElement('h5');
  const whatDo = document.createElement('h5');
  name.textContent=`Name: ${data.name}`;
  username.textContent=`Username: ${data.username}`;
  email.textContent=`Email: ${data.email}`;
  addres.textContent=`Addres: ${data.address.street} ${data.address.suite} ${data.address.city}`;
  phone.textContent=`Phone: ${data.phone}`;
  website.textContent=`Website: ${data.website}`; 
  company.textContent=`Company name: ${data.company.name}`; 
  whatDo.textContent=`What we do: ${data.company.bs}`; 

  div.appendChild(name); 
  div.appendChild(username); 
  div.appendChild(email); 
  div.appendChild(addres); 
  div.appendChild(phone); 
  div.appendChild(website); 
  div.appendChild(company);
  div.appendChild(whatDo);

  document.getElementById('user_data').innerHTML = "";
  document.getElementById('user_data').appendChild(div);

  
  
 
  }


// document.getElementById("users_info").innerHTML = `<div><td>hkjhk</td><td>utkuk</td><td>tkuytu</td></div>`;