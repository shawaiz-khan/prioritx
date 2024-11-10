import Logo from '../assets/images/logo.png';
import { Search } from 'lucide-react';

export default function NavBar() {
    return (
        <header className="bg-white py-2 px-10">
            <nav className="flex justify-between items-center w-full gap-3">
                <img src={Logo} alt="Prioritx" className="w-24" />
                <div className="flex items-center w-2/4 max-w-screen-lg">
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        className="w-full px-3 py-2 shadow-md rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-accent text-sm"
                    />
                    <button
                        type="button"
                        className="bg-purple-primary border-2 shadow-md border-purple-primary py-2 px-3 rounded-r-lg text-white hover:bg-purple-secondary hover:border-purple-secondary transition-all duration-300 ease-in flex justify-center items-center"
                    >
                        <Search size={19} />
                    </button>
                </div>
                <h1>User</h1>
            </nav>
        </header>
    );
}