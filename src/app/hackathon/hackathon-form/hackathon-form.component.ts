import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HackathonService } from 'src/Shared/services/hackathon.services';
import { MatDialog } from '@angular/material';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-hackathon-form',
  templateUrl: './hackathon-form.component.html',
  styleUrls: ['./hackathon-form.component.scss']
})
export class HackathonFormComponent implements OnInit {

  finalObj = {
    'startupName': '',
    'founderName': '',
    'email': '',
    'phone': '',
    'website': '',
    'answers': []
  }

  q1 = 'When was your startup/organization founded?';
  q2 = 'What is the total human resource strength of your startup/organization';
  q3 = 'Have you ever worked in the fintech space before, if yes then with which organization?';
  q4 = 'How do you define a Fintech';
  q5 = 'Do you have experience in working with Open APIs?';
  q6 = 'What do you intend to achieve out of participating in this hackathon';
  q7 = 'What inspired you to setup your own startup?';


  qFormGroup;
  constructor(private formBuilder: FormBuilder, private hackathonService: HackathonService, public dialog: MatDialog) {
    this.qFormGroup = formBuilder.group({
      startupName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      founderName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      website: ['', [Validators.required]],
      a1: ['', [Validators.required, Validators.minLength(4)]],
      a2: ['', [Validators.required]],
      a3: ['', [Validators.required, Validators.minLength(2)]],

      a4: ['', [Validators.required, Validators.minLength(5)]],
      a5: ['', [Validators.required, Validators.minLength(2)]],
      a6: ['', [Validators.required, Validators.minLength(5)]],

      a7: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit() {
  }

  formSubmit() {
    this.finalObj.startupName = this.qFormGroup.get('startupName').value;
    this.finalObj.founderName = this.qFormGroup.get('founderName').value;
    this.finalObj.email = this.qFormGroup.get('email').value;
    this.finalObj.phone = this.qFormGroup.get('phone').value;
    this.finalObj.website = this.qFormGroup.get('website').value;
    const a = {};
    a[this.q1] = this.qFormGroup.get('a1').value;
    this.finalObj.answers.push(a);
    const z = {};
    z[this.q2] = this.qFormGroup.get('a2').value;
    this.finalObj.answers.push(z);
    const b = {};
    b[this.q3] = this.qFormGroup.get('a3').value;
    this.finalObj.answers.push(b);
    const c = {};
    c[this.q4] = this.qFormGroup.get('a4').value;
    this.finalObj.answers.push(c);
    const d = {};
    d[this.q5] = this.qFormGroup.get('a5').value;
    this.finalObj.answers.push(d);
    const e = {};
    e[this.q6] = this.qFormGroup.get('a6').value;
    this.finalObj.answers.push(e);

    const f = {};
    f[this.q7] = this.qFormGroup.get('a7').value;
    this.finalObj.answers.push(f);


    console.log('form value', this.qFormGroup.value)
    console.log('final obj', this.finalObj)

    this.hackathonService.postHackathonsQs(this.finalObj).subscribe(res => {
      console.log('server res', res)
    }, err => {
      console.log(err)
    })
    this.qFormGroup.reset();
    Swal.fire(
      'Done!',
      'Form Submitted Successfully, Keep checking your email',
      'success'
    )


  }

}
