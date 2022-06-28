// url example: http://test.com/books/id?name=abc
// baseUrl: http://test.com
// path: test.com/books/id
// params: id
// query: name=abc

interface IRequestArgs {
  url: string; // baseUrl + path
  params?: Record<string, string | number>;
  query?: string;
  body?: any;
}
type RequestFn = <TResponse>(args: IRequestArgs) => Promise<TResponse>;

export class OpenapiServiceObj {
  private baseUrl?: string;
  private request?: () => void;

  protected init(baseUrl: string, request: () => void) {
    this.baseUrl = baseUrl;
    this.request = request;
  }

  public listNodes() {
    this.request();
    return 'test ok';
  }
}

export default new OpenapiServiceObj();
