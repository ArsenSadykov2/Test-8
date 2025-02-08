import { useState } from 'react';
import { IQuote } from "../../types";

interface Props {
    onSubmit: (quote: { category: string; author: string; text: string }) => void;
    initialData?: IQuote;
}

const QuoteForm: React.FC<Props> = ({ onSubmit, initialData }) => {
    const [category, setCategory] = useState<string>(initialData?.category || '');
    const [author, setAuthor] = useState<string>(initialData?.author || '');
    const [text, setText] = useState<string>(initialData?.text || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ category, author, text });
    };

    return (
        <form onSubmit={handleSubmit}>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Star Wars">Star Wars</option>
                <option value="Famous People">Famous People</option>
                <option value="Saying">Saying</option>
                <option value="Humour">Humour</option>
                <option value="Motivational">Motivational</option>
            </select>
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
                placeholder="Quote Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default QuoteForm;
