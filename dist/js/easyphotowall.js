(function(){
    // Define constructor
    this.Photoshow = function() {

        // Set defaults
        var defaults = {
            container: 'easyphotowall'
        }

        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }else{
            this.options = defaults;
        }

        // Utility method to extend defaults with user options
        function extendDefaults(source, properties) {
            var property;
            for (property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }
            return source;
        }

    }

    // Public Methods

    Photoshow.prototype.play = function() {
        buildOut.call(this);
    }

    Photoshow.prototype.fullScreen = function() {
        fullScreen.call(this);
    }

    // Private Methods


    /**
     * Build Out
     * @return {[type]} [description]
     */
    function buildOut() {

        var container = document.getElementById(this.options.container);

        /**
         * Build Slide element
         *
         * @param  String number
         * @param  Array data
         * @return domNode
         */
        function buildSlide(number, data){

            var slide_class = 'easyphotowall__slide easyphotowall__slide',
                photos_class = 'easyphotowall__slide__photos',
                panel_class = 'easyphotowall__slide__photos__panel',
                photo_class = 'easyphotowall__slide__photos__panel__photo',
                slide_one,
                slide_two,
                slide_three,
                slide_four;

            slide = document.createElement('div');
            slide.className += slide_class + '--' + number;

            switch (number) {
                case 'one':

                    var photos_container_one = document.createElement('div');
                    photos_container_one.className = photos_class + ' easyphotowall_grid_col-3';

                    var photos_container_two = document.createElement('div');
                    photos_container_two.className = photos_class + ' easyphotowall_grid_col-3';

                    var panel_container_one = document.createElement('div');
                    panel_container_one.className = panel_class + ' easyphotowall_grid_col-6';

                    var panel_container_two = document.createElement('div');
                    panel_container_two.className = panel_class + ' easyphotowall_grid_col-6';

                    var photo_one = document.createElement('div');
                    photo_one.className = photo_class;
                    photo_one.style.backgroundImage = 'url('+ data[0] +')';

                    var photo_two = document.createElement('div');
                    photo_two.className = photo_class;
                    photo_two.style.backgroundImage = 'url('+ data[0] +')';

                    panel_container_one.appendChild(photo_one);
                    photos_container_one.appendChild(panel_container_one);

                    panel_container_two.appendChild(photo_two);
                    photos_container_two.appendChild(panel_container_two);

                    slide.appendChild(photos_container_one);
                    slide.appendChild(photos_container_two);

                    break;

                case 'two':

                    var photos_container_one = document.createElement('div');
                    photos_container_one.className = photos_class + ' easyphotowall_grid_col-2';

                    var photos_container_two = document.createElement('div');
                    photos_container_two.className = photos_class + ' easyphotowall_grid_col-4';

                    var panel_container_one = document.createElement('div');
                    panel_container_one.className = panel_class + ' easyphotowall_grid_col-6';

                    var panel_container_two = document.createElement('div');
                    panel_container_two.className = panel_class + ' easyphotowall_grid_col-6';

                    var photo_one = document.createElement('div');
                    photo_one.className = photo_class;
                    photo_one.style.backgroundImage = 'url('+ data[0] +')';

                    var photo_two = document.createElement('div');
                    photo_two.className = photo_class;
                    photo_two.style.backgroundImage = 'url('+ data[1] +')';

                    panel_container_one.appendChild(photo_one);
                    photos_container_one.appendChild(panel_container_one);

                    panel_container_two.appendChild(photo_two);
                    photos_container_two.appendChild(panel_container_two);

                    slide.appendChild(photos_container_one);
                    slide.appendChild(photos_container_two);

                    break;

                case 'three':

                    var photos_container_one = document.createElement('div');
                    photos_container_one.className = photos_class + ' easyphotowall_grid_col-4';

                    var photos_container_two = document.createElement('div');
                    photos_container_two.className = photos_class + ' easyphotowall_grid_col-2';

                    var panel_container_one = document.createElement('div');
                    panel_container_one.className = panel_class + ' easyphotowall_grid_col-6';

                    var panel_container_two = document.createElement('div');
                    panel_container_two.className = panel_class + ' easyphotowall_grid_col-6';

                    var panel_container_three = document.createElement('div');
                    panel_container_three.className = panel_class + ' easyphotowall_grid_col-6';

                    var photo_one = document.createElement('div');
                    photo_one.className = photo_class;
                    photo_one.style.backgroundImage = 'url('+ data[0] +')';

                    var photo_two = document.createElement('div');
                    photo_two.className = photo_class;
                    photo_two.style.backgroundImage = 'url('+ data[1] +')';

                    var photo_three = document.createElement('div');
                    photo_three.className = photo_class;
                    photo_three.style.backgroundImage = 'url('+ data[2] +')';

                    panel_container_one.appendChild(photo_one);
                    panel_container_two.appendChild(photo_two);
                    panel_container_three.appendChild(photo_three);

                    photos_container_one.appendChild(panel_container_one);
                    photos_container_two.appendChild(panel_container_two);
                    photos_container_two.appendChild(panel_container_three);

                    slide.appendChild(photos_container_one);
                    slide.appendChild(photos_container_two);

                    break;
            }

            return slide;
        }

        /**
         * Build Slides according to array sizes
         *
         * @param Array images
         * @return Array slides
         */
        function buildSlides(images) {
            var slides = [];
            for (var i = 0; i < images.length; i++) {
                var current_array = images[i],
                    n = current_array.length;
                switch (n) {
                    case 1:
                        var slide = buildSlide('one', current_array);
                        break;
                    case 2:
                        var slide = buildSlide('two', current_array);
                        break;
                    case 3:
                        var slide = buildSlide('three', current_array);
                        break;
                    case 4:
                        var slide = buildSlide('four', current_array);
                        break;
                }
                slides.push(slide);
            }

            return slides;
        }

        /**
         * Convert Json Object to Javascript Array
         *
         * @param  Json Object obj
         * @return Array array
         */
        function jsonToArray(obj) {
            var array = Object.keys(obj).map(function(k) { return obj[k] });
            return array;
        }

        /**
         * Generate Random Chunks
         *
         * @param  Array array
         * @param  Int min
         * @param  Int max
         * @return Array arrays
         */
        function randomChunkSplit(array,min,max) {
            // var arr = arr.slice();
            var arrays = [],
                size = 1,
                min  = min || 1,
                max  = max || min || 1;

            while (array.length > 0) {
                size = Math.min(max, Math.floor((Math.random()*max) + min));
                arrays.push(array.splice(0, size));
            }
            return arrays;
        }

        /**
         * Replace slide in the container
         *
         * @param  domNode slide
         * @return void
         */
        function replaceSlide(slide, container) {
            var el = document.createElement('div');
            el.appendChild(slide);
            container.innerHTML = el.innerHTML;

            // FullScreen Button
            var fullscreen_button = document.createElement('button');
            fullscreen_button.id = 'fullscreen-button';
            fullscreen_button.style = 'display:none;';
            if (!document.fullscreenElement &&
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ){
                fullscreen_button.innerHTML = "&#8597 ";
            }else{
                fullscreen_button.innerHTML = "&#10005 ";
            }
            fullscreen_button.onclick = function(){
                toggleFullScreen();
            };
            container.appendChild(fullscreen_button);
            document.onmousemove = function(){
                fullscreen_button.style = 'display:block;';
            }
        }

        /**
         * Play infinite
         *
         * @return void
         */
        function infinite(slides) {
            for (var i = 0; i < slides.length;i++) {
              (function(index) {
                setTimeout(function(){
                    replaceSlide(slides[index], container);
                    if(index+1 == slides.length) infinite(slides);
                }, 6000*i)})(i);
            }
        }

         /**
          * Set data
          */
         if(typeof this.options.data == 'undefined'){
             var images_array = [],
                 list = container.getElementsByTagName('ul')[0],
                 items = list.getElementsByTagName('li');
            for (var i = 0; i < items.length; i++) {
                images_array.push(items[i].getElementsByTagName('img')[0].src);
            }
         }else{
             var images_array = jsonToArray(this.options.data);
         }

         /**
          * Set variables
          */
         var images = randomChunkSplit(images_array, 1, 3),
             container = document.getElementById(this.options.container),
             slides    = buildSlides(images),
             count     = slides.length;

        /**
         * Run infinite photoshow
         */
        infinite(slides);

    }

    /**
     * Toggle FullScreen
     *
     * @return void
     */
    function toggleFullScreen() {
        var container = document.getElementById('easyphotowall'),
            fullscreen_button = document.getElementById('fullscreen-button');
        if (!document.fullscreenElement &&
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
            fullscreen_button.innerHTML = "&#10005 ";
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.msRequestFullscreen) {
                container.msRequestFullscreen();
            } else if (container.mozRequestFullScreen) {
                container.mozRequestFullScreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            fullscreen_button.innerHTML = "&#8597 ";
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
}());
