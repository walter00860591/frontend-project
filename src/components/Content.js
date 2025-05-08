import React from 'react';
import './Content.css';

const Content = () => {
    return (
        <div className="vscode-layout">
            <div className="sidebar">
                <button>Explorer</button>
                <button>Search</button>
                <button>Source Control</button>
                <button>Extensions</button>
                <button>Settings</button>
            </div>
            <div className="main-area">
                <div className="toolbar">
                    <span>README.md</span>
                </div>
                <div className="content">
                    <h1>Welcome to the Content Area</h1>
                    <p>This is where the main content will be displayed.</p>
                </div>
            </div>
        </div>
    );
};

export default Content;