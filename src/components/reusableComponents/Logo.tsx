
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">

<div className='flex items-center gap-1'>
<img className='w-10' src="/zfitx-logo-icon.png" alt="zfitx-logo" />
        <h1 className="text-3xl">
         
          <span className="font-bold text-primary">Z</span>FiT
          <span className="text-primary">X</span>{' '}
        </h1>
</div>
      </Link>
    );
};

export default Logo;