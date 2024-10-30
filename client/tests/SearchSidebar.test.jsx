import { describe, it, expect } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchSidebar from '../src/components/SearchSidebar.jsx';
   
describe('SearchSidebar unit tests', () => {

    it('renders components on load', async () => {
        render(<SearchSidebar />);
        //screen.debug();
        await waitFor(() => expect(screen.getByRole("textbox")).toBeInTheDocument());
        await waitFor(() => expect(screen.getByTestId('search-button')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByTestId("search-status")).toBeInTheDocument());
        await waitFor(() => expect(screen.getByTestId("search-result-heading")).toBeInTheDocument());
    });

    it('text input changes value', async () => {
        const user = userEvent.setup();
        render(<SearchSidebar />);
        const textInput =  await waitFor(() => screen.getByRole('textbox'));
        const searchTerm = 'test';
        await act( async () => await user.type(textInput, searchTerm));
        await waitFor(() => expect(textInput).toHaveValue(searchTerm));
    })
})
