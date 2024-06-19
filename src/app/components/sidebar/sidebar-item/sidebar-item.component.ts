import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent implements OnInit {
  @Input() icon?: string;
  @Input() link?: string;
  @Input() images?: { light: string; dark: string };
  @Input() title?: string;
  @Input() label?: string;

  isDarkMode?: boolean;

  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {
    this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.isDarkMode = e.matches;
    });
  }
}
