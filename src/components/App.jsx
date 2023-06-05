import React, { Component } from 'react';
import Searchbar from "./Searchbar";
import ImageGallery from './ImageGallery';
import { Button } from './Button/Button.styled';
import { PER_PAGE, getImages } from './api/api';
import  Loader  from 'components/Loader'

const INITIAL_STATE = {
  query: '',
  page: 1,
  images: [],
  loading: false,
};

let totalPage = 0;


export default class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  // !====== componentDidUpdate =======
  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      console.log("page", page);
      console.log("componentDidUpdate prevState.query", prevState.query);
      console.log("componentDidUpdate query", query);
      await this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    if (!query) { return }

    this.setState({ loading: true });
    try {
      const data = await getImages(query, page);
      // console.log("this.state.totalPage", totalPage);
      console.log("totalPage", totalPage)

      if (data.totalHits === 0) {
        alert("Sorry, there are no images matching your search query. Please try again.");
        return;
      }
      if (page === 1) {
        totalPage = Math.ceil(data.totalHits / PER_PAGE);
        // this.setState({ totalPage });
        console.log("totalPage", page, totalPage)
      };

      if (this.state.page === totalPage) {
        console.log("this.state.page:", this.state.page, "totalPage", totalPage);
        alert("We're sorry, but you've reached the end of search results.");
      }
      // if (Math.ceil(totalHits / pixabayApi.per_page) > pixabayApi.countPages) {
      console.log("data", data);
      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
      }))
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false })
    };
  }

    // ! ====== Write user query to state ======
    handleFormSubmit = query => {
      this.setState({ ...INITIAL_STATE, query })
      console.log("query", query)
    };

    handleButtonClick = () => {

      this.setState(prevState => ({ page: prevState.page + 1 }
      ));
    }



    render() {
      const { images, page, loading } = this.state;


      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />

          <ImageGallery images={images} />


          {loading && <Loader isLoading={loading} />}
          {(!loading && totalPage > 1 && page < totalPage) &&
            <Button onClick={this.handleButtonClick}>Load more</Button>}




        </>

      );
    };
  }


