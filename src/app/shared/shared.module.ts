import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThaiDatePipe } from './thai-date.pipe';
import { ShortTimePipe } from './short-time.pipe';

@NgModule({
  declarations: [ThaiDatePipe, ShortTimePipe],
  imports: [
    CommonModule
  ],
  exports: [ThaiDatePipe, ShortTimePipe]
})
export class SharedModule { }
