// 面板切换：默认仅显示深色首屏，点击导航后在下方展开对应模块；再次点击收起。
(function () {
  var links = document.querySelectorAll('.nav a[data-panel]');
  var panels = document.querySelectorAll('[data-panel-section]');
  var current = null;

  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle('active', a.dataset.panel === id);
    });
  }

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var id = a.dataset.panel;
      var panel = document.getElementById(id);
      if (!panel) return;

      if (current === id) {
        // 再次点击：收起
        panel.hidden = true;
        current = null;
        setActive(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      panels.forEach(function (p) { p.hidden = p.id !== id; });
      current = id;
      setActive(id);
      requestAnimationFrame(function () {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });
})();
