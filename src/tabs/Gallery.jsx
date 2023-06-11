import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.loadImages(query, page);
    }

    console.log(this.state);
  }

  // componentDidMount() {
  // const data = ImageService.getImages('cat', 1);
  // console.log(data);
  // }

  loadImages = async (query, page) => {
    const data = await ImageService.getImages(query, page);
    this.setState(prevState => ({
      images: [...prevState.images, ...data.photos],
    }));
  };

  handleSubmit = query => {
    this.setState({
      query,
    });
  };

  render() {
    const { images } = this.state;

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
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
