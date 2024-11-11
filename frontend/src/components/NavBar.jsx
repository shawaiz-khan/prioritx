import Logo from '../assets/images/logo.png';
import { Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import UserPfp from './UserPfp';
import Notifications from './Notifications';

export default function NavBar() {
    return (
        <header className="bg-white py-2 px-4 md:px-10">
            <nav className="flex justify-between items-center w-full gap-3">
                <img src={Logo} alt="Prioritx" className="w-24" loading="lazy" />

                <div className="flex items-center w-2/4 max-w-screen-lg">
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        className="w-full px-3 py-2 shadow-md rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    />
                    <button
                        type="button"
                        className="bg-purple-600 border-2 shadow-md border-purple-600 py-2 px-3 rounded-r-lg text-white hover:bg-purple-700 hover:border-purple-700 flex justify-center items-center"
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
        </header>
    );
}
