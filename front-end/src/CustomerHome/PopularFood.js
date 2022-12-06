import React from 'react'
import Box from '@mui/material/Box';
import { Divider, Skeleton, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function PopularFood(){
    return(
        <Container>
            <Divider textAlign="left" sx={{marginTop:'16px', marginBottom:'15px'}}>
            <Typography variant="h6" component="h6">
                Popular food
                </Typography>
                </Divider>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Skeleton animation={false} variant="rectangular" height={100} />
                </Grid>      
                <Grid item xs={4}>
                    <Skeleton animation={false} variant="rectangular" height={100} />
                </Grid>      
                <Grid item xs={4}>
                    <Skeleton animation={false} variant="rectangular" height={100} />
                </Grid>      
                <Grid item xs={4}>
                    <Skeleton animation={false} variant="rectangular" height={100} />
                </Grid>      
                <Grid item xs={4}>
                    <Skeleton animation={false} variant="rectangular" height={100} />
                </Grid>      
                <Grid item xs={4}>
                    <Skeleton animation={false} variant="rectangular" height={100} />
                </Grid>      
                <Grid item xs={4}>
                    <Skeleton animation={false} variant="rectangular" height={100} />
                </Grid>      
                <Grid item xs={4}>
                    <Skeleton animation={false} variant="rectangular" height={100} />
                </Grid>      
            </Grid>
        </Container>
    )
}

export default PopularFood