import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

import { ApiCallerService } from '../api-caller.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = ''
  email: string = ''
  subject: string = ''
  message: string = ''
  fileslists: any[] = []


  constructor(private http: ApiCallerService, private recaptchaV3Service: ReCaptchaV3Service) { }

  public Submit(contactForm: NgForm): void {
    let body: any = { name: this.name, email: this.email, subject: this.subject, message: this.message }
    this.recaptchaV3Service.execute('importantAction')
      .subscribe({
        next: (token: string) => {
          body['token'] = token
          body['attachments'] = this.fileslists
          const body_json = JSON.stringify(body)
          this.http.send(body_json).subscribe({
            error: (err) => {
              (document.getElementById('submitBtn') as HTMLElement).style.border = '3px solid #a94442';
            },
            complete: () => {
              (document.getElementById('submitBtn') as HTMLElement).style.border = '3px solid #42A948'
              contactForm.reset()
              this.fileslists = []
            }
          }
          );
        },
        error: (err) => {
          (document.getElementById('submitBtn') as HTMLElement).style.border = '3px solid #a94442';
        }
      });
  }

  uploadfile(event: any) {
    let fileslist: FileList = event.target.files;
    let dataUrls: any[] = [];

    function readAndPreview(file: any) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          dataUrls.push({ filename: file.name, path: this.result });
        },
        false
      );
      reader.readAsDataURL(file);
    }

    if (fileslist) {
      for (let i = 0; i < fileslist.length; i++) {
        readAndPreview(fileslist[i]);
      }
      this.fileslists = dataUrls
    }
  }
}