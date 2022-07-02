import Card from "./Card";

const Carousel = ({ projects }) => {
  return (
    <div className=" ">
      <div className="flex md:flex-row gap-5 my-5 overflow-x-scroll  pb-8">
        {projects.map((project, index) => {
          return <Card project={project} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Carousel;
