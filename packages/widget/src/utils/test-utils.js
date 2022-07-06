import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Theme from '../themes/index';

const AllTheProviders = ({ children }) => <Theme>{children}</Theme>;

const customRender = (ui, opt) => render(ui, { wrapper: AllTheProviders, ...opt });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
