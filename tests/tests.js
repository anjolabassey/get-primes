describe('getPrime()' , function() {
  it("getPrime()should return the correct prime number value of an input", function() {
    expect.getPrime(5)).toBe([2,3,5]);
    });

  it("getPrime()should return the correct prime number value of an input", function() {
    expect.getPrime(10)).toBe([2,3,5,7]);
    });
  
  it("getPrime()should return the correct prime number value of an input", function() {
    expect.getPrime(15)).toBe([2,3,5,7,11,13]);
    });
 
 
  it("getPrime()should return prompt to input another number if input is negative", function() {
    expect.getPrime(-5)).toBe('please input another number');
    });

  it("getPrime()should return prompt to input another number if input is 0", function() {
    expect.getPrime(0)).toBe('please input another number');
    });
 
  it("getPrime()should return prompt to input a number if input is not a number", function() {
    expect.getPrime('hh')).toBe('please input a number');
    });

describe('primer', function()  {
  it('getPrime() should return false', ()  {
    expect(isPrime(0)).toBe(false)
  });

  it('getPrime() should return true', ()  {
    expect(isPrime(2)).toBe(true)
  });
});



   