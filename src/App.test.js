import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

beforeAll(() => {
  window.alert = jest.fn();
});

test('يعرض عنوان Little Lemon في الصفحة الرئيسية', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // نبحث عن العنوان الموجود فعلياً في الهيرو
  const headingElement = screen.getByText(/Little Lemon/i);
  expect(headingElement).toBeInTheDocument();

  // نتحقق من وجود كل العناصر التي تحتوي على "Little Lemon"
  const headingElements = screen.getAllByText(/Little Lemon/i);
  expect(headingElements.length).toBeGreaterThan(0);
});

test('زر الحجز موجود', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const reserveButton = screen.getByText(/Reserve a Table/i);
  expect(reserveButton).toBeInTheDocument();
});
