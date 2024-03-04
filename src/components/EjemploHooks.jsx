import React, { useMemo, useCallback, useState } from 'react';

const MiComponente = () => {
    
    const [name, setName] = useState('');

    const names = [
        'Takeshi',
        'Obed'
    ]

    const getName = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
    
    const clearName = useCallback(() => {
        setName(null);
    }, [])

    return (
        <h1>
            Mi Componente
        </h1>
    )
}