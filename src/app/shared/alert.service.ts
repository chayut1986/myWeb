import { Injectable } from '@angular/core';
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success() {
    swal.fire({
      title: 'Success',
      text: 'ดำเนินการเสร็จเรียบร้อยแล้ว',
      type: 'success',
      timer: 1500
    });
  }

  error() {
    swal.fire({
      title: 'Error!',
      text: 'มีข้อผิดพลาด',
      type: 'error',
      confirmButtonText: 'Ok'
    });
  }




  confirm() {
    return swal.fire({

      width: 500,
      title: 'คุณแน่ใจ?',
      text: "ที่จะดำเนินการ!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก'
    });

  }

}
