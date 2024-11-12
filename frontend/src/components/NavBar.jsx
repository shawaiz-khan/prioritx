// import Logo from '../assets/images/logo.png';
import { Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import UserPfp from './UserPfp';
import Notifications from './Notifications';
import { useThemeContext } from '../contexts/ThemeContext';

export default function NavBar() {
    const { isDark } = useThemeContext();

    return (
        <header className={`py-2 px-4 md:px-10 ${isDark ? 'bg-dark-container' : 'bg-light-container'}`}>
            <nav className="flex justify-between items-center w-full gap-3">
                {/* <img src={Logo} alt="Prioritx" className="w-24" loading="lazy" /> */}
                <h1 className={`font-bold ${isDark ? "text-light-background" : 'text-gray-800'} text-3xl`}>PRIO<span className='text-purple-600'>RITX</span></h1>
                <div className="flex items-center w-2/4 max-w-screen-lg">
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        className="w-full px-3 py-2 shadow-md rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    />
                    <button
                        type="button"
                        className={`bg-purple-600 border-none shadow-md py-2 px-3 rounded-r-lg text-light-background hover:bg-purple-700 flex justify-center items-center`}
                    >
                        <Search size={20} />
                    </button>
                </div>

                <div className="flex gap-4 justify-center items-center">
                    <Notifications />
                    <ThemeToggle />
                </div>
                <UserPfp />
            </nav>
        </header >
    );
}
