import { useNavigate } from "react-router-dom";
/*import "./GalleryModal.css";*/

export default function GalleryModal({ open, onClose }) {
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div
        className="gallery-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Elegí una galería:</h3>

        <div className="gallery-options">
          <button
            onClick={() => {
              navigate("/fotos");
              onClose();
            }}
          >
            📸 Fotos
          </button>

          <button
            onClick={() => {
              navigate("/videos");
              onClose();
            }}
          >
            🎬 Videos
          </button>
        </div>
      </div>
    </div>
  );
}
