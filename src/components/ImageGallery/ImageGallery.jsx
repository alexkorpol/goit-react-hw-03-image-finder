import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Grid from './ImageGallery.styled';

const ImageGallery = ({ images})  => {
return (
<Grid >
  <ImageGalleryItem images={images}/>
</Grid>
  )
}

export default  ImageGallery

