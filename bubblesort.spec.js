describe('Bubble Sort', function(){
  beforeEach(() =>{
    // array has to defined;
    let swapCounter = 0;
    let comparisonCounter = 0;
   });
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  // const tootsiepop = {};
  // tootsiepop.lick = function () {
  //   return 'licked';
  // }
  // tootsiepop.getToCenter = function () {
  //   this.lick();
  //   this.lick();
  //   this.lick();
  //   return 'got to center';
  // };
  beforeAll(function () {
    //spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
    spyOn(window, 'swap').and.callThrough();
  });
  // it('getting to the center of tootsiepop involves exactly three licks', function () {
  //   tootsiepop.getToCenter();
  //   expect(tootsiepop.lick.calls.count()).toEqual(3);
  // });
  
it('invokes swap function 6 times', function() {
    let arr = [6, 12, 8, 2, 9, 5, 10, 11];
    window.bubbleSort(arr);
    expect(swap.calls.count()).toEqual(6);
    //expect(bubbleSort.call.countFunc().toEqual(6));
  })
})

