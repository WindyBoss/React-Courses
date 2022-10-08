import { createPortal } from 'react-dom';

export default function MainContainer({ children }) {
  const container = document.querySelector('#bg-root');

  return createPortal(<div>{children}</div>, container);
}
