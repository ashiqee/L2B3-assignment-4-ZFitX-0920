import React from 'react';

type NotFoundProps = {
  text: string;
};

const NotFound: React.FC<NotFoundProps> = ({text}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="space-y-4">
        <img src="https://i.postimg.cc/RhpHW1hn/not-found.png" />
        <p className="text-3xl">{text}</p>
      </div>
    </div>
  );
};

export default NotFound;
