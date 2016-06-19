export interface Cursors {
  before: string;
  after: string;
}

export interface Paging {
  cursors: Cursors;
  next: string;
}
