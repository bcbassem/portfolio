import { Component,OnInit} from '@angular/core';
import { ThemeService } from './core/theme.service';
import {TranslateService} from "@ngx-translate/core";
import { LangueService } from './services/langue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(
    private themeService:ThemeService,
    private translate: TranslateService,
    private langueService:LangueService
    ){
    }

  ngOnInit(): void {
    this.themeService.initTheme()
    const browserLang = this.translate.getBrowserLang();
    console.log(this.translate.getLangs())
    if (this.translate.getLangs().includes(browserLang!)) {
      this.translate.setDefaultLang(browserLang!);
    } else {
      this.translate.setDefaultLang('en');
    }
    
  }

  switchLang(lang:string){
    this.translate.use(lang)
    this.langueService.update()

  }
}
