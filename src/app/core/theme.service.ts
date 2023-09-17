import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  setTheme(theme: string): void {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  
    
  }
  initTheme():string{
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.classList.add(currentTheme);
      return currentTheme
      
     
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    
      document.documentElement.classList.add('dark');
      return 'dark'
    }else return 'light'
  

  }

}
