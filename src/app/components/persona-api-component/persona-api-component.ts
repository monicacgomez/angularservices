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

  ngOnInit(): void {
    // Si devolvemos un observable con la petición, nos suscribimos a su promesa
    this._service.getPersonas().subscribe((response) => {
      console.log ("Leyendo personas")
      this.personas = response;
      this._cdr.detectChanges();
    })
  }
}