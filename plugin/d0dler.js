(function(plugin) {
    plugin.addURI("test:hello", function(page) {
      showtime.print("Hello World");
    })
})(this);