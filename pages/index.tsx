import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const res = await fetch('http://localhost:3001/pokemon');
      setPokemon(await res.json());
    }
    getPokemon();
    console.log(pokemon);
  }, []);

  return (
    <div>
      <h1>My Pokemon App</h1>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
};

export default Home;
