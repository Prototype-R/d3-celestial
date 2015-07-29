//Thanks to stackoverflow user jshanley for the custom symbol class
var customSymbolTypes = d3.map({
  'ellipse': function(size) {
    var s = Math.sqrt(size), 
        rx = s*0.666, ry = s/3;
    return 'M' + (-rx) + ',' + (-ry) +
    ' m' + (-rx) + ',0' +
    ' a' + rx + ',' + ry + ' 0 1,0' + (rx * 2) + ',0' +
    ' a' + rx + ',' + ry + ' 0 1,0' + (-(rx * 2)) + ',0';
  },
  'marker': function(size) {
    var s =  size > 48 ? size / 4 : 12,
        r = s/2, l = r-3;
    return 'M ' + (-r) + ' 0 h ' + l + 
           ' M 0 ' + (-r) + ' v ' + l + 
           ' M ' + r + ' 0 h ' + (-l) +  
           ' M 0 ' + r + ' v ' + (-l);
  },
  'cross-circle': function(size) {
    var s = Math.sqrt(size), 
        r = s/2;
    return 'M' + (-r) + ',' + (-r) +
    ' m' + (-r) + ',0' +
    ' a' + r + ',' + r + ' 0 1,0' + (r * 2) + ',0' +
    ' a' + r + ',' + r + ' 0 1,0' + (-(r * 2)) + ',0' +
    ' M' + (-r) + ' 0 h ' + (s) + 
    ' M 0 ' + (-r) + ' v ' + (s);
        
  },
  'stroke-circle': function(size) {
    var s = Math.sqrt(size), 
        r = s/2;
    return 'M' + (-r) + ',' + (-r) +
    ' m' + (-r) + ',0' +
    ' a' + r + ',' + r + ' 0 1,0' + (r * 2) + ',0' +
    ' a' + r + ',' + r + ' 0 1,0' + (-(r * 2)) + ',0' +
    ' M' + (-s-2) + ',' + (-s-2) + ' l' + (s+4) + ',' + (s+4);

  } 
});

d3.svg.customSymbol = function() {
  var type, size = 64;
  
  function symbol(d,i) {
    return customSymbolTypes.get(type.call(this,d,i))(size.call(this,d,i));
  }
  symbol.type = function(_) {
    if (!arguments.length) return type; 
    type = d3.functor(_);
    return symbol;
  };
  symbol.size = function(_) {
    if (!arguments.length) return size; 
    size = d3.functor(_);
    return symbol;
  };
  return symbol;
};


