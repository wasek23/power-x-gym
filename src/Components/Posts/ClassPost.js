import React from 'react';
import { Link } from 'react-router-dom';

const ClassPost = props => {
    const { permalink, thumb, title } = props.classesData;

    return (
        <Link to={"/class/" + permalink} target="_blank" rel="noreferrer noopener">
            <article className="singleClass" style={{ backgroundImage: "url(" + thumb + ")" }}>
                <button className="btn">{title} <span>&rarr;</span></button>
            </article>
        </Link >
    );
};

export default ClassPost;