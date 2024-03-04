import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultCongif = {
    theme: 'dark',
    lang: 'es'
};

export default function Settings() {

    const [config, setConfig] = useLocalStorage('config', defaultCongif)

    const handleClick = (event) => {
        event.preventDefault();
        setConfig((oldConfig) => (
            {
                ...oldConfig,
                theme: 'light'
            }
        ));
    };

    return (
        <div>
            <h1>APP SETTINGS</h1>
            <p>Alcual config: {config}</p>
            <button type='button' onClick={handleClick}>
                Save new settings
            </button>
        </div>
    )
}
