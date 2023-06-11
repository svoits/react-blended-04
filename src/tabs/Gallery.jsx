import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  componentDidMount() {
    const data = ImageService.getImages('cat', 1);
    console.log(data);
  }

  handleSubmit = query => {
    console.log(query);
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
