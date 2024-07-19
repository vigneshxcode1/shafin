import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import animiimg from "../../images/animicard.jpg"
import carimg from "../../images/carcard.jpg"
import moviecard from "../../images/moviecard.jpg"
import musiccard from "../../images/musicvideo.gif"
import { Link } from 'react-router-dom';
import "./imagecard.css"
export default function TitlebarImageList() {
  return (
    <ImageList className='main'>
        
      <ImageListItem key="Subheader" cols={2}>
      <h1 className='header1'>Top collections</h1>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <Link to={item.link}>
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >

              </IconButton>
            }
          />
          </Link>
         
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img:animiimg,
    title: 'Animi Printed',
    author: '@oversized collections',
    rows: 2,
    cols: 2,
    featured: true,
    link: "/anioversized"
  },
  {
    img:carimg,
    title: 'Road Printed',
    author: '@Car Collections',
    link: "/car"
  },
  {
    img: moviecard,
    title: 'Movie printed',
    author: '@Movie Collections',
    link:"/movieoversized"
  },
  {
    img: musiccard,
    title: 'Music printed',
    author: '@ musix Collections',
    cols: 2,
    link:"/musicoversized"
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  //   author: '@hjrc33',
  //   cols: 2,
  // },

];