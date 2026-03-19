import { useTheme } from "./ThemeContext";

function ThemeToggler() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            style={{
                height: '32px',
                marginTop: '1px',
                marginBottom: '20px',
                padding: '8px 16px',
                background: theme === 'dark' ? '#686868' : '#f0f0f0',
                color: theme === 'dark' ? '#fff' : '#333',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            переключить тему
        </button>
    );
}
export default ThemeToggler;
