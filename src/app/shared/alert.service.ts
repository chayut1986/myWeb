import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }


  success() {
    const Toast = swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1500
    });

    Toast.fire({
      type: 'success',
      title: 'บันทึกข้อมูลเรียบร้อยแล้ว'
    });
  }
  error() {
    const Toast = swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1500
    });

    Toast.fire({
      type: 'error',
      title: 'ไม่พบข้อมูล โปรดตรวจสอบ'
    });

  }
}
