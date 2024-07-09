import React from 'react';
import { Button } from '../ui/button';
import MainTttle from './MainTttle';
import { Link } from 'react-router-dom';

const BenefitCard = ({ benefits }) => {
  const [benefit, setBenefit] = React.useState(benefits[0]);
  const [isActive, setIsActive] = React.useState(benefit.id);

  const handleClick = (benefit) => {
    setBenefit(benefit);
    setIsActive(benefit.id);
  };

  return (
    <div className="grid grid-cols-3 gap-0">
      <div className="flex items-center  pr-10 ">
        <div className="space-y-5">
          <MainTttle className="text-left" title={benefit?.title} />

          <p className="text-justify">{benefit.description}</p>

          <div className="flex justify-between">
            <ul>
              <li>Reliable</li>
              <li>Trustable</li>
              <li>Secure</li>
            </ul>

            <Link>
              <Button>View more</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ui section here */}
      <div className="space-y-3 bg-primary/10 text-white ">
        <ul className="space-y-3 p-10 text-2xl">
          {benefits?.map((benefit, i) => (
            <li key={benefit.title} className="py-3 border-b-2">
              <button
                onClick={() => handleClick(benefit)}
                className={`hover:text-primary ${benefit.id === isActive ? 'text-primary' : ''} `}
              >
                {' '}
                {benefit.title}{' '}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <img
          src={benefit?.image}
          alt={benefit?.title}
          className="w-full h-[600px] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default BenefitCard;
