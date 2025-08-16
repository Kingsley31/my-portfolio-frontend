import { ProjectContent } from "./project-content";
import { ProjectSlider } from "./projects-slider";

export function ProjectSection(){
    return (<div id='projects' className="relative h-dvh snap-start scroll-mr-0 overflow-x-hidden bg-white">
        <ProjectContent>
            <h2 className="text-xl md:text-3xl text-center font-bold w-full">My Projects</h2>
            <p className="text-xs md:text-base text-center w-screen md:w-full">Explore My Selected Works</p>
            <ProjectSlider/>
        </ProjectContent>
    </div>);
}