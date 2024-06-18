import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header';
import InvoiceContext from '@/contexts/invoiceContext';

const mockAuthContext = {
  setAuthToken: jest.fn(),
  resetAppState: jest.fn(),
};

describe('Header Component', () => {
  it('renders the sign-in button when user is not signed in', () => {
    render(
      <InvoiceContext.Provider value={mockAuthContext}>
        <Header />
      </InvoiceContext.Provider>
    );

    const signInButton = screen.getByText(/Continue with Google/i);
    expect(signInButton).toBeInTheDocument();
  });

  it('renders the sign-out button when user is signed in', () => {
    const mockUser = { email: 'test@example.com' };
    jest.spyOn(React, 'useState').mockImplementation(() => [mockUser, jest.fn()]);

    render(
      <InvoiceContext.Provider value={mockAuthContext}>
        <Header />
      </InvoiceContext.Provider>
    );

    const signOutButton = screen.getByText(/Sign out/i);
    expect(signOutButton).toBeInTheDocument();
    expect(screen.getByText(/Signed in as test@example.com/i)).toBeInTheDocument();
  });

  it('calls handleSignOut when sign-out button is clicked', () => {
    const mockUser = { email: 'test@example.com' };
    jest.spyOn(React, 'useState').mockImplementation(() => [mockUser, jest.fn()]);

    render(
      <InvoiceContext.Provider value={mockAuthContext}>
        <Header />
      </InvoiceContext.Provider>
    );

    const signOutButton = screen.getByText(/Sign out/i);
    fireEvent.click(signOutButton);

    expect(mockAuthContext.resetAppState).toHaveBeenCalled();
  });
});
