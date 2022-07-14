import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ListEl } from './ListRender.styled';

export default function ListRender({ list, redirect }) {
  return (
    <div>
      <ol>
        {list.map(item => (
          <ListEl key={item.id}>
            <NavLink
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
