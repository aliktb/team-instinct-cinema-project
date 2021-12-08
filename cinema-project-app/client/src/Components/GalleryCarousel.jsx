import { UncontrolledCarousel } from "reactstrap";

const GalleryCarousel = () => {
  return (
    <div>
      <UncontrolledCarousel
        items={[
          {
            altText: "Gods of Egypt",
            caption: "Gods of Egypt",
            key: 1,
            src: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2016%2F02%2Fgods-of-egypt-poster-banner-1200x600.jpg",
          },
          {
            altText: "Assassins",
            caption: "Assassins",
            key: 2,
            src: "https://www.phoenix.org.uk//content/uploads/2021/01/assassins-1200x600-1.jpg",
          },
          {
            altText: "The Lego Movie: The Second Part",
            caption: "The Lego Movie: The Second Part",
            key: 3,
            src: "https://media.londontheatredirect.com/Event/CinemaTheLegoMovie2/event-detail-image_32313.jpg",
          },
          {
            altText: "Fireproof",
            caption: "Fireproof",
            key: 3,
            src: "https://www.tbnuk.org/image.php/tbnuk-program-cover-1463847369.png?w=1200&h=600&src=/images/static/tbnuk-program-cover-1463847369.png",
          },
        ]}
      />
    </div>
  );
};

export default GalleryCarousel;
