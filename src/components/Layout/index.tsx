import React, { useState } from 'react';
import './styles.scss';
import OffCanvasComponent from '../OffCanvasComponent';

const Layout:React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

    const toggleOffCanvas = () => { setIsOffCanvasOpen(prev => !prev) }
    const toggleSidebar = () => { setSidebarOpen(prev => !prev) }

    return (
        <div className="layoutContainer">
            <div className="header">
                <button onClick={toggleSidebar}>Toggle Sidebar</button>
                <button onClick={toggleOffCanvas}>Toggle Canvas</button>
            </div>
            <div className="body">
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    Sidebar Content
                </div>
                <div className={`mainContent ${isSidebarOpen ? 'shifted' : ''}`}>
                    Main Content
                </div>
            </div>
            <div className="footer">
                Footer Content
            </div>
            <OffCanvasComponent isOpen={isOffCanvasOpen} onToggle={toggleOffCanvas} />
        </div>
    );
};

export default Layout;