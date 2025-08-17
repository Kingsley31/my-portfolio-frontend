import { getCareaProfile } from "@/data/caree-profile/get-carea-profile.api";
import { AboutContent } from "./about-content";
import Image from "next/image";


export function AboutSection(){
    const careaProfile = getCareaProfile();
    return (
        <div id='about' className="relative pr-4 md:pr-20 lg:pr-20 h-dvh pt-15 md:pt-15 snap-start scroll-mr-0 w-full overflow-x-hidden bg-[#E5E5E5]">
            <AboutContent>
                <h2 className="block md:hidden text-xl text-center md:text-left font-bold w-full">About Me</h2>
                <div className="flex itmes-center justify-start md:justify-center h-1/6 md:h-2/3 relative w-full md:w-auto">
                    <div className="block md:hidden bg-primary rounded-r-lg h-2/4 w-xs translate-y-4/5"></div>
                    <div className="hidden md:block w-80 lg:w-100 my-auto">
                        <Image alt="A Photo of me" src="/photo.png" width={497} height={769} className="hidden md:block object-cover" />
                    </div>
                    <div className="block md:hidden h-full overflow-hidden w-1/3 absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
                        <Image alt="A Photo of me" src="/about-photo-small.png" width={158} height={178} className="block md:hidden object-cover"/>
                    </div>
                    
                </div>
                <div className="flex flex-col justify-center md:h-2/3">
                    <h2 className="hidden md:block text-3xl text-left font-bold">About Me</h2>
                    <p className="text-sm/8 md:text-xl/8 text-center md:text-justify mt-4 md:mt-4 px-4 md:px-0">{careaProfile.aboutText}</p>
                </div>
            </AboutContent>
        </div>
    );
}