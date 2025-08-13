import { getPersonalDetails } from "@/data/personal-details/get-personal-details.api";
import { HeroContent } from "./hero-content";
import { SkillsCircle } from "./skills-circle";
import { Button } from "@/components/ui/button";
import ScrollDownIndicator from "./scrolldown-indicator";



export function HeroSection() {
    const personalDetails = getPersonalDetails();
    return (
        <div className="relative px-4 md:px-10 lg:px-20 h-dvh pt-20 overflow-y-auto w-full overflow-x-hidden">
            <HeroContent>
                <p className="block md:hidden mx-auto text-base">Hello, I’m {personalDetails.middleName}</p>
                <div className="mt-10 md:mt-0">
                    <SkillsCircle/>
                </div>
                <div className="basis-sm md:basis-[408px] pt-0">
                    <p className="hidden md:block md:text-2xl">Hello, I’m {personalDetails.middleName}</p>
                    <p className="text-2xl mx-auto md:mx-0 text-center md:text-left md:text-5xl font-bold mt-8 md:mt-6 text-primary">Software Engineer</p>
                    <p className="mt-1 mx-auto md:mx-0 text-center md:text-justify text-base">I help companies and individuals move their ideas to scalable high quality digital solutions.</p>
                    <div className="flex flex-col md:flex-row justify-between mt-12 md:mt-10 gap-8 md:gap-8">
                        <Button variant={"default"} size={'lg'} className="flex-auto rounded-sm">Download CV</Button>
                        <Button variant="outline" size={'lg'} className="flex-auto rounded-sm border-2 border-primary text-primary">Contact Me</Button>
                    </div>
                </div>
            </HeroContent>
            <ScrollDownIndicator />
        </div>
    );
}