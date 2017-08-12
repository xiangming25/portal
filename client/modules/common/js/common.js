;(function() {
  updateTitle();

  function updateTitle() {
    var _href = window.location.href;
    var routeName = _href.split('8080/')[1];
    var titleName = '';
    debugger;
    switch (routeName) {
      case 'users':
        titleName = '个人信息页';
        break;
      default:
        titleName = '首页';
    }
    document.title = titleName;
  }
})();
