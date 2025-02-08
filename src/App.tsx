import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axiosApi from "./AxiosApi.ts";
import Header from "./components/Header/Header.tsx";
import QuoteList from "./components/QuoteList/QuoteList.tsx";
import QuoteForm from "./components/QuoteForm/QuoteForm.tsx";


const App = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetchQuotes();
    }, []);

    const fetchQuotes = async () => {
        const response = await axiosApi.get('/quotes.json');
        const data = response.data;
        if (data) {
            const quotesArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));
            setQuotes(quotesArray);
        }
    };

    const addQuote = async (quote) => {
        await axiosApi.post('/quotes.json', quote);
        fetchQuotes();
    };

    const deleteQuote = async (id) => {
        await axiosApi.delete(`/quotes/${id}.json`);
        fetchQuotes();
    };

    const editQuote = async (id, updatedQuote) => {
        await axiosApi.put(`/quotes/${id}.json`, updatedQuote);
        fetchQuotes();
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<QuoteList quotes={quotes} onDelete={deleteQuote} onEdit={editQuote} />}
                />
                <Route
                    path="/submit"
                    element={<QuoteForm onSubmit={addQuote} />}
                />
            </Routes>
        </Router>
    );
};

export default App;