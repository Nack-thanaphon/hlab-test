import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserProfile from './UserProfile';


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ name: 'hlab', email: 'hlab@example.com' }),
  })
);

describe('render loading', () => {
  test('renders loading state initially', () => {
    render(<UserProfile userId="1" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('render data-fetching', async () => {
    render(<UserProfile userId="1" />);
    const userName = await waitFor(() => screen.getByText('hlab'));
    expect(userName).toBeInTheDocument();
    expect(screen.getByText('Email: hlab@example.com')).toBeInTheDocument();
  });

  test('render error-message', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Failed to fetch user data')));
    render(<UserProfile userId="1" />);
    const errorMessage = await waitFor(() => screen.getByText('Error: Failed to fetch user data'));
    expect(errorMessage).toBeInTheDocument();
  });
});
