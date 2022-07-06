import { Box } from '@material-ui/core';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Button from 'button';
import Input from 'input';
import Theme from './themes/index';

export default ({ Widget }) => (
    <Theme>
        <Box display="flex" alignItems="center">
            <p>Widget</p> {' - '} <AllInclusiveIcon />
        </Box>

        <Box mt={2}>
            <Button>Componente button</Button>
        </Box>

        <Box mt={2}>
            <Input placeholder="Componente input" />
        </Box>
    </Theme>
);
