import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDarkMode!: boolean;

  theme!: string;
  constructor(
    private themeService: ThemeService,
    private router: Router
    ) { }


  ngOnInit(): void {

    this.themeService.initTheme()
    if (localStorage.getItem('theme')) {
      this.isDarkMode = localStorage.getItem("theme") === "dark";
      this.theme != localStorage.getItem('theme')
    } else {
      this.isDarkMode = false;
      this.theme = this.themeService.initTheme()
      localStorage.setItem('theme', 'light')

    }
    const textElement = document.querySelector(".element");
    const textStrings = ["Bassem", "fullStack developer"];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
      const currentString = textStrings[textIndex];

      if (charIndex < currentString.length) {
        textElement!.textContent += currentString.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 80);
      } else {
        setTimeout(eraseText, 500);
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        textElement!.textContent = textElement!.textContent!.slice(0, -1);
        charIndex--;
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % textStrings.length;
        setTimeout(typeText, 500);
      }
    }
    typeText();
  }
  handleMode() {
    if (this.theme === 'dark') {
      this.themeService.setTheme('light')
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('theme', 'light');
      this.theme = this.themeService.initTheme()
    } else {
      this.themeService.setTheme('dark');
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('theme', 'dark');
      this.theme = this.themeService.initTheme()
    }
  }

  scrollToSection(sectionId: string): void {
    
    this.router.navigate(['/' + sectionId]);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  add(event:any){
    event.target.classList.toggle('active')
    document.getElementById('menu')?.classList.toggle("hidden")
    

  }

}
