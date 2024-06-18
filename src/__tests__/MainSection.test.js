import { render, screen } from '@testing-library/react';
import MainSection from '@/components/MainSection';
import InvoiceContext from '@/contexts/invoiceContext';

const mockAuthContext = {
  authToken: 'mockAuthToken',
};

describe('MainSection Component', () => {
  it('renders LeftSection and RightSection components', () => {
    render(
      <InvoiceContext.Provider value={mockAuthContext}>
        <MainSection />
      </InvoiceContext.Provider>
    );

    expect(screen.getByText(/Turn your invoice image into text/i)).toBeInTheDocument();
    expect(screen.getByText(/Your text below/i)).toBeInTheDocument();
  });
});
