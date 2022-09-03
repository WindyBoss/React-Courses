import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { ListEl } from './ListRender.styled';

import slugify from 'slugify';

const slugifyOptions = {
  replacement: '-',
  remove: undefined,
  lower: true,
  trim: true,
};

export default function ListRender({ list, redirect }) {
  const location = useLocation();
  return (
    <div>
      <ol>
        {list.map(item => (
          <ListEl key={item.id}>
            <NavLink
              state={{ from: location }}
              to={
                redirect
                  ? `../../${redirect}/${
                      item.name
                        ? slugify(`${item.name} ${item.id}`, slugifyOptions)
                        : slugify(`${item.title} ${item.id}`, slugifyOptions)
                    }`
                  : item.name
                  ? slugify(`${item.name} ${item.id}`, slugifyOptions)
                  : slugify(`${item.title} ${item.id}`, slugifyOptions)
              }
            >
              {item.name ? item.name : item.title}
            </NavLink>
          </ListEl>
        ))}
      </ol>

      {list && (
        <>
        <hr/>
          <Outlet />
        </>
      )}
    </div>
  );
}
