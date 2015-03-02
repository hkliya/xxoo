function Xxoo() {
  this.map = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.last = 0;
}

Xxoo.prototype = {
  place: function(x, y) {
    var nextValue = this.getNextValue();
    return this.placeWithValue(x, y, nextValue);
  },

  getNextValue: function() {
    return this.last === 1 ? 2 : 1;
  },

  winner: function() {
    return this.checkWinnerByRow(this.map) || this.checkWinnerByRow(this.fanzhuan(this.map)) ||
      this.checkWinnerByOblique();
  },

  placeWithValue: function(x, y, value) {
    if (this.isEmpty(x, y)) {
      this.map[x][y] = value;
      this.last = value;
      return true;
    }

    return false;
  },

  isEmpty: function(x, y) {
    return this.map[x][y] === 0;
  },

  checkWinnerByRow: function( arr ) {
    var result = false;

    _.find(arr, function(row) {
      result = this.checkOneRow(row);
      return result;
    }, this);

    return result;
  },

  checkWinnerByOblique: function() {
    return this.checkOneRow([this.map[0][0], this.map[1][1], this.map[2][2]]) || this.checkOneRow([this.map[2][0], this.map[1][1], this.map[0][2]]);
  },

  checkOneRow: function(arr) {
    var uniqArr = _.uniq(arr);
    if (uniqArr.length > 1 || uniqArr[0] === 0) {
      return false;
    }

    return uniqArr[0];
  },

  fanzhuan: function(arr) {
    var newarr = [];

    for ( var i = 0; i < arr.length; i++ ) {
      var arow = [];
      for (var j = 0; j < arr[i].length; j++ ) {
        arow[j] = arr[j][i];
      }
      newarr[i] = arow;
    }
    return newarr;
  }
};
