/*
 * createContext from react helps to create separate info-channel inside App, where the global information can be added
 * It is good practice to create separate context for each component
 * It makes sending props in throught the app easier, by not having to pass props through the all children
 * next part in AuthProvider.js
 */

import { createContext } from "react";

const authContext = createContext();

export const themeContext = createContext();

export default authContext;