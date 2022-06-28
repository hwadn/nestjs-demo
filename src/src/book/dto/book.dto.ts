class BookWriter {
  name: string;
  email: string;
  phoneNumber: string;
}

enum BookType {
  ANIMAINAL = 'animail',
  PEOPLE = 'people',
}

export class Book {
  name: string;
  createTime: number;
  type: BookType;
  writers: BookWriter[];
}

export class ListBooksResponse {
  items: Book[];
  total: number;
}
export class ListBooksQuery {
  offset: number;
  limit: number;
}

export class GetBookResponse extends Book {}
export class GetBookParams {
  id: string;
}

export class CreateBookBody {
  name: string;
  createTime: number;
}

export class UpdateBookBody extends CreateBookBody {}
export class PublishBookBody extends CreateBookBody {}
