import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

function DragNDrop() {
    const fileInputRefThumbnail = useRef(null);
    const fileInputRefBanner = useRef(null);
    const [thumbnailUploaded, setThumbnailUploaded] = useState(false);
    const [bannerUploaded, setBannerUploaded] = useState(false);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [bannerPreview, setBannerPreview] = useState(null);

    const handleButtonClick = (fileInputRef, setUploaded, setPreview) => () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (setUploaded, setPreview) => (event) => {
        setUploaded(true);
        setPreview(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="flex flex-col space-y-4 relative">
            {[
                {
                    preview: thumbnailPreview,
                    uploaded: thumbnailUploaded,
                    fileInputRef: fileInputRefThumbnail,
                    handleButtonClick: handleButtonClick(fileInputRefThumbnail, setThumbnailUploaded, setThumbnailPreview),
                    handleFileChange: handleFileChange(setThumbnailUploaded, setThumbnailPreview),
                    label: 'Select Thumbnail Image',
                },
                {
                    preview: bannerPreview,
                    uploaded: bannerUploaded,
                    fileInputRef: fileInputRefBanner,
                    handleButtonClick: handleButtonClick(fileInputRefBanner, setBannerUploaded, setBannerPreview),
                    handleFileChange: handleFileChange(setBannerUploaded, setBannerPreview),
                    label: 'Select Banner Image',
                },
            ].map(({ preview, uploaded, fileInputRef, handleButtonClick, handleFileChange, label }, index) => (
                <div key={index} className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg w-150 h-64 relative">
                    {preview ? (
                        <img src={preview} alt={`${label} preview`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', width: '100%', height: '100%' }} />
                    ) : (
                        <FaCloudUploadAlt className="text-gray-500 mb-2" size={24} />
                    )}
                    <p className="text-gray-500 mb-2">Select a file or drag and drop here</p>
                    <button onClick={handleButtonClick} className="absolute mx-auto bottom-4 px-4 py-2 border-2 border-yellow-300 text-orange-500 rounded">{label}</button>
                    <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} />
                </div>
            ))}
            {thumbnailUploaded && bannerUploaded && <p className="text-green-500 mt-4 text-center">Success! Both files have been uploaded.</p>}
        </div>
    );
}

export default DragNDrop;
