import { Routes, Route } from 'react-router-dom';
import AppBar from './components/Appbar';
import Container from './components/Container';
// import HomeView from './views/HomeView';
// import AuthorsView from './views/AuthorsView';
// import AuthorDetailsView from 'views/AuthorDetailView';
// import BooksView from './views/BooksView';
// import BookDetailsView from './views/BookDetailsView';
// import NotFoundView from './views/NotFoundView';

import { HomeView, NotFoundView, AuthorDetailsView, BooksView, AuthorsView, BookDetailsView } from './views';

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/react-homework-template/" element={<AppBar />}>
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
          <Route path='*' element={<NotFoundView />}>
            
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}
