import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.component.html',
  styleUrls: ['./farmacias.component.css']
})


export class FarmaciasComponent  implements OnInit {

  constructor(public api:ApiService){ }

  ngOnInit(): void {
      var response = this.api.getall("Farmacias")
      console.log(response);

   }
}