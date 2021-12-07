import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import('./Service.css')

const Service = (props) => {

    const { name, img, Price, id } = props.service
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Service Fee {Price}</p>
            <Link to={`/booking/${id}`}><Button>Book {name.toLowerCase()}</Button> </Link>
        </div>
    );
};

export default Service;