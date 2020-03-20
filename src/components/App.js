import React, { Component } from "react";
import "../App.css";
import SearchBar from "./searchbar/SearchBar";
import axios from "axios";
import LoaderPage from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Modal from "./modal/Modal";

const KEY = "15301745-a7ab044afd83516da20e75026";

class App extends Component {
  state = {
    galleryItems: [],
    isLoading: false,
    isOpen: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImgURL: '',
    openModal: false
  };

  handleSubmit = e => {
    // e.preventDefault();
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => this.setState(prevState => ({ galleryItems:  [...prevState.galleryItems, ...data.data.hits] })))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleOnSubmit = async e => {
    e.preventDefault();
    await this.setState({galleryItems: []})
    await this.handleSubmit();
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  buttonMore = async () => {
    
    await this.setState(prevState => ({ page: prevState.page + 1 }));
    await this.handleSubmit();
  };

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }

  openModal = (largeImgURL) => this.setState({ isOpen: true, largeImgURL });

  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { isLoading, galleryItems, searchQuery, largeImgURL, isOpen } = this.state;
    return (
      <div className="App">
        <SearchBar
          handleOnSubmit={this.handleOnSubmit}
          handleChange={this.handleChange}
          searchQuery={searchQuery}
        />
        {isLoading && <LoaderPage />}
        <ImageGallery galleryItems={galleryItems} openModal={this.openModal} />
        {isOpen && (
          <Modal
            closeModal={this.closeModal}
            galleryItems={galleryItems}
            largeImgURL={largeImgURL}
          />
        )}
        <Button buttonMore={this.buttonMore} />
      </div>
    );
  }
}

export default App;
