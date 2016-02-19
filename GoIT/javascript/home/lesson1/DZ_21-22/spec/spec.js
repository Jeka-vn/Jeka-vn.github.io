var questions = require('../dist/script.js');

describe("Questions", function() {
  it("an expectation", function() {
  	var res;
  	    res = questions.tm_time;
    expect(res).toBe('Сколько водителю грузовика разрешено проводить врремя за рулем?');
  });
});