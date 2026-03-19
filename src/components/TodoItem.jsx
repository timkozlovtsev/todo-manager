import { useState } from "react";
import { useTheme } from "./ThemeContext";

function TodoItem({ task, onToggle, onDelete, onEdit }) {
    const { theme } = useTheme();

    const textStyle = {
        flex: 1,
        textDecoration: task.completed ? 'line-through' : 'none',
        color: theme === 'dark' ? (
            task.completed ? '#666' : '#fff'
        ) : (
            task.completed ? '#ccc' : '#333'
        )
    }

    const inputStyle = {
        flex: 1,
        backgroundColor: theme === 'dark' ? '#222' : "#fff",
        color: theme === 'dark' ? '#fff' : '#333'
    }

    const [isEditing, setIsEditing] = useState(false);
    const handleDoubleClick = (e) => {
        e.preventDefault();
        setIsEditing(true);
    };

    return (
        <li style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px',
            borderBottom: theme === 'dark' ? '1px solid #555' : '1px solid #eee'
        }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            {isEditing ? (
                <input
                    autoFocus
                    value={task.text}
                    onChange={(e) => onEdit(task.id, e.target.value)}
                    onBlur={() => setIsEditing(false)}
                    onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
                    style={inputStyle}
                />
            ) : (
                <span onDoubleClick={handleDoubleClick} style={textStyle}>
                    {task.text}
                </span>
            )}
            <button
                onClick={() => onDelete(task.id)}
                style={{
                    background: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    cursor: 'pointer'
                }}
            >
                Удалить
            </button>
        </li>
    );
}

export default TodoItem;
