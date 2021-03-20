import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, HeaderLogo, Form, CharBox, Error } from './style';
import logoMarvel from '../../assets/marvel-logo.png';
import logodc from '../../assets/dc.png';
import logosw from '../../assets/sw.png';

interface Char {
  image: {
    url: string;
  };
  biography: {
    'full-name': string;
    publisher: string;
  };
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [newChar, setNewChar] = useState('');
  const [inputError, setInputError] = useState('');
  const storageItem = localStorage.getItem('SuperHeroAPI:chars');
  const storagedChars = !storageItem ? [] : JSON.parse(storageItem);
  const [characters, setCharacters] = useState<Char[]>(storagedChars);

  useEffect(() => {
    if (characters.length) {
      localStorage.setItem('SuperHeroAPI:chars', JSON.stringify(characters));
    }
  }, [characters]);

  async function handleNewChar(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newChar) {
      setInputError('Type a valid character');
      return;
    }

    try {
      const response = await api.get(`search/${newChar}`);
      const char = response.data.results as Char[];

      if (char) {
        setCharacters(char);
        setNewChar('');
        setInputError('');
      } else {
        setInputError('Super Hero not found');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <HeaderLogo>
        <img src={logoMarvel} alt="Marvel Comics" />
        <img src={logodc} alt="DC Comics" />
        <img src={logosw} alt="Star Wars" />
      </HeaderLogo>
      <Form hasError={!!inputError} onSubmit={handleNewChar}>
        <input
          value={newChar}
          onChange={e => setNewChar(e.target.value)}
          name="character"
          type="text"
          placeholder="Type a Super Hero character name"
        />
        <button type="submit">Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <CharBox>
        {characters.map(character => (
          <Link to={`/profile/${character.id}`} key={character.id}>
            <img src={character.image.url} alt="" />

            <span>{character.name}</span>
            <p>{character.biography.publisher}</p>
          </Link>
        ))}
      </CharBox>
    </Container>
  );
};

export default Dashboard;
