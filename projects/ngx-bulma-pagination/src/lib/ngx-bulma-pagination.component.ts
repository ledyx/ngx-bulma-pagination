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

  private getAverage() {
    return Math.trunc(this.count / 2);
  }

  private getRawStartPage() {
    return this.currentPage - this.getAverage();
  }

  private getRawEndPage() {
    return this.currentPage + this.getAverage() - 1;
  }

  getStartPage() {
    const temp = Math.min(this.getRawStartPage(), this.max - this.count + 1);
    return Math.max(1, temp);
  }

  getEndPage() {
    const temp = Math.max(this.getRawEndPage(), this.count);
    return Math.min(this.max, temp);
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

    this.currentPage = Math.max(1, this.currentPage - this.count);
    this.notifyChangedPage();
  }

  nextSet() {
    if (!this.isActiveNextEllipsis())
      return;

    this.currentPage = Math.min(this.max, this.currentPage + this.count);
    this.notifyChangedPage();
  }

  isActivePreviousEllipsis(): boolean {
    return this.getRawStartPage() > 1;
  }

  isActiveNextEllipsis(): boolean {
    return this.getRawEndPage() < this.max;
  }
}
