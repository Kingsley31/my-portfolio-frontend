import { getCareaProfile } from "@/data/caree-profile/get-carea-profile.api";
import { AboutContent } from "./about-content";
import Image from "next/image";


export function AboutSection(){
    const careaProfile = getCareaProfile();
    return (
        <div id='about' className="relative pr-4 md:pr-20 lg:pr-20 h-dvh pt-15 md:pt-15 snap-start scroll-mr-0 w-full overflow-x-hidden bg-[#E5E5E5]">
            <AboutContent>
                <h2 className="block md:hidden text-xl text-center md:text-left font-bold w-full">About Me</h2>
                <div className="flex itmes-center justify-start md:justify-center h-45 md:h-145 relative w-full md:w-auto">
                    <div className="bg-primary rounded-r-lg h-15 md:h-55 w-xs md:w-105 my-auto"></div>
                    <div className="h-35 md:h-110 w-35 md:w-75 absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-30 top-0 bottom-0">
                        <Image alt="A Photo of me" src="/about-photo.png" width={497} height={769} className="hidden md:block object-cover" />
                        <Image alt="A Photo of me" src="/about-photo-small.png" width={158} height={178} className="block md:hidden object-cover"/>
                    </div>
                    
                </div>
                <div>
                    <h2 className="hidden md:block text-3xl text-left font-bold">About Me</h2>
                    <p className="text-sm/8 md:text-xl/8 text-center md:text-justify mt-0 md:mt-4 px-4 md:px-0">{careaProfile.aboutText}</p>
                </div>
            </AboutContent>
        </div>
    );
}