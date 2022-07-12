import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    URL: 'https://pixabay.com/api/',
    API_KEY: '27155173-9deaa55e537d9ae9b6e54e2b2',
    pictures: [],
    error: '',
    status: 'idle',
    page: 1,
    query: '',
    totalHits: null,
  };

  render() {
    return (
      <Container>
        <Searchbar />
      </Container>
    );
  }
}
