import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  isActiveRoute(tabRoute: string): boolean {
    return this.router.url === `/admin${tabRoute}`;
  }

  get isAddButtonVisible(): boolean {
    return this.router.url !== `/admin/product/add`;
  }

  onAdd(): void {
    const link = ['/admin/product/add'];
    this.router.navigate(link);
  }
}
