import Painting from "./Painting"
import PropTypes from 'prop-types';
import { PaintList, Gallery } from './Paintins.styled';

// ! https://www.npmjs.com/package/prop-types --> propTypes package

/*
* npm prop-types -> npm package, that helps to validate incoming data, which is helpful during development process
* prop-types can validate number, strings, arrays, arrayOf, objects (shape), and others
* additionally 'isRequired' can be added, that shows error if required data is not providen
* destructured object by variables in Painting function requirs saperate variable naming (creating separate object from received object from JSON) 
* each item of array needs a unique key -> id for react, that helps him to find necessary components for dynamic manipulation, remember to add it saperately from other object features, exactly to list element
* Do not use libraries for random ID generation as keys for React (each time function will generate new Id, so react will still will be not optimized)
* you can use map, forEach and other JS array methods inside object brackets {}
*/

export default function PaintingList({ items }) {
    return (
        <Gallery>
            {items.map(item => (
                <PaintList key={item.id}>
                    <Painting
                        imageUrl={item.url}
                        title={item.title}
                        author={item.author.tag}
                        profileUrl={item.author.url}
                        price={item.price}
                        quantity={item.quantity}
                    />
                </PaintList>
            ))}
        </Gallery>
    )
}

PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};