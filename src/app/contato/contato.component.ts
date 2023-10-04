import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formContato = this.formBuilder.group({
    nome: ['', [Validators.minLength(4), Validators.required]],
    assunto: ['', [Validators.required, Validators.minLength(10)]],
    telefone: [
      '',
      [Validators.minLength(10), Validators.maxLength(11), Validators.required],
    ],
    email: ['', [Validators.email, Validators.required]],
    texto: [
      '',
      [
        Validators.minLength(30),
        Validators.maxLength(350),
        Validators.required,
      ],
    ],
  });

  salvarContatop() {
    this.formContato.reset();
    alert('As informações foram envidas com sucesso!');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
