export default class HttpGateway {
  async get() {
    return Promise.resolve({
      firstName: "Jon",
      lastName: "Smith"
    });
  }
}
