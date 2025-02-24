import { CommonModule } from "@angular/common";
import { Component, output, input } from "@angular/core";

@Component({
  selector: "app-paginator",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./paginator.component.html",
  styleUrl: "./paginator.component.scss",
})
export class PaginatorComponent {
  totalItems = input<number>(0);
  itemsPerPage = input<number>(10);
  currentPage = input<number>(1);
  pageChanged = output<{ pageIndex: number, pageSize: number }>();

  get totalPages() {
    return Math.ceil(this.totalItems() / this.itemsPerPage());
  }

  getPages(): (number | string)[] {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (this.totalPages <= maxVisiblePages) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    const startPage = Math.max(2, this.currentPage() - 1);
    const endPage = Math.min(this.totalPages - 1, this.currentPage() + 1);

    pages.push(1);
    if (startPage > 2) pages.push("...");
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (endPage < this.totalPages - 1) pages.push("...");
    pages.push(this.totalPages);

    return pages;
  }

  changePage(page: number | string) {
    if (typeof page === "number" && page !== this.currentPage()) {
      this.pageChanged.emit({
        pageIndex: page - 1,
        pageSize: this.itemsPerPage()
      });
    }
  }
}
