function getUserWithPromises() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getUserWithPromises();

// The idea behind the async await keyword is
// to be able to write a asynchronous code
// that flows like synchronous code.
// async function returns a promise.

async function getUsersWithAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}
const results = getUsersWithAsync();
results.then((data) => console.log(data));
