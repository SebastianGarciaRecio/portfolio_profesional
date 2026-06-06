import { Component } from '@angular/core';
import { Tecnologia } from '../../models/Tecnologia';
import { VisibleItemsService } from '../../servicies/visible-items-service';
@Component({
  selector: 'app-tecnologies-list',
  imports: [],
  templateUrl: './tecnologies-list.component.html',
  styleUrl: './tecnologies-list.component.css'
})
export class TecnologiesListComponent {
  tecnologias: Tecnologia[] = [
    { nombre: 'Angular', img: 'Angular.png' },
    { nombre: 'TypeScript', img: 'Typescript.png' },
    { nombre: 'JavaScript', img: 'javascript.png' },
    {nombre: 'Node.js', img: 'nodeJS.png' },
    { nombre: 'HTML', img: 'HTML.png' },
    { nombre: 'CSS', img: 'CSS.png' },
    { nombre: 'SQL', img: 'SQL.png' },
    { nombre: 'Java', img: 'java8.jpg' },
    { nombre: 'Bootstrap', img: 'Bootstrap.webp' },
    {nombre: 'MySQL', img: 'mysql.gif' },
    {nombre: 'Python', img: 'python.png'},
    { nombre: 'Git', img: 'git.png' },
    {nombre: 'PHP', img: 'php.png' },
    { nombre: 'GitHub', img: 'githubTec.png' },
    {nombre: 'Figma', img: 'FIGMA.avif' },
    {nombre: 'ORACLE', img: 'ORACLE.png' },
    {nombre: 'WordPress', img: 'wordpress.png' },
    {nombre: 'Docker', img: 'docker.png' },
    { nombre: 'Visual Studio Code', img: 'VSCODE.png' },
    
  ];

  constructor(private visibleItemsService: VisibleItemsService) {}

  tecnologiasVisibles = 12;

  mostrarMasTecnologias() {
    this.tecnologiasVisibles = this.visibleItemsService.verMasItems(this.tecnologiasVisibles, 12);
  }

  reiniciarTecnologias() {
    this.tecnologiasVisibles = this.visibleItemsService.reiniciarItems(12);
  }
}
