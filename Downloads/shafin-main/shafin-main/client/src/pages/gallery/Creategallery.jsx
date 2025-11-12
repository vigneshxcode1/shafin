import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css"; // Import CSS for styling

const Gallery = () => {
  const [file, setFile] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]); // State to store image URLs
  const [isLoading, setIsLoading] = useState(false);


  const handleUpload = async () => {
    setIsLoading(true); // Set loading state to true when the upload starts
    // Simulate a file upload with a delay
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate upload delay
    setIsLoading(false); // Reset loading state after the upload completes
  };


  
  // Handle image upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://shafin-backend.onrender.com/api/v1/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

    
      const newImageUrl = response.data.url;
      setGalleryImages((prevImages) => [...prevImages, newImageUrl]);

      console.log("Image uploaded:", newImageUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };


  return (
    <div className="gallery-container">
      <h1>Customer Gallery</h1>
      <h1 className="upload-txt">Rock the Look, Snap a Pic! Share Your Style with zculture and Get Featured</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="input-file"
        />
          <button 
      type="submit" 
      className="upload-button" 
      onClick={handleUpload}
      disabled={isLoading} 
    >
      {isLoading ? (
        <span className="spinner">loading</span>
      ) : (
        "Upload"
      )}
    </button>
      </form>

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
