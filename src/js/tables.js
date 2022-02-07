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
      
      editUser(element.id);
      document.getElementById('pop_new').style.display='flex';

    })
    i3.addEventListener('click',function(){
      document.getElementById('pop_up').style.display='flex';
      
      editUser(element.id);
      document.getElementById('pop_save').style.display='flex';
      
    })
    i4.addEventListener('click',function(){
      console.log('delete',element.id)
      deleteUser(element.id)
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
  document.getElementById('user_data').innerHTML = "";
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

  
  document.getElementById('user_data').appendChild(div);

  
  
 
  }


  async function editUser(id){
    document.getElementById('user_data').innerHTML = "";
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
   const idd=document.createElement('h5');
    const name1 = document.createElement('h5');
    const username1 = document.createElement('h5');
    const email1 = document.createElement('h5');
    const addres1 = document.createElement('h5');
    const phone1 = document.createElement('h5');
    const website1 = document.createElement('h5');
    const company1 = document.createElement('h5');
    const whatDo1 = document.createElement('h5');
    idd.textContent=`${id}`;
    name1.textContent=`Name:`;
    username1.textContent=`Username:`;
    email1.textContent=`Email:`;
    addres1.textContent=`Addres:`;
    phone1.textContent=`Phone:`;
    website1.textContent=`Website:`; 
    company1.textContent=`Company name:`; 
    whatDo1.textContent=`What we do:`; 
    const div=document.createElement('div');
    const name = document.createElement('input');
    const username = document.createElement('input');
    const email = document.createElement('input');
    const addres = document.createElement('input');
    const phone = document.createElement('input');
    const website = document.createElement('input');
    const company = document.createElement('input');
    const whatDo = document.createElement('input');
    idd.setAttribute('id',`idd`);
    name.setAttribute('placeholder',`${data.name}`);
    name.setAttribute('id',`name`);
    username.setAttribute('placeholder',`${data.username}`);
    username.setAttribute('id',`username`);
    email.setAttribute('placeholder',`${data.email}`);
    email.setAttribute('id',`email`);
    addres.setAttribute('placeholder',`${data.address.street} ${data.address.suite} ${data.address.city}`);
    addres.setAttribute('id',`address`);
    phone.setAttribute('placeholder',`${data.phone}`);
    phone.setAttribute('id',`phone`);
    website.setAttribute('placeholder',`${data.website}`); 
    website.setAttribute('id',`website`); 
    company.setAttribute('placeholder',`${data.company.name}`); 
    company.setAttribute('id',`company`); 
    whatDo.setAttribute('placeholder',`${data.company.bs}`); 
    whatDo.setAttribute('id',`whatDo`); 
    
    
    name1.appendChild(name); 
    username1.appendChild(username); 
    email1.appendChild(email); 
    addres1.appendChild(addres); 
    phone1.appendChild(phone); 
    website1.appendChild(website); 
    company1.appendChild(company);
    whatDo1.appendChild(whatDo);
    div.appendChild(idd); 
    div.appendChild(name1); 
    div.appendChild(username1); 
    div.appendChild(email1); 
    div.appendChild(addres1); 
    div.appendChild(phone1); 
    div.appendChild(website1); 
    div.appendChild(company1);
    div.appendChild(whatDo1);
  
    
    document.getElementById('user_data').appendChild(div);
  
    
    
   
    }

document.getElementById('pop_save').addEventListener('click',
async   function save(){
  document.getElementById('table_header').innerHTML = `<tr>
  <th>Id</th>
  <th>Name</th>
  <th>Username</th>
  <th>Email</th>
  <th>Address</th>
  <th>Company</th>
  <th>Action</th>
</tr>`;
  document.getElementById('pop_up').style.display='none';
  const response=await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();


  const id=parseInt(document.getElementById('idd').innerHTML);
  const name=document.getElementById('name').value;
  const username=document.getElementById('username').value;
  const email=document.getElementById('email').value;
  const address=document.getElementById('address').value;
  const phone=document.getElementById('phone').value;
  const website=document.getElementById('website').value;
  const company=document.getElementById('company').value;
  const whatDo=document.getElementById('whatDo').value;
  console.log(id);
  if(name!=''){
    data[id-1]['name']=name
  }
  if(username!=''){
    data[id-1]['username']=username
  }
  if(email!=''){
    data[id-1]['email']=email
  }
  if(address!=''){
    data[id-1]['address']['street']=address
  }
  if(phone!=''){
    data[id-1]['phone']=phone
  }
  if(website!=''){
    data[id-1]['website']=website
  }
  if(company!=''){
    data[id-1]['company']['name']=company
  }
  if(company!=''){
    data[id-1]['company']['bs']=whatDo
  }
  

  
  

  renderTable(data);
  

})
async function deleteUser(id){
  document.getElementById('table_header').innerHTML = `<tr>
  <th>Id</th>
  <th>Name</th>
  <th>Username</th>
  <th>Email</th>
  <th>Address</th>
  <th>Company</th>
  <th>Action</th>
</tr>`;
  const response=await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();
  delete data[id-1];
  renderTable(data);
}

document.getElementById('pop_new').addEventListener('click',
async   function save(){
  document.getElementById('table_header').innerHTML = `<tr>
  <th>Id</th>
  <th>Name</th>
  <th>Username</th>
  <th>Email</th>
  <th>Address</th>
  <th>Company</th>
  <th>Action</th>
</tr>`;
  document.getElementById('pop_up').style.display='none';
  const response=await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();


  const id=parseInt(document.getElementById('idd').innerHTML);
  const name=document.getElementById('name').value;
  const username=document.getElementById('username').value;
  const email=document.getElementById('email').value;
  const address=document.getElementById('address').value;
  const phone=document.getElementById('phone').value;
  const website=document.getElementById('website').value;
  const company=document.getElementById('company').value;
  const whatDo=document.getElementById('whatDo').value;
  console.log(data[data.length-1]['id']);
  data.push({
    id:data[data.length-1]['id']+1,
    name:name,
    username:username,
    email:email,
    address:{street:address,city:address,suite:address},
    phone:phone,
    website:website,
    company:{name:company,bs:whatDo},
    
  })

console.log(data);

  // if(name!=''){
  //   data[id-1]['name']=name
  // }
  // if(username!=''){
  //   data[id-1]['username']=username
  // }
  // if(email!=''){
  //   data[id-1]['email']=email
  // }
  // if(address!=''){
  //   data[id-1]['address']['street']=address
  // }
  // if(phone!=''){
  //   data[id-1]['phone']=phone
  // }
  // if(website!=''){
  //   data[id-1]['website']=website
  // }
  // if(company!=''){
  //   data[id-1]['company']['name']=company
  // }
  // if(company!=''){
  //   data[id-1]['company']['bs']=whatDo
  // }
  

  
  

  renderTable(data);
  

})
// document.getElementById("users_info").innerHTML = `<div><td>hkjhk</td><td>utkuk</td><td>tkuytu</td></div>`;