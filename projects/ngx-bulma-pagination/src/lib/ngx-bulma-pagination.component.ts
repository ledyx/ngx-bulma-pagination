import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Page } from "./page";

@Component({
  selector: 'ngx-bulma-pagination',
  templateUrl: './ngx-bulma-pagination.html',
  styleUrls: ['../../../../node_modules/bulma/css/bulma.min.css']
})
export class NgxBulmaPaginationComponent {

  @Input()
  max: number = 100;

  @Input()
  count: number = 10;

  @Input()
  previous = "<<";

  @Input()
  next = ">>";

  @Input()
  order: string = "is-centered";

  @Input()
  size: string = "is-small";

  @Input()
  isRounded: boolean = false;

  @Input()
  currentPage = 1;

  @Output()
  pageChange = new EventEmitter<Page>();

  getCurrentSet() {
    return Math.trunc((this.currentPage - 1) / this.count) + 1;
  }

  getStartPage() {
    return ((this.getCurrentSet() - 1) * this.count) + 1;
  }

  getEndPage() {
    return Math.min(this.getCurrentSet() * this.count, this.max);
  }

  getPages() {
    const startPage = this.getStartPage();
    const endPage = this.getEndPage();

    const ps = [];
    for (let p = startPage; p <= endPage; p++) {
      ps.push(p);
    }

    return ps;
  }

  getPagiantionClass(): string {
    const style = this.isRounded ? "is-rounded" : "";
    return ["pagination", this.order, this.size, style].join(" ");
  }

  notifyChangedPage() {
    this.pageChange.emit(
      {
        current: this.currentPage,
        start: this.getStartPage(),
        end: this.getEndPage()
      });
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    this.notifyChangedPage();
  }

  previousSet() {
    if (!this.isActivePreviousEllipsis())
      return;

    this.currentPage = ((this.getCurrentSet() - 2) * this.count) + 1;
    this.notifyChangedPage();
  }

  nextSet() {
    if (!this.isActiveNextEllipsis())
      return;

    this.currentPage = ((this.getCurrentSet()) * this.count) + 1;
    this.notifyChangedPage();
  }

  isActivePreviousEllipsis(): boolean {
    return Math.trunc(this.count / this.currentPage) < 1;
  }

  isActiveNextEllipsis(): boolean {
    return this.getCurrentSet() < Math.ceil(this.max / this.count);
  }
}
