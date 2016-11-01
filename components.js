riot.tag2('hamburger', '<a class="glyphicon glyphicon-menu-hamburger navbar-brand" onclick="{toggle}"></a>', '', '', function(opts) {

  this.toggle = function() {
    this.opts.bus.trigger('toggleSidebar')
  }.bind(this)

});


riot.tag2('navbar', '<nav class="navbar navbar-default navbar-static-top"><div class="navbar-header"><hamburger bus="{opts.bus}"></hamburger><a class="navbar-brand">{opts.title}</a></div></nav>', '.navbar {margin-bottom: 0px;}', '', function(opts) {
});

riot.tag2('page-container', '<div id="wrapper" class="{toggled: this.done}"><sidebar data="{sidebarData}"></sidebar><page data="{pageData}"></page></div>', '', '', function(opts) {

  this.pageData = opts.pageData;
  this.sidebarData = opts.sidebarData;

  var self = this
  self.opts.bus.on('toggleSidebar', function(toggle) {
    self.done = !self.done;
    self.update()
  })

});

riot.tag2('page', '<div id="page-content-wrapper"><h3> {opts.data.title} </h3><rs-table data="{tableData}" bordered="true" striped="true"></rs-table></div>', '', '', function(opts) {

  this.tableData = opts.data.tableData
});

riot.tag2('sidebar-element', '<li><i if="{icon_class}" class="{icon_class}"></i><a href="{url}">{text}</a></li>', '', '', function(opts) {
});
	

riot.tag2('sidebar', '<div id="sidebar-wrapper"><ul class="sidebar-nav"><sidebar-element each="{items}" data="{this}"></sidebar-element></ul></div>', '', '', function(opts) {

  this.items = opts.data

});




riot.tag2('rs-table', '<div class="col-md-7"><table class="table {table-bordered: opts.bordered, table-striped: opts.striped}"><thead riot-tag="rs-thead" headers="{headers}"></thead><tbody riot-tag="rs-tbody" rows="{rows}"></tbody></table></div>', '', '', function(opts) {

  this.headers = opts.data.headers
  this.rows = opts.data.rows

});






riot.tag2('rs-thead', '<tr><th each="{header in opts.headers}">{header}</th></tr>', '', '', function(opts) {
});

riot.tag2('rs-tbody', '<tr each="{row in opts.rows}"><td each="{item in row}">{item}</td></tr>', '', '', function(opts) {
});
  
