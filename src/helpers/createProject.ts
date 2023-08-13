import path from "path";
import { scaffoldProject } from "@/helpers/scaffoldProject.js";



interface CreateProjectOptions {
    projectName: string;
}

export const createProject = async ({
    projectName,
}: CreateProjectOptions) => {
    const projectDir = path.resolve(process.cwd(), projectName);


    await scaffoldProject({
        projectName,
        projectDir,
    });



    return projectDir;
};