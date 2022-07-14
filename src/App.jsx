import { Routes, Route } from 'react-router-dom';
import AppBar from './components/Appbar';
import Container from './components/Container';

import {
  HomeView,
  NotFoundView,
  AuthorDetailsView,
  BooksView,
  AuthorsView,
  BookDetailsView,
} from './views';

export function App() {
  return (
    // Main App Container
    <Container>
      {/* 
      Routes - react-router-dom v6 component, which was Switch is v5, the main goal of each is checking if the Route path matches with navigation until first match.
      After first match it will show the Route of the first match (similar to switch in JS)
      */}
      <Routes>
        {/* Route - react-router-dom component, the main of each is to create the route to component, which must be rendered on specific URL*/}
        
        <Route path="/react-homework-template/" element={<AppBar />}> 
          {/* For using deep navigation, it is necessary to wrap Route inside Route */}
          {/* Component AppBar is shown in all Routes */}
          <Route index element={<HomeView />} />

          <Route
            path="/react-homework-template/authors"
            element={<AuthorsView />}
          >
            <Route
              path="/react-homework-template/authors/:authorId"
              element={<AuthorDetailsView />}
            />
          </Route>

          <Route
            path="/react-homework-template/books"
            exact
            element={<BooksView />}
          />
          <Route
            path="/react-homework-template/books/:bookId"
            element={<BookDetailsView />}
          />
          <Route path="*" element={<NotFoundView />}></Route>
          {/* Component NotFoundView is shown, when there is no match path with routes */}
        </Route>
      </Routes>
    </Container>
  );
}
