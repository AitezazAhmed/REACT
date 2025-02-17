import React, { createContext } from 'react';

// Create context
export const DataContext = createContext();

// Context Provider Component
const UserContextProvider = ({ children }) => {
    const user = "Aitezaz"; // Example data
    return (
        <DataContext.Provider value={{ user }}>
            {children}
        </DataContext.Provider>
    );
};

export default UserContextProvider;