import { Component, OnDestroy, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/cargar-script.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{

  constructor(private _CargaScripts:CargarScriptService)
  {
    _CargaScripts.Carga(["pedidos"]);

  }

  ngOnInit(): void {
    
  }
  
}
