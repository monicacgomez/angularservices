import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit {
  public arrayCoches!: Array<Coche>;
  
  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceCoches
  ) {}

  async ngOnInit(): Promise<void> {
    this.arrayCoches = await this._service.getCochesAsync();
    this._cdr.detectChanges(); 
  }
}
