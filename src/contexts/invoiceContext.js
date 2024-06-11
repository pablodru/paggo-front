import React, { createContext, useState } from 'react';

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [uploadResponse, setUploadResponse] = useState(null);

    return (
        <InvoiceContext.Provider value={{ uploadResponse, setUploadResponse }}>
            {children}
        </InvoiceContext.Provider>
    );
};

export default InvoiceContext;
