function configure(data) {
    var config = {}; // Set config options from data attributes

    config.easing = data.el.attr('data-easing') || 'ease';
    var intro = parseInt(data.el.attr('data-duration-in'), 10); // eslint-disable-next-line no-self-compare

    intro = config.intro = intro === intro ? intro : 0;
    var outro = parseInt(data.el.attr('data-duration-out'), 10); // eslint-disable-next-line no-self-compare

    outro = config.outro = outro === outro ? outro : 0;
    config.immediate = !intro && !outro; // Store config in data

    data.config = config;
  }
