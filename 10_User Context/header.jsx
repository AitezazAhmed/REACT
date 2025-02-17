import React, { useContext } from 'react';
import { DataContext } from '../usercontext';

const Header = () => {
    const data = useContext(DataContext);
    console.log(data);

    return (
        <div>
            <h1>Hey, I am {data.user}</h1>
        </div>
    );
}

export default Header;