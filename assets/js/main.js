//IN PROGRESS

/* Please ❤ this if you like it! */
/* Follow Me https://codepen.io/designfenix */
var pizzaApp = {
    $filterElement : $('.tabs li'),
    $slider : $('.slider'),
    $loved: $('.card .loved'),
    showSliderFilter: function(){
      var $this = $(this),
        offset = $this.offset(),
        timeLineTab = new TimelineMax(),
        timeLineSlider = new TimelineMax(),
        filter = $this.attr('data-filter'),
        offsetBody = $('.tabs').offset();
      if(!$(this).hasClass('active')){
            $('.tabs li').removeClass('active');
            $this.addClass('active');
            timeLineSlider.to($('.slider .card'),0, {
              rotateY: '90deg',
              zIndex:-1,
              ease:Power3.easeInOut
            },'hide').to($('.slider'), .2, {
              zIndex:-1,
              ease:Power3.easeInOut
            },'hide').to($('.slider[data-filter="'+filter+'"] .card'), .2, {
              rotateY: 0,
              zIndex:1,
              ease:Power3.easeInOut
            },'show').to($('.slider[data-filter="'+filter+'"]'), .2, {
              zIndex:1,
              ease:Power3.easeInOut
            },'show');
        
        
            timeLineTab.to($('.tabs .slide-line'), .3, {
              width: '15px',
              left: ($this.position().left+($this.width()/2)-5)+'px',
              ease:Power3.easeInOut
            }).to($('.tabs .slide-line'), .1, {
              width: '8px',
              ease:Power3.easeInOut
            });
            return false;
        }
    },
    setSliders: function(){
      this.$slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        slide: '.card'
      });
      this.sliderAnimation();
    },
    loveAnimation: function(){
      var svg = $('.card .loved svg');
      if(!svg.hasClass('active')){
        TweenMax.to( svg , .2, {
          fill: '#F44336',
          ease: Power3.easeOut
        });
        svg.addClass('active');
      }else{
        TweenMax.to( svg , .2, {
          fill: '#aaa',
          ease: Power3.easeOut
        });
        svg.removeClass('active');
      }
    },
    sliderAnimation: function(){
      this.$slider.on('swipe', function(event, slick, direction){
        var timeLinePizza = new TimelineMax(),
            rotationGrad = (direction=='left'?'-=40':'+=40');
          console.log(slick);
        timeLinePizza.to($('.card .pizza'), .5, {rotation: rotationGrad, ease:Power1.easeInOut});
      });
    },
    bindEvents: function(){
      var _this = this;
      _this.$filterElement.on('click',_this.showSliderFilter);
      _this.$filterElement.eq(0).click();
      _this.$loved.on('click',_this.loveAnimation);
    },
    init: function(){
      this.bindEvents();
      this.setSliders();
    },
  };
  $(document).ready(function(){
    pizzaApp.init();
  });
  $('.slider .card').mousedown(function() {
    TweenMax.to( $(this) , .2, {
      scale: .95,
      ease: Power3.easeInOut,
    });
  });
  $('.slider .card').mouseup(function() {
    TweenMax.to( $(this) , .2, {
      scale: 1,
      ease: Power3.easeInOut,
    });
  });
  document.addEventListener("DOMContentLoaded", function(event) { 
      $('.slider .card').on("touchstart", function(){
        TweenMax.to( $(this) , .2, {
          scale: .95,
          ease: Power3.easeInOut,
        });
      });
      $('.slider .card').on("touchend", function(){
        TweenMax.to( $(this) , .2, {
          scale: 1,
          ease: Power3.easeInOut,
        });
      });
  });