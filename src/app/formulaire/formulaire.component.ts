import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators ,FormBuilder} from '@angular/forms'

interface  Utilisateur{
  nom: string;
  prenom: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {



  constructor(private fb: FormBuilder) { }

  formulaire = this.fb.group({
    nom:  ['',Validators.required,Validators.minLength(3),Validators.maxLength(10),],

    prenom: ['',Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z ]*')],

    email: ['',Validators.required,Validators.email],

    age: ['',Validators.required,Validators.min(1),Validators.max(120)]
  })


 //get(){return this.formulaire.controls.value.get('nom')}

  ngOnInit(): void {
  }


  onSubmit(): void{
         console.log(this.formulaire)
  }





}
