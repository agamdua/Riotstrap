riot.tag2('hamburger', '<a class="glyphicon glyphicon-menu-hamburger navbar-brand" onclick="{toggle}"></a>', '', '', function(opts) {

	this.toggle = function() {
		this.opts.bus.trigger('toggleSidebar')
	}.bind(this)

});


riot.tag2('navbar', '<nav class="navbar navbar-default navbar-static-top"> <div class="navbar-header"> <hamburger bus="{opts.bus}"></hamburger> <a class="navbar-brand">{opts.title}</a> </div> </nav>', '.navbar {margin-bottom: 0px;}', '', function(opts) {
});

riot.tag2('page-container', '<div id="wrapper" class="{toggled: this.done}"> <sidebar></sidebar> <page></page> </div>', '', '', function(opts) {

	var self = this
	self.opts.bus.on('toggleSidebar', function(toggle) {
			self.done = !self.done;
			self.update()
		})
});

riot.tag2('page', '<div id="page-content-wrapper"> <h1> What up yo! </h1> </div>', '', '', function(opts) {
});

riot.tag2('sidebar-element', '<li> <i if="{icon_class}" class="{icon_class}"></i> <a href="{url}">{text}</a> </li>', '', '', function(opts) {
});
	

riot.tag2('sidebar', '<div id="sidebar-wrapper"> <ul class="sidebar-nav"> <sidebar-element each="{items}" data="{this}"> </sidebar-element> </ul> </div>', '', '', function(opts) {

  this.items = [
    {url: "#", text: "Item 1" },
    {url: "#", text: "Item 2" },
    {url: "#", text: "Item 3" },
  ]
});
