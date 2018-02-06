'use strict';

/*
var model = Model({
  resourceName: '表名'
})
*/
window.Model = function (options) {
  var resourceName = options.resourceName;
  return {
    init: function init() {
      var APP_ID = 'TsDnap9SEXjSvGSowP7gXXJC-gzGzoHsz';
      var APP_KEY = 'rGye31p12mM3wFpNRn9RADu9';
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    fetch: function fetch() {
      var query = new AV.Query(resourceName);
      return query.find(); // Promise 对象
    },
    save: function save(object) {
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object);
    }
  };
};