import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { animals } from './animals';

// JSX
const heading = <h1>Hello World</h1>;

// use className instead of class for assigning css class
// close self-closing tags <br />
// to use javascript in jsx use {}
const name = 'Prince';

// conditional expressions
// 1. If - Else can have jsx based on condition
// 2. ternary operator
// 3. use (&&) and operator

const divContainer = (
  <div className="wrapper">
    <h2>Good Morning</h2>
    <p>xyz <br /> abc</p>
    <p>{name}</p>
    <p>{2 + 7}</p>
    {/* <p>
      {
        if(name === 'Prince') {
          'Found'
        } else {
          'Not found'
        }
      }
    </p> */}
    <p>
      {
       name === 'Prince' ? 'Found' : 'Not Found' 
      }
    </p>
    <p>
      {
        name === 'Princeqer' && 'Kumar'
      }
    </p>
  </div>
);

const user = {
  name: 'Namit',
  age: 19
}

const drivingAge = 18;

let message = '';

if (user.age >= drivingAge) {
  message = (
    <h1>
      {user.name} is allowed to drive
    </h1>
  )
} else {
  message = (
    <h1>
      {user.name} is not allowed to drive.
    </h1>
  )
}

// ternary operator
message = <h1>{user.age >= drivingAge ? 'Allowed' : 'Not Allowed'}</h1>


function coinToss() {
  return Math.random() < 0.5 ? 'head' : 'tails';
}

const pics = {
  squirrel: 'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg',
  zebra: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D'
}

// show squirrel image if it's head else show zebra image

const img = <img src={coinToss() === 'head' ? pics.squirrel : pics.zebra} alt="animal" />

// list rendering

const navMenus = ['Home', 'Shop', 'About Me'];

// pass key for list items to uniquely identify
const listItems = navMenus.map((menu, i) => {
  return <li key={menu + '_' + i}>{menu}</li>;
});

const unorderList = <ul>{listItems}</ul>

// ------------- PROJECT ------------

// where to render
const container = document.getElementById('root');
const background = <img className='background' alt='forest' src='https://media.istockphoto.com/id/1205214235/photo/path-through-sunlit-forest.jpg?s=612x612&w=0&k=20&c=-AS1aTz85kcZ2X7E8n2iFlm6dsdIMyWGWrSDQ1o-f_0=' />
let title = '';
const showBackground = true;

function displayFact(e) {
  const selectedAnimal = animals[e.target.alt];
  const factIndex = Math.floor(Math.random() * selectedAnimal.facts.length);

  document.getElementById('fact').innerHTML = selectedAnimal.facts[factIndex];
}

const images = [];

for (const animal in animals) {
  images.push(
    <img key={animal} className='animal' src={animals[animal].image} alt={animal} onClick={displayFact} />
  );
}

const animalFacts = (
  <div>
    {
      title.length === 0 ? <h1>Click an animal for a fun fact</h1> : <h1>{title}</h1>
    }
    {background}
    <p id="fact"></p>
    <div className='animals'>
      {images}
    </div>
  </div>
);

const root = ReactDOM.createRoot(container);
root.render(animalFacts);