import React from 'react';

const MainTttle = ({title, className}) => {
    return (
        <h2 className={`${className} 2xl:text-4xl text-3xl  font-bold  uppercase`}>
            {title}
        </h2>
    );
};

export default MainTttle;