import PropTypes from 'prop-types';


export const Notes = ({ name, deadline, description }) => {

    return (
        <div>
            <h2>{name}</h2>
            <p>{deadline}</p>
            <p>{description}</p>
        </div>
    )
}

Notes.propTypes = {
    name: PropTypes.string.isRequired,
    deadline: PropTypes.number.isRequired,
    description: PropTypes.instanceOf(Date).isRequired,
}