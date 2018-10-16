import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};


class App extends Component {
  render() {
    return (
      	<div>
      		<div className="App-header">
      			<img className="App-logo" src={logo} alt="Logo" />
				<h1 className="App-title">Exercício 1 - Passando dados</h1>
      		</div>
      		<ul>
				<h2>Lista de Filmes favoritos</h2>
      			{profiles.map((profile) => {
                  	const usuario = users[profile.userID].name;
					const filme = movies[profile.favoriteMovieID].name;

					return (
                        <li key={profile.id}>
                              <p>{`O filme favorito de `}<strong>{usuario}</strong>{` é `}<strong>{filme}</strong></p>
                        </li>
					);
				})}
      		</ul>
		</div>
    );
  }
}

export default App;
