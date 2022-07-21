import ImageCard from "../ImageCard";
import galleryMock from "../../assets/galleryMock";
import "./index.css";

const Gallery = ({ visibility }) => {
  console.log("visibility", visibility);
  return (
    <div className="Gallery">
      {visibility ? (
        <>
          <div className="Gallery__content">
            {galleryMock.map((image) => (
              <ImageCard key={image.id} data={image} />
            ))}
          </div>
        </>
      ) : (
        <h4>
          The gallery is temporarily hidden, please click "show/hide" in order
          to make it appear again.
        </h4>
      )}
    </div>
  );
};

export default Gallery;
