import { render, screen, fireEvent } from '@testing-library/react';
import LeftSection from '@/components/LeftSection';
import InvoiceContext from '@/contexts/invoiceContext';
import Swal from 'sweetalert2';

jest.mock('axios');
jest.mock('sweetalert2');

const mockAuthContext = {
  authToken: null,
  setUploadResponse: jest.fn(),
  uploadResponse: null,
};

describe('LeftSection Component', () => {
  it('shows an error when trying to select an image without being signed in', () => {
    Swal.fire.mockImplementation(() => Promise.resolve());

    render(
      <InvoiceContext.Provider value={mockAuthContext}>
        <LeftSection />
      </InvoiceContext.Provider>
    );

    const label = screen.getByText(/Select image/i);
    fireEvent.click(label);

    expect(Swal.fire).toHaveBeenCalledWith({
      title: 'Error!',
      text: 'You need to sign-in to upload an image.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  });

  it('allows image selection when signed in', () => {
    const mockAuthContextWithToken = { ...mockAuthContext, authToken: 'mockAuthToken' };

    render(
      <InvoiceContext.Provider value={mockAuthContextWithToken}>
        <LeftSection />
      </InvoiceContext.Provider>
    );

    const fileInput = screen.getByLabelText(/Select image/i);
    expect(fileInput).toBeInTheDocument();
  });
});
