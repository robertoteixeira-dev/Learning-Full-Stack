import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
    return (
        <>
            <article>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.category}</p>
                <p>{props.likes}</p>
            </article>
        </>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    likes: PropTypes.number,
    post: PropTypes.shape(), // Para dizer que deve ser um objeto
};
