import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
        <h1 className="text-3xl">
          {' '}
          <span className="font-bold text-primary">Z</span>Fit
          <span className="text-primary">X</span>{' '}
        </h1>
      </Link>
    );
};

export default Logo;