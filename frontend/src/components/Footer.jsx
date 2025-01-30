import { useThemeContext } from '../contexts/ThemeContext'

export default function Footer() {
    const { isDark } = useThemeContext();
    const year = (new Date().getFullYear().toLocaleString()).split(',');

    return (
        <div className={`p-3 text-sm flex justify-center items-center border border-t ${isDark ? 'border-gray-700 bg-dark-container text-light-background' : ''}`}>
            Copyright © {year} | <strong>&nbsp;Prioritx</strong>
        </div>
    )
}
