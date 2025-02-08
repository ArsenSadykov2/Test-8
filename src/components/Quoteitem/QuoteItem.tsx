import {IQuote} from "../../types";

interface Props {
    quote: IQuote;
    onDelete: (id: string) => void;
    onEdit: (quote: IQuote) => void;
}

const QuoteItem: React.FC<Props> = ({ quote, onDelete, onEdit }) => {
    return (
        <div>
            <h3>{quote.author}</h3>
            <p>{quote.text}</p>
            <p><em>{quote.category}</em></p>
            <button onClick={() => onEdit(quote)}>Edit</button>
            <button onClick={() => onDelete(quote.id)}>Delete</button>
        </div>
    );
};

export default QuoteItem;