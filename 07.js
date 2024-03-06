function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let ascendingNumbers = Array.from(
      { length: i },
      (_, index) => index + 1
    ).join("");
    let descendingNumbers = Array.from(
      { length: i - 1 },
      (_, index) => i - index - 1
    ).join("");
    let line = spaces + ascendingNumbers + descendingNumbers;
    console.log(line);
  }

  for (let i = n - 1; i > 0; i--) {
    let spaces = " ".repeat(n - i);
    let ascendingNumbers = Array.from(
      { length: i },
      (_, index) => index + 1
    ).join("");
    let descendingNumbers = Array.from(
      { length: i - 1 },
      (_, index) => i - index - 1
    ).join("");
    let line = spaces + ascendingNumbers + descendingNumbers;
    console.log(line);
  }
}

//////////////////////////////////////

class PaginationUtil {
  constructor(array, itemsPerPage) {
    this.array = array;
    this.itemsPerPage = itemsPerPage;
  }

  pageCount() {
    return Math.ceil(this.array.length / this.itemsPerPage);
  }

  itemCount() {
    return this.array.length;
  }

  pageItemCount(pageIndex) {
    const pageCount = this.pageCount();
    if (pageIndex < 0 || pageIndex >= pageCount) {
      return -1;
    }

    if (pageIndex === pageCount - 1) {
      return this.array.length % this.itemsPerPage || this.itemsPerPage;
    }

    return this.itemsPerPage;
  }

  pageIndex(index) {
    if (index < 0 || index >= this.array.length) {
      return -1;
    }

    return Math.floor(index / this.itemsPerPage);
  }
}
