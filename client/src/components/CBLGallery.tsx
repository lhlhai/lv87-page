import { useState } from 'react';
import galleryData from '../data/gallery.json';
import './CBLGallery.css';

export default function CBLGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryData.gallery)[0] | null>(null);

  const handleImageClick = (image: (typeof galleryData.gallery)[0]) => {
    setSelectedImage(image);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="cbl-gallery">
      <div className="section-container">
        <h2 className="section-title">📸 Khoảnh Khắc Liên Minh</h2>
        <p className="section-subtitle">Những khoảnh khắc đáng nhớ của cBL</p>

        <div className="gallery-grid">
          {galleryData.gallery.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.image}
                alt={image.title}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <h3 className="overlay-title">{image.title}</h3>
                  <p className="overlay-category">{image.category}</p>
                  <button className="view-button">👁️ Xem</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      {selectedImage && (
        <dialog className="lightbox-dialog" open onClick={handleCloseDialog}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseDialog}>
              ✕
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-image" />
            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-caption">{selectedImage.caption}</p>
              <span className="lightbox-category">{selectedImage.category}</span>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
