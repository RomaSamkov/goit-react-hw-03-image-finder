import { Component } from 'react';
import { toast } from 'react-toastify';
import { Container } from './App.styled';
import ImageGallery from './ImageGallery';
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

  fetchImg = () => {
    return fetch(
      `${this.state.URL}?q=${this.state.query}&page=${this.state.page}&key=${this.state.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Oops... failed to find any images'));
      })
      .then(pictures => {
        if (!pictures.hits) {
          toast.error('Change!!!');
        }

        const selectedDataView = pictures.hits.map(
          ({ id, largeImageURL, webformatURL }) => {
            return { id, largeImageURL, webformatURL };
          }
        );
        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...selectedDataView],
            status: 'resolved',
            totlHits: pictures.total,
          };
        });
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ status: 'pending', pictures: [], page: 1 });
      this.fetchImg();
    }
  }

  handleFormSubmit = query => {
    this.setState({ query });
  };

  handlLoadMore = () => {
    this.setState(prevState => {
      // console.log('prevState', prevState);
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { pictures, status, totalHits } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={pictures} />
      </Container>
    );
  }
}
