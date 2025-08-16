import { CareaProfile, Project, ProjectType } from "./type";


export function getCareaProfile(): CareaProfile{
    const project: Project = {
        title: "Deal Finder App",
        shortDescription: "A website that helps you find best deal for a product on popular e-commerce stores like Jumia, Amazon, etc.",
        longDescription: "A website that helps you find best deal for a product on popular e-commerce stores like Jumia, Amazon, etc.",
        imageUrl: "https://dummyimage.com/770x790/e5e5e5/fff.png&text=dummy+project",
        techStack: ["React","NestJs", "PostgresSql"],
        projectType: ProjectType.PERSONAL,
        problemStatement: "Utility companies struggled with manual billing, leading to delayed payments and 80% more errors during invoice reconciliation.",
        keyFeatures: [
            "✅ Multi-tenant billing with role-based access control",
            "✅ Real-time consumption tracking & analytics dashboard",
            "✅ Automated invoice generation and email notifications",
            "✅ CI/CD pipeline on AWS with zero-downtime deployments"
        ],
        rolePlayed: "I designed the backend microservices architecture, built secure REST APIs with Nest.js, integrated PostgreSQL for multi-tenant support, and optimized queries for high-volume billing.",
        results: [
            "📈 Reduced billing errors by 80%",
            "📊 Scaled to 50K+ monthly invoices without performance degradation",
            "🚀 Improved API response times by 30%, cutting invoice generation time from 10s → 3s"
        ],
        repoUrl: "https://github.com/Kingsley31/my-portfolio-frontend",
        demoUrl: "https://my-portfolio-frontend-mu.vercel.app/",
        caseStudyUrl: "https://github.com/Kingsley31/my-portfolio-frontend/blob/main/README.md"

    };
    const projects: Project[] = Array.from([1,2,3,4]).map<Project>((i) => ({...project,title:project.title+i }));
    return {
        aboutText:"Kingsley specializes on helping companies and individuals with moving their ideas to a quality digital solution. He is currently working remotely for TechGrata LTD, a tech company in Lagos Nigeria where he serves as their senior software engineer and has helped the company to develop their truck/ride hailing flagship product called Olage which was built with Flutter for the mobile app and Node Js for the backend and website.",
        professionalStatement: 'I help companies and individuals move their ideas to scalable high quality digital solutions.',
        resumeUrl: 'https://drive.google.com/file/d/1p9JFhTCez08xQE_c-IMEIuhWN_yIWqAO/view?usp=sharing',
        careaRole: 'Software Engineer',
        projects,
    } as CareaProfile;
}