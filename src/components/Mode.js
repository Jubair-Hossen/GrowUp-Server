import React from 'react';
import { Switch } from '@mui/material';
import { ColorModeContext } from '../App';

const Mode = () => {
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Switch onClick={colorMode.toggleColorMode}>Mode</Switch>
    );
};

export default Mode;