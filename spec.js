describe("xxoo", function() {
  it("can create xxoo game", function() {
    new Xxoo();
  });

  it("can place at empty grid", function() {
    var game = new Xxoo();
    expect(game.isEmpty(0, 0)).toBe(true);
    expect(game.placeWithValue(0, 0, 1)).toBe(true);
    expect(game.isEmpty(0, 0)).toBe(false);
  });

  it("can get next value", function() {
    var game = new Xxoo();
    game.last = 1;
    expect(game.getNextValue()).toBe(2);
    game.last = 2;
    expect(game.getNextValue()).toBe(1);
  });

  it("can place by turn", function() {
    var game = new Xxoo();
    expect(game.place(0, 0)).toBe(true);
    expect(game.place(0, 0)).toBe(false);
    expect(game.last).toBe(1);

    expect(game.place(0, 1)).toBe(true);
    expect(game.place(0, 2)).toBe(true);
    expect(game.place(1, 0)).toBe(true);
    expect(game.map[0][0]).toBe(1);
    expect(game.map[0][1]).toBe(2);
    expect(game.map[0][2]).toBe(1);
    expect(game.map[1][0]).toBe(2);
  });

  it("can not place at not empty grid", function() {
    var game = new Xxoo();
    expect(game.placeWithValue(0, 0, 1)).toBe(true);
    expect(game.placeWithValue(0, 0, 1)).toBe(false);
  });

  it("scan a row is same", function() {
    var game = new Xxoo();
    expect(game.checkOneRow([1,1,1])).toBe(1);
    expect(game.checkOneRow([1,1,2])).toBe(false);
    expect(game.checkOneRow([1,2,1])).toBe(false);
    expect(game.checkOneRow([0, 0, 0])).toBe(false);
  });

  it("can find a winner in row", function() {
    var game = new Xxoo();
    expect(game.placeWithValue(0,0,1)).toBe(true);
    expect(game.placeWithValue(0,1,1)).toBe(true);
    expect(game.placeWithValue(0,2,1)).toBe(true);
    expect(game.winner()).toBe(1);

    game = new Xxoo();
    expect(game.placeWithValue(1,0,1)).toBe(true);
    expect(game.placeWithValue(1,1,1)).toBe(true);
    expect(game.placeWithValue(1,2,1)).toBe(true);
    expect(game.winner()).toBe(1);

    game = new Xxoo();
    expect(game.placeWithValue(0,0,1)).toBe(true);
    expect(game.placeWithValue(0,1,1)).toBe(true);
    expect(game.placeWithValue(0,2,2)).toBe(true);
    expect(game.winner()).toBe(false);
  });

  it("can find a winner in a col", function() {
    var g = new Xxoo();
    expect(g.placeWithValue(0,0,1)).toBe(true);
    expect(g.placeWithValue(1,0,1)).toBe(true);
    expect(g.placeWithValue(2,0,1)).toBe(true);
    expect(g.winner()).toBe(1);
    g = new Xxoo();
    expect(g.placeWithValue(0,1,2)).toBe(true);
    expect(g.placeWithValue(1,1,2)).toBe(true);
    expect(g.placeWithValue(2,1,2)).toBe(true);
    expect(g.winner()).toBe(2);
  });
  it("can find a winner in a oblique line", function() {
    var g = new Xxoo();
    expect(g.placeWithValue(0,0,1)).toBe(true);
    expect(g.placeWithValue(1,1,1)).toBe(true);
    expect(g.placeWithValue(2,2,1)).toBe(true);
    expect(g.winner()).toBe(1);
  });

  it("scan an oblique line is same", function() {
    var g = new Xxoo();
    expect(g.placeWithValue(0,0,1)).toBe(true);
    expect(g.placeWithValue(1,1,1)).toBe(true);
    expect(g.placeWithValue(2,2,1)).toBe(true);
    expect(g.checkWinnerByOblique()).toBe(1);
    g = new Xxoo();
    expect(g.placeWithValue(0,2,2)).toBe(true);
    expect(g.placeWithValue(1,1,2)).toBe(true);
    expect(g.placeWithValue(2,0,2)).toBe(true);
    expect(g.checkWinnerByOblique()).toBe(2);
  });

  it("can fanzhuan a array[2][2]", function() {
    var g = new Xxoo();
    var newarr = g.fanzhuan([[1,2],[3,4]]);
    expect(newarr[0]).toEqual([1,3]);
    expect(newarr[1]).toEqual([2,4]);
  });

  it("can fanzhuan a array[3][3]", function() {
    var g = new Xxoo();
    var newarr = g.fanzhuan([[1, 2, 3],[4, 5, 6], [7, 8, 9]]);
    expect(newarr[0]).toEqual([1,4,7]);
    expect(newarr[1]).toEqual([2,5,8]);
    expect(newarr[2]).toEqual([3,6,9]);
  });
});
