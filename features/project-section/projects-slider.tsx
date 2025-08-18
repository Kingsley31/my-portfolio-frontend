'use client';
import { getCareaProfile } from "@/data/caree-profile/get-carea-profile.api";
import { Project } from "@/data/caree-profile/type";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectSlider(){
    const [mounted, setMounted] = useState(false);
      useEffect(() => setMounted(true), []);
    const {projects} = getCareaProfile();
    const [unviewedProjects, setUnviewedProjects] = useState<Project[]>(projects);
    const [viewedProjects, setViewedProjects] =  useState<Project[]>([]);

    const viewPrevious = () => {
        if (viewedProjects.length === 0) return;
        const lastViewed = viewedProjects[viewedProjects.length - 1];
        setViewedProjects(viewedProjects.slice(0, -1));
        setUnviewedProjects([lastViewed, ...unviewedProjects]);
    }
    const viewNext = () => {
        if (unviewedProjects.length === 1) return;
        const [next, ...rest] = unviewedProjects;
        setUnviewedProjects(rest);
        setViewedProjects([...viewedProjects, next]);
    }
    if (!mounted) return (<div className="flex items-center md:items-start justify-center">
                              <Skeleton className="w-2/3 h-70 md:w-90 md:h-3/5 max-h-95 rounded-sm" />
                            </div>);
    return (<div className="px-8 md:px-0 h-3/4 md:h-3/5 md:max-h-95 w-screen md:w-4/6 mt-4"><div className="relative w-full h-6/7 md:h-full">
        {unviewedProjects.map((project,index) => {
            const top = (unviewedProjects.length*3)-(index*3);
            const leftRight = (index*4)
            const zIndex = (unviewedProjects.length*2)-(index*2);

            return (<div 
                key={project.title}
                style={{
                    top:`calc(${top}%)`,
                    left: `calc(${leftRight}%)`,
                    right: `calc(${leftRight}%)`,
                    zIndex
                }}
                className={`h-8/9 md:h-3/4 bg-white border-1 border-primary absolute rounded-sm ${index === 0 ? "animate-scale-in" : ""}`}>
                    <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-4 h-full">
                        <div className="flex flex-col gap-2 justify-between">
                            <div className="flex gap-2 ml-4 justify-start items-center mt-1 md:mt-6">{project.techStack.map((stack)=> (<div key={stack}><p  className="grow rounded-md text-white bg-primary text-xs text-center px-2 py-1">{stack}</p></div>))}</div>
                            <h3 className="ml-4 mt-2 font-bold text-base text-start">{project.title}</h3>
                            <div className="ml-4 mr-2 md:mr-0 grow text-sm/6 text-start">{project.shortDescription}</div>
                            <div className="mb-4 md:mb-6 mt-1 md:mt-0"><span className="inline-block animate-cta-pulse cursor-pointer rounded-l-0 rounded-r-md bg-primary font-bold text-white py-2 px-4 text-xs">View Details &gt;&gt;</span></div>
                        </div>
                        <div className="grow md:h-full rounded-r-sm overflow-hidden"><Image alt="Project Screenshot" src={project.imageUrl} width={770} height={790} className="object-cover max-h-full rounded-r-sm"/></div>
                    </div>
        </div>);})}
    </div>
    <div>
        <div className="flex justify-center gap-20 mt-8 md:mt-0"><Button disabled={viewedProjects.length==0} className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full font-bold bg-white text-primary border-2 border-primary" onClick={viewPrevious}>&larr;</Button><Button disabled={unviewedProjects.length==1} className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full font-bold" onClick={viewNext}>&rarr;</Button></div>
    </div>
    </div>);
}