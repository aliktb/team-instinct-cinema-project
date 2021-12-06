import { UncontrolledCarousel } from "reactstrap";
import PicOne from "../resources/movie1.jpg";
import PicTwo from "../resources/movie2.jpg";
import PicThree from "../resources/movie3.jpg";


const NewCarousel = () => {
console.log(PicOne);
  return (
    <div>
      <UncontrolledCarousel
        items={[
          {
            altText: "Encanto",
            caption: "Encanto",
            key: 1,
            src: 'https://picsum.photos/id/123/1200/600',
          },
          {
            altText: "Spider-Man: No Way Home",
            caption: "Spider-Man: No Way Home",
            key: 2,
            src: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1d/Spider-Man_No_Way_Home_JP_Poster.jpg',
          },
          {
            altText: "Clifford the Big Red Dog",
            caption: "Clifford the Big Red Dog",
            key: 3,
            src: 'https://picsum.photos/id/678/1200/600'
          },
        ]}
      />
    </div>
  );
};

export default NewCarousel;
