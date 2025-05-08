import React from 'react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import './styles/App.css'; // 导入全局样式

function App() {
    return (
        <div className="container">
            <div className="panel sidebar">
                <Sidebar />
            </div>
            <div className="panel main-content">
                <Content />
            </div>
            <div className="panel secondary-content">
                <p>This is an optional secondary content area.</p>
            </div>
        </div>
    );
}

export default App;
