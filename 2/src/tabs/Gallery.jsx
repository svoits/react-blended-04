import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isShownButton: false,
    isLoading: false,
    isEmpty: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.loadImages(query, page);
    }

    console.log(this.state);
  }

  // componentDidMount() {
  // const data = ImageService.getImages('cat', 1);
  // console.log(data);
  // }

  loadImages = async (query, page) => {
    this.setState({isLoading:true})
    try {
      const { page:currentPage, per_page,total_results, photos } = await ImageService.getImages(query, page);
      
      if (!photos.length) {
        this.setState({ isEmpty: true })
        return;
      }
    this.setState(prevState => ({
      images: [...prevState.images, ...photos],
      isShownButton: currentPage < Math.ceil(total_results / per_page),
    }));
    } catch (error) {
      this.setState({error: error.message})
    } finally {
      this.setState({isLoading:false})
    }
    
  };

  handleSubmit = query => {
    this.setState({
    query,
    images: [],
    page: 1,
    isShownButton: false,
    isEmpty: false,
    error: null
      
    });
  };

  handleClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))}


  render() {
    const { images, isShownButton, isLoading, isEmpty, error} = this.state;

    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        <Grid>
          {images.map(({ id, src: { small }, alt }) => (
            <GridItem key={id}>
              <CardItem>
                <img src={small} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>
        {isEmpty && <Text textAlign="center">Sorry. There are no images ... 😭</Text>}
        {isShownButton && <Button onClick={this.handleClickButton}>Load more</Button>}
        {isLoading && <Text textAlign="center">Loading ...</Text>}
        {error && <Text textAlign="center">{error}</Text>}
      
      </>
    );
  }
}
