import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from "./components/certificate/certificate.component";
import { TecnologiesListComponent } from "./components/tecnologies-list/tecnologies-list.component";
import { ProyectsListComponent } from "./components/proyects-list/proyects-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ExperienceComponent, FooterComponent, CommonModule, CertificateComponent, TecnologiesListComponent, ProyectsListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';


}
