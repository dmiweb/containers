export default class ErrorRepository {
  static map = new Map([
    [404, 'Not Found'],
    [500, 'Internal Server Error'],
    [503, 'Service Unavailable']
  ]);

  static translate(code) {
    if (this.map.has(code)) {

      return this.map.get(code);
    } else {

      return 'Unknown error';
    }
  }
}