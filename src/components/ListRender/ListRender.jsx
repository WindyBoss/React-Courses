import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { ListEl } from './ListRender.styled';

export default function ListRender({ list, redirect }) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ol>
        {list.map(item => (
          <ListEl key={item.id}>
            <NavLink state={{from: location}} 
            // In attribute state is send the current location to the next location, keeping all searchParams, 
            // which can be used when the user want to come back the code will do fetch automatically
              to={redirect ? `../../${redirect}/${item.id}` : `${item.id}`}
            >
              {item.name ? item.name : item.title}
            </NavLink>
          </ListEl>
        ))}
      </ol>

      {list && <Outlet />}
    </div>
  );
}
