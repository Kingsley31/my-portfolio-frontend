import { getPersonalDetails } from "@/data/personal-details/get-personal-details.api";
import { HeroContent } from "./hero-content";
import { SkillsCircle } from "./skills-circle";
import { Button } from "@/components/ui/button";
import ScrollDownIndicator from "./scrolldown-indicator";
import { getCareaProfile } from "@/data/caree-profile/get-carea-profile.api";
import Link from "next/link";



export function HeroSection() {
    const personalDetails = getPersonalDetails();
    const careaProfile = getCareaProfile();
    return (
        <div id='#' className="bg-white relative px-4 md:px-10 lg:px-20 h-dvh pt-15 md:pt-0 snap-start scroll-mr-0 w-full overflow-x-hidden">
            <HeroContent>
                <p className="block md:hidden mx-auto text-base mt-5">Hello, I’m {personalDetails.middleName}</p>
                <div className="mt-0 md:mt-0">
                    <SkillsCircle/>
                </div>
                <div className="flex flex-col justify-between md:justify-start basis-sm md:basis-[408px] pt-0">
                    <p className="hidden md:block md:text-2xl">Hello, I’m {personalDetails.middleName}</p>
                    <div>
                        <p className="text-2xl mx-auto md:mx-0 text-center md:text-left md:text-5xl font-bold mt-4 md:mt-6 text-primary">{careaProfile.careaRole}</p>
                        <p className="mt-1 mx-auto md:mx-0 text-center md:text-justify text-base">{careaProfile.professionalStatement}</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-10 gap-8 md:gap-8 mb-auto">
                        <Button variant={"default"} size={'lg'} className="flex-auto rounded-sm" asChild><Link href={careaProfile.resumeUrl} target="blank">Download CV</Link></Button>
                        <Button variant="outline" size={'lg'} className="flex-auto rounded-sm border-2 border-primary text-primary">Contact Me</Button>
                    </div>
                </div>
            </HeroContent>
            <ScrollDownIndicator />
        </div>
    );
}