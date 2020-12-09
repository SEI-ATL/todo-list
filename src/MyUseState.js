import React, { useState } from 'react';

function MyUseState() {
    const [name, setName] = useState('Rome');
    setName('General Assembly');
    return (
        <div>
            <h1>My Use State Example</h1>
        </div>
    );
}

export default MyUseState;