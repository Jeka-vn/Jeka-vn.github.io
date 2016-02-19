
var app = require('../dist/script.js');


describe("A suite", function() {
  it("contains spec with an expectation", function() {
  	var result;
  	result = app.sayHello('vasja');
    expect(result).toBe('Hello, vasja');
  });
});