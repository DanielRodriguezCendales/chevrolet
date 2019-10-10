import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(
    private http : HttpClient
  ) { }
  

  public paises: any = "https://restcountries.eu/rest/v2/"

  abrirMensaje(msg, type)
  {
    let title = "Mensaje";
    if(type == "success")
      title = "¡Excelente!"
    else
      title = "Error en registro"

    Swal.fire(
      title,
      msg,
      type
    );
  }

  public static ABRIR_MENSAJE(msg, type) {
    let title = "Mensaje";
    if (type == "success")
      title = "¡Buen trabajo!"
    else
      title = "Error"

    Swal.fire(
      title,
      msg,
      type
    );
  }

  listar(): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.http.get(this.paises + 'all', {headers : headers}); 
  }


}
