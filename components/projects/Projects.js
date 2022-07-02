import Carousel from "./Carousel";

const Projects = () => {
  const cloneProjects = [
    {
      title: "Marvel clone",
      description: "",
      github: "https://github.com/moha5145/marvel-front",
      img: "https://res.cloudinary.com/dyjpgdpzk/image/upload/v1656683572/marvel/marvel_vvygbe.png",
      link: "https://marvel-clone-moha.netlify.app/",
    },
    {
      title: "Vinted clone",
      description: "",
      github: "https://github.com/moha5145/vinted-front",
      img: "https://res.cloudinary.com/dyjpgdpzk/image/upload/v1656683249/vinted/capture-du-site/vinted_lyxhdp.png",
      link: "https://vinted-clone-moha.netlify.app",
    },

    {
      title: "Tripadvisor",
      description: "",
      github: "https://github.com/moha5145/Tripadvisor-clone",
      img: "https://res.cloudinary.com/dyjpgdpzk/image/upload/v1656684330/tripadvisor/tripadvisor_vviagg.png",
      link: "https://tripadvisor-clone-reacteur.netlify.app/",
    },
    {
      title: "Deliveroo",
      description: "",
      github: "https://github.com/moha5145/deliveroo-front-moha",
      img: "https://res.cloudinary.com/dyjpgdpzk/image/upload/v1656684802/deleveroo/deleveroo_wbdcqy.png",
      link: "https://deliveroo-clone-moha.netlify.app/",
    },
  ];
  const personlProject = [
    {
      title: "Todo app",
      description: "Cross platform Todo app (web, mobile, Desktop) with local database, made with Vue 3, Quasar, Capacitor, Electron, Tauri, Localbase",
      github: "https://github.com/moha5145/myTodo",
      img: "https://res.cloudinary.com/dyjpgdpzk/image/upload/v1656689826/my-todo/my-todo_dbydzx.png",
      link: "https://my-todo-vue3.netlify.app/#/",
    },
    {
      title: "Ricipe app",
      description: "Cross platform Recipe app (web, mobile, Desktop) with local database, made with Vue 3, Quasar, Capacitor, Tauri, Localbase",
      github: "https://github.com/moha5145/myRecipe",
      img: "https://res.cloudinary.com/dyjpgdpzk/image/upload/v1656690273/my-recipe/my-recip_p2xa9y.png",
      link: "https://my-recipe-vue3.netlify.app/#/",
    },
  ];
  return (
    <div id="projects" className="  h-[100%] bg-projects p-2">
      <div className=" mx-auto mr-0">
        <h1 className="text-center pt-10">Projects</h1>

        <div className="pl-3">
          <div>
            <h3>Les répliques</h3>
            <Carousel projects={cloneProjects} />
          </div>

          <div>
            <h3>Projets personnel</h3>
            <Carousel projects={personlProject} />
          </div>

          <div>
            <h3> Projet en group</h3>
            <Carousel projects={cloneProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
