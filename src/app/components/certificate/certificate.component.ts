import { Component } from '@angular/core';
import { Certificado } from '../../models/Certificado';
import { CommonModule } from '@angular/common';
import { VisibleItemsService } from '../../servicies/visible-items-service';

@Component({
  selector: 'app-certificate',
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {
  certificados: Certificado[] = [
    {
      img: 'cursoBD.png',
      titulo: 'Curso de creación y administración de Bases de Datos SQL',
      entidad: 'Openwebinars',
      descripcion: 'Curso Online donde aprendí sobre la creacion y administración de Base de datos con SQL y XAMPP',
      enlace: 'certificado_curso_de_creación_y_administración_de_bases_de_datos_sql.pdf',
      enlaceTexto: 'Ver certificado'
    },
    {
      img: 'cursoHTMLCSS.png',
      titulo: 'Curso de HTML5 y CSS3',
      entidad: 'Openwebinars',
      descripcion: 'Curso Online donde aprendí sobre la creacion y administración de Base de datos con SQL y XAMPP',
      enlace: 'certificado_curso_de_html5_y_css3.pdf',
      enlaceTexto: 'Ver certificado'
    },
    {
      img: 'UX.png',
      titulo: 'Curso de HTML5 y CSS3',
      entidad: 'Openwebinars',
      descripcion: 'Curso Online donde aprendí sobre como ofrecer una experiencia adecuada al usuario',
      enlace: 'certificado_curso_de_html5_y_css3.pdf',
      enlaceTexto: 'Ver certificado'
    },
    {
      img: 'UI.png',
      titulo: 'Curso UI',
      entidad: 'Openwebinars',
      descripcion: 'Curso Online donde aprendí sobre como ofrecer una experiencia adecuada al usuario',
      enlace: 'certificado_curso_de_introducción_al_diseño_de_interfaz_de_usuarios_(ui).pdf',
      enlaceTexto: 'Ver certificado'
    }
  ];

  constructor(private visibleItemsService: VisibleItemsService) {}

  certificadosVisibles = 1;

  mostrarMasCertificados() {
    this.certificadosVisibles = this.visibleItemsService.verMasItems(this.certificadosVisibles, 2);
  }

  reiniciarCertificados() {
    this.certificadosVisibles = this.visibleItemsService.reiniciarItems(1);
  }

  
}
