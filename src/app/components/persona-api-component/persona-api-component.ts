import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicesPersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-persona-api-component',
  standalone: false,
  styleUrl: './persona-api-component.css',
  templateUrl: './persona-api-component.html',
})
export class PersonaApiComponent implements OnInit{
  public personas!: Array<Persona>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicesPersonas
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.personas = await this._service.getPersonasAsync();
      this._cdr.detectChanges();  
    }catch(error) {
      console.error("Error en el API", error);
    }
    
    // Si devolvemos un observable con la petición, nos suscribimos a su promesa
    this._service.getPersonas().subscribe({
      next: (response) => {
        this.personas = response;
        this._cdr.detectChanges();
      }, error: (error) => {
        console.error("Error en el API", error);
      }
    })
  }
}