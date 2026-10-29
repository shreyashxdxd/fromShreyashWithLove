import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('opens the birthday page when I love you is selected', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /sanu, do you love me/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /a little kiss/i })).toHaveAttribute('src', '/kiss.gif');
  fireEvent.click(screen.getByRole('button', { name: /i love you/i }));

  expect(screen.getByRole('heading', { name: /happiest birthday to you sanu/i })).toBeInTheDocument();
  expect(document.querySelector('.heart-burst')).toBeInTheDocument();
  expect(document.querySelector('.site-bar')).toBeEmptyDOMElement();
  expect(screen.queryByText(/love\.exe/i)).not.toBeInTheDocument();
  expect(screen.getByText('From yours truly, Shreyash 💖')).toBeInTheDocument();
  expect(screen.queryByText(/a little corner of the internet/i)).not.toBeInTheDocument();
  expect(screen.getByRole('region', { name: /sanu.s photo/i })).toBeInTheDocument();
  expect(screen.getByRole('region', { name: /birthday message/i })).toBeInTheDocument();
  expect(screen.getByText(/happiest birthday to you my love!/i)).toBeInTheDocument();
  expect(screen.getByText(/i look forward to spending many more birthdays with you/i)).toBeInTheDocument();
  expect(screen.getByText(/with love, shreyash/i)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Sanu' })).toHaveAttribute('src', '/San_desu.png');
  expect(screen.getByRole('img', { name: /pixel heart sticker/i })).toHaveAttribute(
    'src',
    '/Heart%20Pixel%20Sticker.gif'
  );
  expect(screen.getByRole('img', { name: /animated couple in love/i })).toHaveAttribute(
    'src',
    '/Couple%20Love%20Sticker%20by%20ACHTUNG.gif'
  );
});

test('shows the disappointed screen and returns to the question on retry', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /no i don.t/i }));

  expect(screen.getByRole('img', { name: /an angry animated character/i })).toHaveAttribute('src', '/angry.gif');
  expect(screen.getByRole('heading', { name: /you.ve dissapointed me/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /try again/i }));

  expect(screen.getByRole('heading', { name: /sanu, do you love me/i })).toBeInTheDocument();
});
