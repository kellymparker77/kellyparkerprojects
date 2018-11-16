last = $('[data-mode="image"][data-scroll-speed]:last-child');

$(window).on('load', function(){
    $('.work__list').height( ( $('.work__list').height() * .65 ) );
    $('.work__list').css('overflow', 'hidden');
});


var width = $(window).width();

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));

  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }


}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};


if(width > 768) {
	$('[data-mode="image"][data-scroll-speed]').moveIt();
}


$(window).on('resize', function(){  
	var width = $(window).width();
	
	if(width > 768) {
		$('[data-mode="image"][data-scroll-speed]').moveIt();
	}

});


