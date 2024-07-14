
import Logo from '../reusableComponents/Logo';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <div className="   bg-primary/5 bg-opacity-70  border-t-[1px]  py-10 ">
      <div className="container px-4 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* logo  */}
        <section className="space-y-3 border-b-[0.5px]  md:border-b-0 pb-10 md:border-r-[0.5px] border-primary">
          <div className="text-2xl pb-5">
            <Logo />
          </div>
          <p className="text-lg font-semibold">
            ZfitX - Empowering Your Fitness Journey
          </p>
          <p className="mt-2">© 2024 ZfitX. All rights reserved.</p>

          <ul className="flex gap-10">
            <li className="hover:text-primary">
              <Facebook />
            </li>
            <li className="hover:text-primary">
              {' '}
              <Instagram />{' '}
            </li>
            <li className="hover:text-primary">
              <Youtube />
            </li>
          </ul>
        </section>
        {/* Information links  */}
        <section className="space-y-3 border-b-[0.5px] pb-10  md:border-b-0 md:border-r-[0.5px] border-primary">
          <h4 className="text-2xl pb-5">Information</h4>
          <ul className="space-y-3">
            <li className="hover:text-primary">
              {' '}
              <Link to="/product-management"> Dashboard</Link>
            </li>
            <li className="hover:text-primary">
              {' '}
              <Link to="/"> Order status</Link>
            </li>
            <li className="hover:text-primary">
              {' '}
              <Link to="/"> About Us</Link>
            </li>

            <li className="hover:text-primary">
              {' '}
              <Link to="/"> Privacy Policy</Link>
            </li>
          </ul>
        </section>
        {/* Contact Us  */}
        <section className="space-y-3 border-b-[0.5px] pb-10 md:border-b-0 md:border-r-[0.5px] border-primary">
          <h4 className="text-2xl pb-5">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex gap-2 items-center">
              <MapPin className="text-primary text-sm" />{' '}
              <p>Dhaka,Bangladesh</p>
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="text-primary text-sm" /> <p>+880-1614-123456</p>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="text-primary text-sm" /> <p>info@zfitx.com</p>
            </li>
          </ul>
        </section>
        {/* Subscribe links  */}
        <section className="pb-10">
          <h4 className="text-2xl pb-5">Subscribe Us</h4>

          <div className="space-y-3 ">
            <p>
              Subscribe our mail box and get exclusive offers and recent uptions
            </p>
            <Input type="email" placeholder="Enter your email" />
            <Button>SUBSCRIBE</Button>
          </div>

          <div className="flex items-center flex-row-reverse ">
            <img
              className="w-20 h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
            />

            <p>we accept only </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
