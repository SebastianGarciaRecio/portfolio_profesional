import { Component } from '@angular/core';
import { Proyecto } from '../../models/Proyecto';
import { Tecnologia } from '../../models/Tecnologia';
import { VisibleItemsService } from '../../servicies/visible-items-service';


@Component({
  selector: 'app-proyects-list',
  imports: [],
  templateUrl: './proyects-list.component.html',
  styleUrl: './proyects-list.component.css'
})
export class ProyectsListComponent {
  proyectos: Proyecto[] = [
    {
      img: 'proyecto1.png',
      title: 'Lista de Tareas',
      description: 'sitio web donde los usuarios pueden añadir tareas a una lista de tareas y eliminarlas posteriormente',
      github: 'https://github.com/SebastianGarciaRecio/To-DoList',
      view: 'https://sebastiangarciarecio.github.io/To-DoList/',
      tecnologies: [
        { nombre: 'Angular', img: 'angular.svg' },
        { nombre: 'TypeScript', img: 'typescript.svg' },
        { nombre: 'HTML', img: 'html.svg' },
        { nombre: 'CSS', img: 'css.svg' }
      ]
    },
    {
      img: 'proyecto2.png',
      title: 'Librería Digital',
      description: 'Plataforma web que permite a los usuarios registrar, actualizar y eliminar libros de su catálogo personal.',
      github: 'https://github.com/SebastianGarciaRecio/library',
      view: 'https://cart-imagin3d.onrender.com',
      tecnologies: [
        { nombre: 'Angular', img: 'angular.svg' },
        { nombre: 'TypeScript', img: 'typescript.svg' },
        { nombre: 'HTML', img: 'html.svg' },
        { nombre: 'CSS', img: 'css.svg' }
      ]
    },
    {
      img: 'proyecto3.png',
      title: 'Carrito de compra',
      description: 'Plataforma web que permite a los usuarios agregar y visualizar productos de manera intuitiva',
      github: 'https://github.com/SebastianGarciaRecio/carrito',
      view: 'https://cart-imagin3d.onrender.com',
      tecnologies: [
        { nombre: 'NodeJS', img: 'NodeJS.svg' },
        { nombre: 'TypeScript', img: 'typescript.svg' },
        { nombre: 'HTML', img: 'html.svg' },
        { nombre: 'CSS', img: 'css.svg' }
      ]
    },
    {
      img: 'proyecto4.png',
      title: 'Carrito de compra',
      description: 'Plataforma web que permite a los usuarios agregar y visualizar productos de manera intuitiva',
      github: 'https://github.com/SebastianGarciaRecio/test-Piedras',
      view: 'https://cart-imagin3d.onrender.com',
      tecnologies: [
        { nombre: 'NodeJS', img: 'NodeJS.svg' },
        { nombre: 'TypeScript', img: 'typescript.svg' },
        { nombre: 'HTML', img: 'html.svg' },
        { nombre: 'CSS', img: 'css.svg' }
      ]
    },
  ];

  proyectosVisibles = 3;

  constructor(private visibleItemsService: VisibleItemsService) {}

  verMasProyectos() {
    this.proyectosVisibles = this.visibleItemsService.verMasItems(this.proyectosVisibles, 3);
  }

  reiniciarProyectos() {
    this.proyectosVisibles = this.visibleItemsService.reiniciarItems(3);
  }

}
