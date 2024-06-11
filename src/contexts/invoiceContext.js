import React, { createContext, useState } from 'react';

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [uploadResponse, setUploadResponse] = useState(null);
    const [authToken, setAuthToken] = useState(null);
    
    return (
        <InvoiceContext.Provider value={{ uploadResponse, setUploadResponse, authToken, setAuthToken }}>
            {children}
        </InvoiceContext.Provider>
    );
};

export default InvoiceContext;
