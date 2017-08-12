;(function() {
  var routeTitleMap = {
    users: '个人信息页',
  };
  updateTitle();

  /**
   * 根据当前的路由，配置需要显示的title
   * @return {[type]} [description]
   */
  function updateTitle() {
    var _href = window.location.href;
    var routeName = _href.split('8080/')[1];
    var title = routeTitleMap[routeName] || '首页';
    document.title = title;
  }
})();
