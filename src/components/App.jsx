import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    showModal: false,
    searchQuery: '',
    page: 1,
    src: '',
    alt: '',
    moreButtonVisible: false,
  };

  submitForm = e => {
    this.setState({ page: 1 });
    this.setState({ searchQuery: e.value });
  };

  moreButtonRender = () => {
    this.setState({ moreButtonVisible: true });
  };
  moreButtonHide = () => {
    this.setState({ moreButtonVisible: false });
  };

  clickMoreButton = e => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    if (!this.state.showModal) {
      this.setState({ src: e.target.dataset.src, alt: e.target.alt });
    }
  };
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.submitForm} />
      </Container>
    );
  }
}
