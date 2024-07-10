import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import animiimg from "../../images/animipostercard.jpg"
import carimg from "../../images/roadposter.jpg"
import moviecard from "../../images/moviepostercard.jpg"
import bikecard from "../../images/motogp.jpg"
import { Link } from 'react-router-dom';
import "./imagecard.css"

const itemData = [
    {
      img:animiimg,
      title: 'Animi poster',
      author: 'Animi collections',
      rows: 2,
      cols: 2,
      featured: true,
      link: "/animiposters"
    },
    {
      img:carimg,
      title: 'Road Poster',
      author: ' Poster Collections',
      link: "/carposters"
    },
    {
      img: moviecard,
      title: 'Movie Poster',
      author: 'Movie Collections',
      link:"/movieposters"
    },
    {
      img: bikecard,
      title: 'bike Poster',
      author: 'Bike Collections',
      cols: 2,
      link:"/bikeposters"
    },
    // {
    //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    //   title: 'Hats',
    //   author: '@hjrc33',
    //   cols: 2,
    // },
  
  ];
export default function TitlebarImageList() {
  return (
    <>
    <h1 className='header1'>Poster Collections</h1>
     <ImageList className='main'>
        
        <ImageListItem key="Subheader" cols={2}>
        
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
      </ImageList></>
   
  );
}

