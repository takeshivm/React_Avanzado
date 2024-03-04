import React, { memo, useState } from 'react';

export default function Ejemplo() {

    const names = [
        'Takeshi',
        'Obed'
    ];

    const [name, setName] = useState('');

    const getName = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
    

    const clearName = () => {
        setName('');
    }

    const obtainName = () => {
        setName(getName())
    }

    return (
        <div>
            <h1>Ejemplo de uso de React memo</h1>
            <NombreAleatorios name={name} clearName={clearName}></NombreAleatorios>
            <button onClick={() => obtainName()}>
                Generar nombre
            </button>
        </div>
    )

}

export const NameComponent = (props) => {
    console.log('Renderizando de nuevo')

    return(
        <div>
            <h2>
                {props.name}
            </h2>
            <button onClick={() => props.clearName()}>
                Borrar nombre
            </button>
        </div>
    )
}

function namesAreEqual(prevProps, nextProps) {
    return prevProps.name === nextProps.name;
}

export const NombreAleatorios = memo(NameComponent, namesAreEqual);
/*export const NameComponent = memo((props) => {
    console.log('Renderizando de nuevo');

    return(
        <div>
            <h2>
                {props.name}
            </h2>
            <button onClick={() => props.clearName()}>
                Borrar nombre
            </button>
        </div>
    )
}, (prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
});
*/

