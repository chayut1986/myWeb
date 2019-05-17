import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypesComponent } from './user-types/user-types.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { UserService } from '../admin/user.service';

@NgModule({
  declarations: [UserTypesComponent],
  imports: [
    CommonModule, FormsModule, ClarityModule
  ],
  providers: [UserService],
  exports: [UserTypesComponent]
})
export class DirectivesModule { }
