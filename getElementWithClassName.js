var getElementsByClassName = function(className){
  var result = [];
  function classSearch(element) {
    if(_.contains(element.classList, className)) result.push(element);
    _.each(element.childNodes, classSearch);
  }
  classSearch(document);
  return result;
};
