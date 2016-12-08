// - - - Menu toggle - - -
$(".menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});

// - - - Message Box - - -
var $input;

function onInputFocus(event) {
  var $target = $(event.target);
  var $parent = $target.parent();
  $parent.addClass('input--filled');
};

function onInputBlur(event) {
  var $target = $(event.target);
  var $parent = $target.parent();

  if (event.target.value.trim() === '') {
    $parent.removeClass('input--filled');
  }
};

$(document).ready(function() {
  $input = $('.input__field');
  
  // in case there is any value already
  $input.each(function(){
    if ($input.val().trim() !== '') {
      var $parent = $input.parent();
      $parent.addClass('input--filled');
    }
  });
  
  $input.on('focus', onInputFocus);
  $input.on('blur', onInputBlur);
});


// - - - Read more - - -
$('.idea-expand').readmore({
  //moreLink: '<a href="#"><div style="content: url(https://715bb6567badc48fe08bee2c74e67980b1bf05ab.googledrive.com/host/0B2WaKWN6XzIEQ1VweV81cDA0cTQ/read-more.png);"></div></a>',
  speed:300,
  collapsedHeight: 0,
  // actions div closed in HTML
  moreLink: '<a href="#" class="ops read" id="read-more"><img class="op-icons" src="img/readmore.png"><div class="rm"> Read More </div></a>',
  lessLink: '<a href="#" class="ops read" id="read-less"><img class="op-icons" src="img/readless.png"><div class="rl"> Read Less </div></a>'
});


// - - - Append options to end of aticles - display in-line with readmore 
//$('.idea-wrap').append("<a id="fav" href="#"><img src="">hello</a>");

// NEW READ MORE
$(function() {
  var b = $(".expand-button");
  var w = $(".expand-wrap");
  var i = $(".idea-expand");
  
  w.height(i.outerHeight(true));

  b.click(function() {

    if(w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      w.addClass('open');
      w.height(i.outerHeight(true));
    }
  });
});

  // - - - Voting Arrows - AESTHETICS ONLY. - - -
  $('.vote-up').click(function () {
    $(this).toggleClass('on');
  });

  $('.vote-down').click(function () {
    $(this).toggleClass('on');
  });

  // - - - Modal Pop-up - - -
  $(document).on('ready', function(){
    $modal = $('.modal-frame');
    $overlay = $('.modal-overlay');

    /* Need this to clear out the keyframe classes so they dont clash with each other between enter/leave. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($modal.hasClass('state-leave')) {
        $modal.removeClass('state-leave');
      }
    });

    $('.close').on('click', function(){
      $overlay.removeClass('state-show');
      $modal.removeClass('state-appear').addClass('state-leave');
    });

    $('.open').on('click', function(){
      $overlay.addClass('state-show');
      $modal.removeClass('state-leave').addClass('state-appear');
    });

  });

  // Modal Controller
  (function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(ModalService) {
        var vm = this;

        vm.openModal = openModal;
        vm.closeModal = closeModal;

        initController();

        function initController() {
            vm.bodyText = 'This text can be updated in modal 1';
        }
        
        function openModal(id){
            ModalService.Open(id);
        }

        function closeModal(id){
            ModalService.Close(id);
        }
    }

})();

