var jQuery = $ || require('jquery');

jQuery.fn.maxLength = function (options) {
  options = options || {};

  jQuery.extend(options, {
    max: 3,
    toggleClass: 'max-length-toggle'
  });

  this.each(function () {
    var $el = $(this);
    var length = $('>li:not(.' + options.toggleClass + ')', this).length;

    if (length < (parseInt($el.attr('data-max-length'), 10) || options.max)) {
      return;
    }

    if ($('>li.' + options.toggleClass, this).length) {
      return;
    }

    $el.append($('<li class="' + options.toggleClass + '"></li>').click(function () {
      console.info('click');
      $el.toggleClass('open');
    }));
  });
};
