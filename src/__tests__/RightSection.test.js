import { render, screen } from '@testing-library/react';
import RightSection from '@/components/RightSection';
import InvoiceContext from '@/contexts/invoiceContext';

const mockAuthContext = {
  uploadResponse: null,
};

describe('RightSection Component', () => {
  it('displays "No upload yet" when there is no upload response', () => {
    render(
      <InvoiceContext.Provider value={mockAuthContext}>
        <RightSection />
      </InvoiceContext.Provider>
    );

    expect(screen.getByText(/No upload yet/i)).toBeInTheDocument();
  });

  it('displays OCR text when there is an upload response', () => {
    const mockAuthContextWithResponse = {
      ...mockAuthContext,
      uploadResponse: { ocrText: 'Sample text\nMore sample text' },
    };

    render(
      <InvoiceContext.Provider value={mockAuthContextWithResponse}>
        <RightSection />
      </InvoiceContext.Provider>
    );

    expect(screen.getByText(/Sample text/i)).toBeInTheDocument();
    expect(screen.getByText(/More sample text/i)).toBeInTheDocument();
  });
});
