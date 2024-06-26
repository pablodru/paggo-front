import React, { createContext, useState } from 'react';

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [uploadResponse, setUploadResponse] = useState(null);
    const [authToken, setAuthToken] = useState(null);
    const [uploadLoading, setUploadLoading] = useState(false);

    const resetAppState = () => {
        setAuthToken(null);
        setUploadResponse(null);
      };

    return (
        <InvoiceContext.Provider value={{ uploadResponse, setUploadResponse, authToken, setAuthToken, resetAppState, setUploadLoading, uploadLoading }}>
            {children}
        </InvoiceContext.Provider>
    );
};

export default InvoiceContext;
