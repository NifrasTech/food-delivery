import React from 'react'
import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';
import { Container } from '@mui/system';

function Categories(){
    return(
        <Container>
            <Box sx={{
                marginTop: '10px', display: 'flex', gap: '10px',
                justifyContent:'space-around'
                }}>
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="circular" width={80} height={80} />
            </Box>
        </Container>
    )
}

export default Categories