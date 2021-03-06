import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cubo-ui',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
  template: `
    <header class="header" role="banner">
      <a class="header__logo" routerLink="/" role="logo">
        cubo<span class="header__logo--color-1">u</span><span class="header__logo--color-2">i</span>
      </a>
    </header>
    <main class="main" role="main">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent { }
