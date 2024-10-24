import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App.jsx';

describe('App flow tests', () => {

    const datalength = 136;

    it('renders results on load', async () => {
        render(<App />);
        await waitFor(() => expect(screen.getByTestId("search-result-heading")).toBeInTheDocument());
        //search status update
        await waitFor(() => expect(screen.getByText(/^Showing all/)).toBeInTheDocument());
        // search results populated
        await waitFor(() => expect(screen.getAllByTestId("search-result")).toHaveLength(datalength));
    });

    it('has correct url on load', async () => {
        render(<App />);
        await waitFor(() => expect(window.location.pathname).toBe('/'));
    });

    it('navigates to selected result', async () => {
        const user = userEvent.setup();
        render(<App />);
        //confrimt there is a result
        await waitFor(() => expect(screen.getAllByTestId("search-result").length).toBeGreaterThan(0));
        //click on first result
        const firstResult = await waitFor(() => screen.getAllByTestId("search-result")[0]);
        await user.click(firstResult);
        //check that url is correct
        await waitFor(() => expect(window.location.pathname).toBe('/id/hk0001'));
        //check that text container is populated
        await waitFor(() => expect(screen.getByText(/^\(Untitled\) \(1957\)/)).toBeInTheDocument());
    })

    it('renders the correct content', async () => {
        const user = userEvent.setup();
        render(<App />);
        //get results
        const res = await waitFor(() => screen.getAllByTestId("search-result"));
        //click on first result
        await user.click(res[0]);
        //check that text container is populated
        await waitFor(() => expect(screen.getByText(/^\(Untitled\) \(1957\)/)).toBeInTheDocument());
        //check that image is populated
        await waitFor(() => expect(screen.getByAltText('image of (Untitled) (1957) by heinz klinkon')).toBeInTheDocument());
        //click on second result
        await user.click(res[1]);
        //check that text container is populated
        await waitFor(() => expect(screen.getByText(/^II \(1999\)/)).toBeInTheDocument());
        //check that image is populated
        await waitFor(() => expect(screen.getByAltText('image of II (1964) by heinz klinkon')).toBeInTheDocument());
        //click on third result
        await user.click(res[2]);
        //check that text container is populated
        await waitFor(() => expect(screen.getByText(/^\(Chimeras\) \(1966\)/)).toBeInTheDocument());
        //check that image is populated
        await waitFor(() => expect(screen.getByAltText('image of (Chimeras) (1966) by heinz klinkon')).toBeInTheDocument());
    })

    it('searches for something and selects a result', async () => {
        const user = userEvent.setup();
        render(<App />);
        //typing
        const textInput =  await waitFor(() => screen.getByRole('textbox'));
        const searchTerm = 'hk0001';
        await user.type(textInput, searchTerm);
        //search button press calls fetch
        const searchButton = await waitFor(() => screen.getByTestId('search-button'));
        await user.click(searchButton);
        //search status update
        await waitFor(() => expect(screen.getByText(/^Showing 1/)).toBeInTheDocument());
        // search results populated
        await waitFor(() => expect(screen.getAllByTestId("search-result")).toHaveLength(1));
        //click on first result
        const firstResult = await waitFor(() => screen.getAllByTestId("search-result")[0]);
        await user.click(firstResult);
        //check that first result is selected
        await waitFor(() => expect(firstResult).toHaveClass('selected'));
    });

    it('navigates back to home sceen when header is clicked', async () => {
        const user = userEvent.setup();
        render(<App />);
        const header = await waitFor(() => screen.getByRole("link"));
        await user.click(header);
        //check that url is correct
        await waitFor(() => expect(window.location.pathname).toBe('/'));
    });

    it('cycles through results with nav buttons', async () => {
        const user = userEvent.setup();
        render(<App />);
        const nextButton = await waitFor(() => screen.getByTestId("next-button"));
        const previousButton = await waitFor(() => screen.getByTestId("previous-button"));
        //confirm results are populated
        await waitFor(() => expect(screen.getAllByTestId("search-result")).toHaveLength(datalength));
        //click next
        await user.click(nextButton);
        //check that first result is selected
        await waitFor(() => expect(screen.getAllByTestId("search-result")[0]).toHaveClass('selected'));
        //click previous
        await user.click(previousButton);
        //check that the last result is selected
        await waitFor(() => expect(screen.getAllByTestId("search-result")[datalength - 1]).toHaveClass('selected'));
        //click next
        await user.click(nextButton);
        //check that the second result is selected
        await waitFor(() => expect(screen.getAllByTestId("search-result")[0]).toHaveClass('selected'));
    });
    
    it('cycles through results with next nav button', async () => {
        const user = userEvent.setup();
        render(<App />);
        const nextButton = await waitFor(() => screen.getByTestId("next-button"));
        //confirm results are populated
        const expectedLength = datalength;
        await waitFor(() => expect(screen.getAllByTestId("search-result")).toHaveLength(expectedLength));
        let currentIndex = -1;
        for (let i = 0; i < expectedLength + 1; i++) {
            //click next
            await user.click(nextButton);
            currentIndex = (currentIndex + 1) % expectedLength;
            //check that the next result is selected
            await waitFor(() => expect(screen.getAllByTestId("search-result")[currentIndex]).toHaveClass('selected'));
        }
    });

    it('cycles through results with previous nav button', async () => {
        const user = userEvent.setup();
        render(<App />);
        const previousButton = await waitFor(() => screen.getByTestId("previous-button"));
        //confirm results are populated
        const expectedLength = datalength;
        await waitFor(() => expect(screen.getAllByTestId("search-result")).toHaveLength(expectedLength));
        let currentIndex = expectedLength - 1;
        for (let i = 0; i < expectedLength + 1; i++) {
            //click previous
            await user.click(previousButton);
            currentIndex = (expectedLength - (i % expectedLength)) % expectedLength;
            //check that the previous result is selected
            await waitFor(() => expect(screen.getAllByTestId("search-result")[currentIndex]).toHaveClass('selected'));
        }
    });

    it('navigates using nav buttons', async () => {
        const user = userEvent.setup();
        render(<App />);
        //check that url is correct
        await waitFor(() => expect(window.location.pathname).toBe('/'));
        const nextButton = await waitFor(() => screen.getByTestId("next-button"));
        const previousButton = await waitFor(() => screen.getByTestId("previous-button"));
        //confirm results are populated
        await waitFor(() => expect(screen.getAllByTestId("search-result").length).toBeGreaterThan(2));
        //click next
        await user.click(nextButton);
        //check that url is correct
        await waitFor(() => expect(window.location.pathname).toBe('/id/hk0001'));
        //click next
        await user.click(nextButton);
        //check that url is correct
        await waitFor(() => expect(window.location.pathname).toBe('/id/hk0002'));
        //click previous
        await user.click(nextButton);
        //check that url is correct
        await waitFor(() => expect(window.location.pathname).toBe('/id/hk0003'));
        //click previous
        await user.click(previousButton);
        //check that url is correct
        await waitFor(() => expect(window.location.pathname).toBe('/id/hk0002'));
        //click previous
        await user.click(previousButton);
        //check that url is correct
        await waitFor(() => expect(window.location.pathname).toBe('/id/hk0001'));
    });

});
