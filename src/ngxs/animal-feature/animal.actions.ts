export interface Animal {
  name: string;
  feed: boolean;
}

export class AddAnimal {
  static readonly type = 'Add Animal';
  constructor(public hero: Omit<Animal, 'id'>) {}
}
export class UpdateAnimal {
  static readonly type = 'Update Animal';
  constructor(public hero: Animal) {}
}
export class DeleteAnimal {
  static readonly type = 'Delete Animal';
  constructor(public hero: Pick<Animal, 'id'>) {}
}
export class FetchAnimal {
  static readonly type = 'Fetch Animal';
}
export class SearchAnimal {
  static readonly type = 'Search Animal';
  constructor(public term: string) {}
}
