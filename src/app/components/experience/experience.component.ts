import { Component } from '@angular/core';
import { Experiencia } from '../../models/Experiencia';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiencias: Experiencia[] = [
    {
      rol: 'Desarrollador Web Voluntario',
      empresa: 'Asociación Huella de Carbonoo',
      fechaInicio: 'Marzo 2026 - Actualidad',
      descripcion: 'Desarrollo de un sitio web para la asociación utilizando WordPress. Gestión de contenido y mantenimiento del sitio.'
    },
    {
      rol: 'Desarrollador Web Voluntario',
      empresa: 'CIAMI (centro Integral de atencion al migrante) Valladolid',
      fechaInicio: 'Febrero 2026 - Actualidad',
      descripcion: 'Creación de interfaces con HTML, CSS, JavaScript y React.Optimización de rendimiento y accesibilidad.'
    },
    {
      rol: 'Desarrollador web en practicas',
      empresa: 'Mediasur Group',
      fechaInicio: 'Marzo 2025 - Junio 2025',
      descripcion: 'mantuve aplicaciones web completas, diseñé sistemas de comunicación entre servicios, gestioné versiones de proyectos y participé en el despliegue de aplicaciones. También creé interfaces adaptables, elaboré documentación técnica, optimicé bases de datos e integré herramientas externas, colaborando con el equipo y transformando los requisitos del cliente en soluciones funcionales'
    }



  ];
}
