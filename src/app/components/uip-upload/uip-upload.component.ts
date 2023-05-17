import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uip-upload',
  templateUrl: './uip-upload.component.html',
  styleUrls: ['./uip-upload.component.scss']
})
export class UipUploadComponent implements OnInit {
  flows = [{
    name:'EFD',
    status: 'success'
  },
  {
    name:'EH',
    status: 'success'
  },
  {
    name:'RSM',
    status: 'success'
  },
  {
    name:'EH',
    status: 'success'
  },
  {
    name:'UIP',
    status: 'success'
  }];
  files: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }



  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(event: any) {
    const files = event.target.files;
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: any, decimals?: any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
