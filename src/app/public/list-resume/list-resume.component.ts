import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Iresume } from 'src/app/core/resume/resume.model';
import { LangueService } from 'src/app/services/langue.service';




@Component({
  selector: 'app-list-resume',
  templateUrl: './list-resume.component.html',
  styleUrls: ['./list-resume.component.css']
})
export class ListResumeComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private langueService:LangueService
    ) {
      this.langueService.update$.subscribe(() => {
        this.ngOnInit()
      });
   }
  title1!: string
  title2!: string
  title3!: string
  title4!: string
  title5!: string
  title6!: string
  desc1!: string
  desc2!: string
  desc3!: string
  desc4!: string
  desc5!: string
  desc6!: string
  sub1!: string
  sub2!: string
  sub3!: string
  listResume: Iresume[] = []
  listEtude: Iresume[] = []

  ngOnInit(): void {

    this.translate.get("resumeExp.title1").subscribe((translation: string) => {
      this.title1 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeExp.title2").subscribe((translation: string) => {
      this.title2 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeExp.title3").subscribe((translation: string) => {
      this.title3 = translation;
      this.loadResumeData();
    });
    this.translate.get("resumeEdu.title1").subscribe((translation: string) => {
      this.title4 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeEdu.title2").subscribe((translation: string) => {
      this.title5 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeEdu.title3").subscribe((translation: string) => {
      this.title6 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeExp.desc1").subscribe((translation: string) => {
      this.desc1 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeExp.desc2").subscribe((translation: string) => {
      this.desc2 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeExp.desc3").subscribe((translation: string) => {
      this.desc3 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeEdu.desc1").subscribe((translation: string) => {
      this.desc4 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeEdu.desc2").subscribe((translation: string) => {
      this.desc5 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeEdu.desc3").subscribe((translation: string) => {
      this.desc6 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeEdu.sub1").subscribe((translation: string) => {
      this.sub1 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeEdu.sub2").subscribe((translation: string) => {
      this.sub2 = translation;
      this.loadResumeData();
    });

    this.translate.get("resumeEdu.sub3").subscribe((translation: string) => {
      this.sub3 = translation;
      this.loadResumeData();
    });
  }
  loadResumeData(): void {
    this.listResume = [
      {
        annee: '2023',
        title: this.title1,
        subtitle: "MEAN Stack",
        content: this.desc1
      },
      {
        annee: '2022',
        title: this.title2!,
        subtitle: "PHP",
        content: this.desc2
      },
      {
        annee: '2021',
        title: this.title3!,
        subtitle: "Html,css,js",
        content: this.desc3
      },
    ]
    this.listEtude = [
      {
        annee: '2023',
        title: this.title4,
        subtitle: this.sub1,
        content: this.desc4
      },
      {
        annee: '2010',
        title: this.title5,
        subtitle: this.sub2,
        content: this.desc5
      },
      {
        annee: '2007',
        title: this.title6,
        subtitle: this.sub3,
        content: this.desc6
      },
    ]

  }

}


