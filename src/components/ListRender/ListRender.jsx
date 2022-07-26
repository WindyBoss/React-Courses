import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { ListEl } from './ListRender.styled';

import slugify from 'slugify';


const slugifyOptions = {
  replacement: '-',  // replace spaces with replacement character, defaults to `-`
  remove: undefined, // remove characters that match regex, defaults to `undefined`
  lower: true,      // convert to lower case, defaults to `false`
  trim: true  
}

export default function ListRender({ list, redirect }) {
  const location = useLocation();
  return (
    <div>
      <ol>
        {list.map(item => (
          <ListEl key={item.id}>
            <NavLink
              state={{ from: location }}
              // In attribute state is send the current location to the next location, keeping all searchParams,
              // which can be used when the user want to come back the code will do fetch automatically
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
              {/* {item.name
                ? slugify(`${item.name} ${item.id}`)
                : slugify(`${item.title} ${item.id}`)} */}
            </NavLink>
          </ListEl>
        ))}
      </ol>

      {list && <Outlet />}
    </div>
  );
}
