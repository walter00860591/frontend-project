import React from 'react';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <button>New File</button>
            <button>Open</button>
            <button>Save</button>
            <button>Undo</button>
            <button>Redo</button>
        </div>
    );
};

export default Toolbar;