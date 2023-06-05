import React from 'react';
import { CardItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';


const ImageGalleryItem = ({ images = [] }) => {
  return (

    <>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <CardItem key={id}>
          <ImageGalleryItemImage src={webformatURL} alt={tags} data-largeimageurl={largeImageURL} />
        </CardItem>
      ))}
    </>

  )
}

export default ImageGalleryItem



// export const ImageGallery = ({ images = [] }) => {
//   return (
//     <Grid>
//       {images.map(({ id, avg_color, src: { large }, alt }) => (
//         <CardItem key={id} color={avg_color}>
//           <img src={large} alt={alt} />
//         </CardItem>
//       ))}
//     </Grid>
//   );
// };
