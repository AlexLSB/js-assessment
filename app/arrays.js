exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var answ = -1;
    for (var i=0; i<arr.length; i++) {
      if (i==item) {
        answ = arr[i];
      }
    };
    return answ;
  },

  sum : function(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
      sum += arr[i];
    };
    return sum;
  },

  remove : function(arr, item) {
    for (var i=0; i<arr.length; i++) {
      if (arr[i]==item){
        arr.splice( i, 1 )
      }
    };
    return arr;

  },

  removeWithoutCopy : function(arr, item) {

    do {
      removed = false;
        for (var i=0; i<arr.length; i++) {
          if (arr[i]==item){
            arr.splice( i, 1 );
            removed = true;
          }
        };
    } while (removed == true);
    return arr;

  },

  append : function(arr, item) {
    arr.splice( arr.length, 0, item );
    return arr;

  },

  truncate : function(arr) {
    arr.splice( -1, 1 );
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice( 0, 0, item );
    return arr;
  },

  curtail : function(arr) {
    arr.splice( 0, 1 );
    return arr;

  },

  concat : function(arr1, arr2) {
    res = arr1.concat(arr2);
    return res;
  },

  insert : function(arr, item, index) {
    arr.splice( index, 0, item );
    return arr;
  },

  count : function(arr, item) {
    var cnt = 0;
    for (var i=0; i<arr.length; i++) {
      if (arr[i]==item){
        cnt += 1;
      }
    };
    return cnt;
  },

  duplicates : function(arr) {

    var dubs = [];
    var cnt = 0;
    for (var j=0; j<arr.length; j++) {
      cnt = 0;
      item = arr[j];
      for (var i=0; i<arr.length; i++) {
        if (arr[i]==item){
          cnt += 1;
        }
      };
      indubs = false;
      for (var i=0; i<dubs.length; i++) {
        if (dubs[i]==item) {
          indubs = true;
        }
      };
      if ((cnt > 1) && !indubs) {
        dubs.push(item);
      };
    };
    return dubs;
  },

  square : function(arr) {
    var sqrs = [];
    for (var i=0; i<arr.length; i++) {
      sqrs.push(arr[i]*arr[i]);
    };
    return sqrs;
  },

  findAllOccurrences : function(arr, target) {
    var occurs = [];
    for (var i=0; i<arr.length; i++) {
      if (arr[i]==target){
        occurs.push(i);
      };
    };
    return occurs;
  }
};
