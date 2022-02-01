export function convertBytesToMb(bytes){
    bytes=(bytes / 1048576).toFixed(2) ;
    return parseFloat(bytes);

};

export function dateNow(){

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
return dateTime;
}
// CRUD = Create Read Update Delete

const API_URL = 'https://jsonplaceholder.typicode.com';

// Read
export function getPosts() {
  return fetch(`${API_URL}/users`)
    .then(data => data.json());
}

export function getPost(id) {
  return fetch(`${API_URL}/users/${id}`)
    .then(data => data.json());
}

// Create
export function createPost(data) {
  return fetch(`${API_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(data => data.json());
}

// Update
export function patchPost(id, data) {
  return fetch(`${API_URL}/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(data => data.json());
}

// Delete
export function deletePost(id, data) {
  return fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(data => data.json());
}