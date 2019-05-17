import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from 'src/app/admin/user.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.css']
})
export class UserTypesComponent implements OnInit {

  @Input() selectUserTypeId: any;

  @Output() onSelected: EventEmitter = new EventEmitter;

  userTypeId: any;
  userType: any = [];


  constructor(private userService: UserService) { }

  async ngOnInit() {
    await this.getUserType();
  }


  async getUserType() {
    try {
      let rs: any = await this.userService.getUserTypes();
      if (rs.ok) {

        this.userType = rs.rows;
        console.log(rs.rows);
      } else {
        console.log(rs.error);
      }


    } catch (error) {
      console.error(error);
    }
  }

}
