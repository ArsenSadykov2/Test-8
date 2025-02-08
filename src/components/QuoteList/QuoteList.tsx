import React from 'react';
import { IQuote } from "../../types";
import QuoteItem from "../Quoteitem/QuoteItem.tsx";

interface QuoteListProps {
    quotes: IQuote[];
    onDelete: (id: string) => void;
    onEdit: (quote: IQuote) => void;
}

const QuoteList: React.FC<QuoteListProps> = ({ quotes, onDelete, onEdit }) => {
    return (
        <div>
            {quotes.map((quote) => (
                <QuoteItem
                    key={quote.id}
                    quote={quote}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

export default QuoteList;