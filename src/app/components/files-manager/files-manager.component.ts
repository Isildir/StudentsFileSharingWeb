import { Component, OnInit } from '@angular/core';
import { FileHandlerService } from 'src/app/services/files-handling/file-handler.service';
import { FileAddModel } from 'src/app/interfaces/file-add-model';

@Component({
  selector: 'app-files-manager',
  templateUrl: './files-manager.component.html',
  styleUrls: ['./files-manager.component.css']
})
export class FilesManagerComponent implements OnInit {

  private addedFiles = Array<FileAddModel>();

  async onFileDropped($event: any[]) {
    await this.prepareFilesList($event);
  }

  constructor(private fileHandlerService: FileHandlerService) {
  }

  async fileBrowseHandler(files: any[]) {
    await this.prepareFilesList(files);
  }

  deleteFile(id: number) {
    //this.files.splice(index, 1);
    //no troche więcej roboty
  }

  async prepareFilesList(files: Array<any>) {
    for (const item of files) {

      const result = await this.fileHandlerService.sendFile(item);

      if (result.id !== undefined) {

        result.uploaded = true;
        result.size = item.size;
      } else {
        result.fileName = item.name;
        result.uploaded = false;
        result.size = item.size;
      }

      this.addedFiles.push(result);
    }

    console.log(this.addedFiles);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals: number) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  ngOnInit() {}
}
