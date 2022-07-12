import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Box, } from '@mui/material'
import fridayBanner from '../assets/img/banner-blackfriday@2x.png';
import bannerAux from '../assets/img/banner-auxilar-ordenadores@2x.png';

function Example(props)
{
    var items = [
      {
        label: 'Black Friday',
        imgPath: fridayBanner,
      },
      {
        label: 'promotion',
        imgPath:bannerAux,
      }
    ]

    return (
        <Carousel  duration={500} animation={"fade"} autoPlay={false} indicatorIconButtonProps={{
          style: { 
              color: '#000000',
              backgroundColor: '#C5D3DD',
              margin: '0 3px',
          }
      }}
      activeIndicatorIconButtonProps={{
        style: {
            backgroundColor: '#772CE8' // 2
        }
    }}
      indicatorContainerProps={{
          style: {
              marginTop: '-45px', // 5
              zIndex: '100', // 6
              position: 'relative', // 7
          }
  
      }}  >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <Box
                component="img"
                sx={{
                  display: 'block',
                  width: '100%',
                }}
                src={props.item.imgPath}
                alt={props.item.label}
              />
        </Paper>
    )
}

export default Example;