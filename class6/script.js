const URL = "https://jsonplaceholder.typicode.com/posts";

function fetchData() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
    })
    .catch((error) => {
      console.log("Error", error);
  });
}

// fetchData();

async function fetchDataAsync() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.map(post => {
      console.log(post.title);
    });
  } catch (error) {
    console.log(error.message);
  }
  console.log("Program finished");
}

// fetchDataAsync();


// parallel execution

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments';
const USER_URL = 'https://jsonplaceholder.typicode.com/users';

async function fetchAndProcessData() {
  const [posts, comments, users] = await Promise.all([
    fetch(POST_URL),
    fetch(COMMENT_URL),
    fetch(USER_URL)
  ]);

  const [posts_data, comments_data, users_data] = await Promise.all([
    posts.json(),
    comments.json(),
    users.json()
  ]);

  console.log(users_data[0]);
  console.log(posts_data[0]);
  console.log(comments_data[0]);
}

// fetchAndProcessData();


const AVATAR_URL = 'https://robohash.org/';

document.getElementById("avatar").setAttribute('src', AVATAR_URL + "djhfj");

// sequential execution

async function performTasksSequentially() {
  const task1Result = await checkIfUserIsRegistered(username);
  const task2Result = await isMailValid(task1Result);
  const task3Result = await sendOTP(task2Result);

  return task3Result;
}

const arr = [4, 6, 8, 2];
console.log(arr);
arr.push(34);
console.log(arr);
// arr = [3456, 6765, 23] Error