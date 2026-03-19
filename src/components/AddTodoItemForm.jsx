import { useState } from 'react';
import { useTheme } from './ThemeContext';

function AddTodoForm({ onAdd }) {
    const { theme } = useTheme();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить новую задачу..."
                style={{
                    padding: '8px',
                    width: '300px',
                    marginRight: '10px',
                    borderRadius: '4px',
                    color: theme === 'dark' ? '#fff' : '#333',
                    backgroundColor: theme === 'dark' ? '#222' : "#fff",
                    border: theme === 'dark' ? '2px solid #555' : '2px solid #ddd'
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '8px 16px',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Добавить
            </button>
        </form>
    );
}

export default AddTodoForm;
