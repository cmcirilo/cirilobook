import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExistingUserService } from './existing-user.service';
import { lowercaseValidator } from './lowercase.validator';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { sameUserNameAndPasswordValidator } from './same-username-and-password.validator';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
    newUserForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private newUserService: NewUserService,
        private existingUserService: ExistingUserService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.newUserForm = this.formBuilder.group(
            {
                email: ['', [Validators.required, Validators.email]],
                fullName: ['', [Validators.required, Validators.minLength(4)]],
                userName: [
                    '',
                    [lowercaseValidator],
                    [this.existingUserService.existsAlreadyUser()],
                ],
                password: [''],
            },
            {
                validators: [sameUserNameAndPasswordValidator],
            },
        );
    }

    create() {
        if (this.newUserForm.valid) {
            const newUser = this.newUserForm.getRawValue() as NewUser;
            this.newUserService.create(newUser).subscribe(
                () => this.router.navigate(['']),
                (error) => console.log(error),
            );
        }
    }
}
