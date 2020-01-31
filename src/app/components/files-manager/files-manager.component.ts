import { Component, OnInit } from '@angular/core';
import { FileHandlerService } from 'src/app/services/files-handling/file-handler.service';
import { FileAddModel } from 'src/app/interfaces/file-add-model';
import { FileGetModel } from 'src/app/interfaces/file-get-model';

@Component({
  selector: 'app-files-manager',
  templateUrl: './files-manager.component.html',
  styleUrls: ['./files-manager.component.css']
})
export class FilesManagerComponent implements OnInit {

  private addedFiles = Array<FileAddModel>();
  private fileUploadActive = true;
  private filesToDownload: Array<FileGetModel>;

  async onFileDropped($event: any[]) {
    await this.prepareFilesList($event);
  }

  onFileUploadButtonClick() {
    this.fileUploadActive = true;
  }

  async onFileDownloadButtonClick() {

    this.filesToDownload = await this.fileHandlerService.getFiles();

    this.fileUploadActive = false;
  }

  constructor(private fileHandlerService: FileHandlerService) {
  }

  async fileBrowseHandler(files: any[]) {
    await this.prepareFilesList(files);
  }

  async deleteFile(id: number) {
    const result = await this.fileHandlerService.deleteFile(id);

    if (result) {

      const index: number = this.addedFiles.indexOf(this.addedFiles.find(a => a.id === id), 0);

      if (index > -1) {
        this.addedFiles.splice(index, 1);
      }
    }
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
