import Card from "./Card";
import Carousel from "react-multi-carousel";
const Carousels = ({ projects, isVideo, isPlayerIsVisible, setisPlayerIsVisible }) => {
  return (
    <div className=" ">
      <div className="  mt-5">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="pb-6"
          // containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1224,
              },
              items: 2,
              partialVisibilityGutter: 40,
            },

            tablet: {
              breakpoint: {
                max: 1024,
                min: 610,
              },
              items: 1,
              partialVisibilityGutter: 20,
            },

            mobile: {
              breakpoint: {
                max: 610,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 20,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {projects.map((project) => {
            return (
              <Card project={project} key={project.id} isVideo={isVideo} isPlayerIsVisible={isPlayerIsVisible} setisPlayerIsVisible={setisPlayerIsVisible} />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default Carousels;
