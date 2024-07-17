
import { NavLink } from 'react-router-dom';

const DasdboardMenu = () => {
    return (
        <div>
                <ul className="flex gap-4 pb-6 items-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'p-2 px-2 bg-primary/50 rounded-md'
                : 'hover:text-primary rounded-md  border-[0.1px] p-2 px-2'
            }
            to="/product-management"
          >
            Product management
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'p-2 px-2 bg-primary/50 rounded-md'
                : 'hover:text-primary rounded-md  border-[0.1px] p-2 px-2'
            }
            to="/orders"
          >
            Orders Reports
          </NavLink>
        </ul>
        </div>
    );
};

export default DasdboardMenu;