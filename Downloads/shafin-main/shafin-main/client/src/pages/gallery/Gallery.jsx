import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css"; // Import CSS for styling

const Gallery = () => {

  const [galleryImages, setGalleryImages] = useState([]);

 
 
  // Fetch gallery images from MongoDB on component mount
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await axios.get("https://shafin-backend.onrender.com/api/v1/gallery");
        const imageUrls = response.data.map((image) => image.publicUrl).sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
        
        setGalleryImages(imageUrls);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchGalleryImages();
  }, []);

  return (
    <div className="gallery-container">
      <h1>Customer Gallery</h1>
      <h1 className="upload-txt">Rock the Look,Snap a Pic! <br />Share Your Style with zculture and Get Featured</h1>
      <br />

      <div className="gallery-grid">
        {/* Render the uploaded images */}
        {galleryImages.length > 0 &&
          galleryImages.map((imageUrl, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
