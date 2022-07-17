import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css'],
})
export class TablaUsuariosComponent implements OnDestroy, OnInit {
  public listaUsuarios: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();

  constructor(private RestService: RestService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json',
      },
    };
    this.cargarData();
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  public cargarData() {
    this.RestService.get(
      'http://capiexamenbackrusselcruz.test/users'
    ).subscribe((respuesta) => {
      console.log('respuesta:', respuesta);
      this.listaUsuarios = respuesta;
      this.dtTrigger.next(respuesta);
    });
  }
}
