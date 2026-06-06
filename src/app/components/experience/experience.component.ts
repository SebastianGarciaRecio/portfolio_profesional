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
      descripcion: 'Desarrollo de plataformas web para el seguimiento y análisis de la huella de carbono, orientadas a la visualización de datos ambientales para la toma de decisiones. Diseño de interfaces en Figma e implementación en Angular y TypeScript con una arquitectura modular basada en componentes. Implementación de interfaces responsive con Bootstrap, consumo de APIs REST, creación de dashboards interactivos y aplicación de buenas prácticas de desarrollo para garantizar escalabilidad, rendimiento y mantenibilidad.'
    },
    {
      rol: 'Desarrollador Web Voluntario',
      empresa: 'CIAMI (centro Integral de atencion al migrante) Valladolid',
      fechaInicio: 'Febrero 2026 - Actualidad',
      descripcion: 'Desarrollo de soluciones web para la ONG, incluyendo una aplicación de gestión administrativa para la centralización de datos de solicitantes inmigrantes, implementada con WordPress, PHP, SQL y phpMyAdmin.Implementación de funcionalidades personalizadas mediante shortcodes y gestión del despliegue y mantenimiento del sistema utilizando Plesk. Desarrollo de una plataforma web de búsqueda de empleo para la inserción laboral de personas inmigrantes, implementada con React y TypeScript, basada en una arquitectura modular y consumo de APIs.'
    },
    {
      rol: 'Desarrollador web en practicas',
      empresa: 'Mediasur Group',
      fechaInicio: 'Marzo 2025 - Junio 2025',
      descripcion: 'mantuve aplicaciones web completas, diseñé sistemas de comunicación entre servicios, gestioné versiones de proyectos y participé en el despliegue de aplicaciones. También creé interfaces adaptables, elaboré documentación técnica, optimicé bases de datos e integré herramientas externas, colaborando con el equipo y transformando los requisitos del cliente en soluciones funcionales'
    }



  ];
}
