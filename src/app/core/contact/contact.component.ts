import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailGroup!:FormGroup;
  isSending:boolean = false;

  constructor(
    private fb:FormBuilder,
    private toastr: ToastrService
  ){
    emailjs.init('lcznYj37F4q5e0x8N'); 
  }

  ngOnInit(): void {
    this.emailGroup=this.fb.group({
      nom:this.fb.control('',Validators.required),
      email:this.fb.control('',[Validators.required,Validators.email]),
      content:this.fb.control('',Validators.required),
    })
 
  }

  sendEmail() {
   const params = {
      to_email: `${this.emailGroup.value.email}`,
      from_name: `${this.emailGroup.value.nom}`,
      message: `${this.emailGroup.value.content}`,
    };
    this.isSending = true; 
  emailjs.send(`service_72rfzdi`, 'template_o2ak6xt', params)
  .then(() => {
   
    this.toastr.success('Email envoyé avec succés!', 'Merci!');
    this.emailGroup.reset();

  }, (error) => {
    this.toastr.error('Erreur lors de l\'envoi de l\'e-mail', 'Erreur');
  })
  .finally(() => {
    this.isSending = false; 
  }); 
} } 
 



