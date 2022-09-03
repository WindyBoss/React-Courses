import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/Appbar';
import Container from './components/Container';

import Pending from './components/Pending';

const HomeView = lazy(() => import('./views/HomeView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));
const AuthorDetailsView = lazy(() => import('./views/AuthorDetailsView'));
const BooksView = lazy(() => import('./views/BooksView'));
const AuthorsView = lazy(() => import('./views/AuthorsView'));
const BookDetailsView = lazy(() => import('./views/BookDetailsView'));

export function App() {
  return (
    <Container>
      <Suspense fallback={<Pending />}>
        <Routes>
          <Route path="/react-homework-template/" element={<AppBar />}>
            <Route index element={<HomeView />} />

            <Route
              path="/react-homework-template/authors"
              element={<AuthorsView />}
            >
              <Route
                path="/react-homework-template/authors/:slugAuthors"
                element={<AuthorDetailsView />}
              />
            </Route>

            <Route
              path="/react-homework-template/books"
              exact
              element={<BooksView />}
            />
            <Route
              path="/react-homework-template/books/:slug"
              element={<BookDetailsView />}
            />
            <Route path="*" element={<NotFoundView />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
