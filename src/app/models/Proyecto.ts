import { Tecnologia } from "./Tecnologia";

export interface Proyecto {
    img: string;
    title: string;
    description: string;
    github: string;
    view: string;
    tecnologies: Tecnologia[];
}