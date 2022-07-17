import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css'],
})
export class TablaUsuariosComponent implements OnInit {
  public listaUsuarios: any = [];

  constructor(private RestService: RestService) {}

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData() {
    this.RestService.get(
      'http://capiexamenbackrusselcruz.test/users'
    ).subscribe((respuesta) => {
      console.log('respuesta:', respuesta);
      this.listaUsuarios = respuesta;
    });
  }
}
