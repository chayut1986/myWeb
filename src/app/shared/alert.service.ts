import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }


  success() {
    const Toast = Swal.mixin({
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


  removeSuccess() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1500
    });

    Toast.fire({
      type: 'success',
      title: 'ลบข้อมูลเรียบร้อยแล้ว'
    });
  }

  updateSuccess() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1500
    });

    Toast.fire({
      type: 'success',
      title: 'แก้ไขข้อมูลเรียบร้อยแล้ว'
    });
  }

  error() {
    const Toast = Swal.mixin({
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

  confirm() {
    return Swal.fire({
      title: 'คุณต้องการ?',
      text: "ลบรายการนี้ใช่หรือไม่!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่!',
      cancelButtonText: 'ไม่ใช่'

    });
  }






}
