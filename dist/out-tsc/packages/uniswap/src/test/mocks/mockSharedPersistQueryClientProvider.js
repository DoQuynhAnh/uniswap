import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClientProvider } from '@tanstack/react-query';
import { SharedQueryClient } from 'uniswap/src/data/apiClients/SharedQueryClient';
export const mockSharedPersistQueryClientProvider = {
    SharedPersistQueryClientProvider: jest.fn().mockImplementation(MockedSharedPersistQueryClientProvider),
};
function MockedSharedPersistQueryClientProvider({ children }) {
    return _jsx(QueryClientProvider, { client: SharedQueryClient, children: children });
}
//# sourceMappingURL=mockSharedPersistQueryClientProvider.js.map