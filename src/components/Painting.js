import PropTypes from 'prop-types';
import defaultImage from './logo512.png';
import { PaintStyle, ImageStyle, PaintTitle, PaintDesc, Button } from './Paintins.styled';
/*
* You can set a default value for each variable from received object, if the value is undefined
*/

export default function Painting({
    imageUrl = defaultImage, 
    title, 
    profileUrl, 
    author = 'unknown', 
    price,
    quantity,
}) {
  return (
    <PaintStyle>
        <ImageStyle src={imageUrl} alt={title} width="480" />
        <PaintTitle>{title}</PaintTitle>
        <PaintDesc> Author: <a href={profileUrl}> {author}</a></PaintDesc>
        <PaintDesc>Price {price} $</PaintDesc>
        <PaintDesc>Availability: {quantity < 10 ? 'Out of Stock' : 'In Stock'}</PaintDesc>
        <Button type="button">Add to Basket</Button>
    </PaintStyle>

  )
}


Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    profileUrl: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}
