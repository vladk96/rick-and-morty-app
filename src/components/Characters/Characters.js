import React, { Component } from "react";

import { getCharacters } from "../../api/api";

import { Character } from "../Character/";

import loader from "../../images/spinner.svg";

import "./Characters.css";

class Characters extends Component {
  state = {
    characters: [],
    isLoaded: false
  };

  async componentDidMount() {
    const list = await getCharacters();

    this.setState({
      characters: list.results,
      isLoaded: true,
    });
  }

  render() {
    const { characters, isLoaded } = this.state;
    
    return (
      <div className="characters characters-background">
        {!isLoaded ? (
          <div className="preloader">
            <img src={loader} alt="spinner" />
          </div>
        ) : (
          characters.map(character => (
            <Character
              key={character.id}
              imageSrc={character.image}
              name={character.name}
              species={character.species}
              gender={character.gender}
            />
          ))
        )}
      </div>
    );
  }
}

export default Characters;
