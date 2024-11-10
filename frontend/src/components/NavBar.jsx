import { createContext, useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Search } from 'lucide-react';

export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const UserContext = createContext();

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
        console.log(isLoggedIn);
    }

    return (
        <UserContext.Provider value={{ isLoggedIn, toggleLogin }}>
            <header className="bg-white py-2 px-5">
                <nav className="flex justify-between items-center w-full gap-3">
                    <img src={Logo} alt="Prioritx" className="w-24" />

                    <div className="flex items-center w-2/4 max-w-screen-lg">
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            className="w-full px-3 py-2 shadow-lg rounded focus:outline-none focus:ring-2 focus:ring-purple-accent text-sm"
                        />
                        <button type="button" className="bg-purple-primary border-2 border-purple-primary py-2 px-3 rounded-md text-white hover:bg-purple-secondary hover:border-purple-secondary transition-all duration-300 ease-in">
                            <Search size={18} />
                        </button>
                    </div>
                    <button onClick={toggleLogin}>Click Me</button>
                </nav>
            </header>
        </UserContext.Provider>
    );
}