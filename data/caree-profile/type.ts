
export enum ProjectType{
    PERSONAL = "personal",
    PROFESSIONAL = "professional"
}

export type Project = {
    title: string;
    imageUrl: string;
    shortDescription: string;
    longDescription: string;
    techStack: string[];
    problemStatement: string;
    rolePlayed: string;
    keyFeatures: string[];
    results: string[];
    projectType: ProjectType;
    demoUrl?: string;
    repoUrl?: string;
    caseStudyUrl?: string;

}
export type CareaProfile = {
    aboutText: string;
    professionalStatement: string;
    resumeUrl: string;
    careaRole: string;
    projects: Project[];
}