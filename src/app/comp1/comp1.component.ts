import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { faUser, faAddressBook, faCreditCard, faChevronLeft, faChevronRight, faSave, faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmStepper = this.fb.group({

      steps: this.fb.array([

        this.fb.group({
          firstName: ['First Name'],
          lastName: ['Last Name'],
          phone: [null],
          email: ['johndoe@example.com'],
        }),
        this.fb.group({
          addressOne: ['Address One'],
          addressTwo: [null],
          city: ['India'],
          county: [null],
          country: [null],
        }),
        this.fb.group({
          creditCardNo: ['4111 1111 1111 1111'],
          expiryDate: [''],
          cvvCode: [''],
        })

      ])

    });
  }

  isLinear = false;
  isEditable = true;

  frmValues: object = {};

  faPerson = faUser;
  faAddressBook = faAddressBook;
  faCreditCard = faCreditCard;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faSave = faSave;
  faBan = faBan;

  frmStepper !: FormGroup;

  get formArray(): FormGroup {
    return this.frmStepper.get('steps') as FormGroup;
  }

  get formArray0(): FormControl {
    return this.frmStepper.get('steps.0') as FormControl;
  }

  get formArray1(): FormControl {
    return this.frmStepper.get('steps.1') as FormControl;
  }
  get formArray2(): FormControl {
    return this.frmStepper.get('steps.2') as FormControl;
  }

  submit(): void {
    console.log(this.frmStepper.value);
    this.frmValues = this.frmStepper.value;
  }

}
