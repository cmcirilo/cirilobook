import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NewUserService } from './new-user.service';

@Injectable({
    providedIn: 'root',
})
export class ExistingUserService {
    constructor(private newUserService: NewUserService) {}

    existsAlreadyUser() {
        return (control: AbstractControl) => {
            return control.valueChanges.pipe(
                switchMap((userName) =>
                    this.newUserService.verifyExistingUser(userName),
                ),
                map((alreadyUser) =>
                    alreadyUser ? { alreadyUser: true } : null,
                ),
                first(),
            );
        };
    }
}
