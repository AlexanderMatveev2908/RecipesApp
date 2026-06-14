import { SvgAdvAppLogo } from '@/common/components/svgs/advanced/app_logo/app-logo';
import { SvgAdvBurger } from '@/common/components/svgs/advanced/burger/burger';
import { RefDomT } from '@/common/types/dom';
import { Optional, SvgT } from '@/common/types/general';
import { UseNavSvc } from '@/core/services/use_nav';
import { NgClass, NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgComponentOutlet, RouterLink, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  public readonly SvgLogo: SvgT = SvgAdvAppLogo;
  public readonly SvgBurger: SvgT = SvgAdvBurger;

  private readonly useNav: UseNavSvc = inject(UseNavSvc);

  public readonly isDrop: WritableSignal<boolean> = signal(false);

  public toggleDrop(): void {
    this.isDrop.set(!this.isDrop());
  }

  public isCurrPath(path: string): boolean {
    return this.useNav.currPath() === path;
  }

  public readonly linksDesktop = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Recipes',
      path: '/recipes',
    },
  ];

  @ViewChild('btnRef')
  public readonly BtnRef: RefDomT;
  @ViewChild('dropRef')
  public readonly DropRef: RefDomT;

  @HostListener('document:click', ['$event'])
  public closeDropOnClickOut(event: MouseEvent): void {
    const target: Node = event.target as Node;

    const clickedBtn: Optional<boolean> = this.BtnRef?.nativeElement.contains(target);
    const clickedDrop: Optional<boolean> = this.DropRef?.nativeElement.contains(target);

    if (!clickedBtn && !clickedDrop) {
      this.isDrop.set(false);
    }
  }
}
