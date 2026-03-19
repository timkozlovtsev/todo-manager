import { useTheme } from "./ThemeContext";

function TodoFilters({ filter, onFilterChange, activeCount }) {
    const { theme } = useTheme();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            paddingBottom: '10px',
            borderBottom: theme === 'dark' ? '2px solid #555' : '2px solid #eee'
        }}>
            <span style={{ color: theme === 'dark' ? '#fff' : '#333' }}>Осталось задач: {activeCount}</span>
            <div>
                {['all', 'active', 'completed'].map((filterType) => (
                    <button
                        key={filterType}
                        onClick={() => onFilterChange(filterType)}
                        style={{
                            margin: '0 5px',
                            padding: '5px 10px',
                            background: filter === filterType ? (
                                '#007bff'
                            ) : (
                                theme === 'dark' ? '#686868' : '#f0f0f0'
                            ),
                            color: filter === filterType ? (
                                '#fff'
                            ) : (
                                theme === 'dark' ? '#fff' : '#333'
                            ),
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {filterType === 'all' ? 'Все' :
                            filterType === 'active' ? 'Активные' : 'Выполненные'}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TodoFilters;
