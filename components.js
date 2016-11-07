riot.tag2('hamburger', '<a class="glyphicon glyphicon-menu-hamburger navbar-brand" onclick="{toggle}"></a>', '', '', function(opts) {

  this.toggle = function() {
    this.opts.bus.trigger('toggleSidebar')
  }.bind(this)

});


riot.tag2('navbar', '<nav class="navbar navbar-default navbar-static-top"><div class="navbar-header"><hamburger bus="{opts.bus}"></hamburger><a class="navbar-brand">{opts.title}</a></div></nav>', '.navbar {margin-bottom: 0px;}', '', function(opts) {
});

riot.tag2('page-container', '<div id="wrapper" class="{toggled: this.done}"><sidebar data="{sidebarData}" sidebarevents="{sidebarevents}"></sidebar><page data="{pageData}" sidebarevents="{sidebarevents}"><div id="page-content"></div></page></div>', '', '', function(opts) {

  this.sidebarevents = riot.observable();
  this.pageData = opts.pageData;
  this.sidebarData = opts.sidebarData;

  var self = this

  self.opts.bus.on('toggleSidebar', function(toggle) {
    self.done = !self.done;
    self.update()
  })

  self.currentView = null

  this.loadView = function(viewName) {
    if (self.currentView) {
      self.currentView.unmount(true)
    }

    console.log(viewName)
    console.log(self.pageData.tableData)
    self.currentView = riot.mount('div#page-content', viewName, self.pageData.tableData)[0]
    console.log(self.currentView)
  }.bind(this)

  this.studyRoute = function(view) {
    self.loadView('rs-table')
  }.bind(this)

  riot.route(self.studyRoute)

  self.on('mount', function() {
    riot.route.start(true)
  })

});

riot.tag2('page', '<div id="page-content-wrapper"><yield></yield></div>', '', '', function(opts) {

  var self = this

  self.opts.sidebarevents.on('routeTo', function(event, url) {
    console.log("supposedly triggered a mount");
  })
});

riot.tag2('table-page', '<h3> {title} </h3><rs-table data="{tableData}" bordered="true" striped="true"></rs-table>', '', '', function(opts) {

  this.title = this.parent.opts.data.title
  this.tableData = this.parent.opts.data.tableData
});

riot.tag2('sidebar-element', '<li onclick="{routeTo}"><i if="{icon_class}" class="{icon_class}"></i><a>{text}</a></li>', '', '', function(opts) {

  this.routeTo = function(e) {
    this.parent.sidebarevents.trigger('routeTo', {url: this.url})
  }.bind(this)
});
	

riot.tag2('sidebar', '<div id="sidebar-wrapper"><ul class="sidebar-nav"><sidebar-element each="{items}" data="{this}"></sidebar-element></ul></div>', '', '', function(opts) {

  this.sidebarevents = opts.sidebarevents
  this.items = opts.data

});



riot.tag2('rs-table', '<div class="col-md-7"><table class="table {table-bordered: opts.bordered || true, table-striped: opts.striped || true}"><thead riot-tag="rs-thead" headers="{headers}"></thead><tbody riot-tag="rs-tbody" rows="{rows}"></tbody></table></div>', '', '', function(opts) {

  this.headers = opts.headers
  this.rows = opts.rows

});




riot.tag2('rs-thead', '<tr><th each="{header in opts.headers}">{header}</th></tr>', '', '', function(opts) {
});

riot.tag2('rs-tbody', '<tr each="{row in opts.rows}"><td each="{item in row}">{item}</td></tr>', '', '', function(opts) {
});
