Router.configure({
  layoutTemplate: 'mainLayout',
  templateNameConverter: 'upperCamelCase'
});

Router.map(function() {
  this.route('frontPage', {
    path: '/'
  });

  this.route('singlePage', {
    path: '/single'
  });
  
});

