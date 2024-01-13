import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      
      {selectedImage && (
        <div>
        
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
