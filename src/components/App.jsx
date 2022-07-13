import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageInfo from 'components/ImageInfo/ImageInfo';
import Button from 'components/Button/Button';

// import s from './App.module.css';

class App extends Component {
  state = {
    showModal: false,
    searchQuery: '',
    page: 1,
    src: '',
    alt: '',
    moreVisible: false,
  };

  // Функция для смены состояния модального окна с видимого на невидимое и получения данных для показа в модалке
  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));

    if (!this.state.showModal) {
      this.setState({ src: e.target.dataset.src, alt: e.target.alt });
    }
  };

  //Функция для получения из формы текста введенного пользователем в инпут
  submitForm = e => {
    this.setState({ page: 1 });
    this.setState({ searchQuery: e.value });
  };

  // Функция для показа или скрытия кнопки "Загрузить еще"
  moreButtonRender = () => {
    this.setState({ moreVisible: true });
  };
  moreButtonHide = () => {
    this.setState({ moreVisible: false });
  };

  clickMoreButton = e => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { showModal, moreVisible, searchQuery, page, src, alt } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.submitForm} />
        <ImageInfo
          searchQuery={searchQuery}
          page={page}
          onClick={this.toggleModal}
          moreButtonRender={this.moreButtonRender}
          moreButtonHide={this.moreButtonHide}
        />
        {moreVisible && <Button onClick={this.clickMoreButton} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={src} alt={alt} />
          </Modal>
        )}
      </>
    );
  }
}
export default App;
