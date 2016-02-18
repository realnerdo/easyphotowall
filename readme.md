
# Easy PhotoWall

A javascript plugin for creating Slide Photoshows with effects.

[Demo page](http://realnerdo.github.io/easyphotowall/)

## Installation

You can use bower:

```bash
bower install easyphotowall
```

...or you can use npm:
```bash
npm install easyphotowall
```

## Manual installation

If you prefer, you can just include the files manually.

Include the css file:
```html
<!-- Path to the easyphotowall.css or easyphotowall.min.css -->
<link rel="stylesheet" href="dist/css/easyphotowall.min.css">
```

Include the javascript file before closing body tag:
```html
<!-- Path to the easyphotowall.js or easyphotowall.min.js -->
<script type="text/javascript" src="dist/js/easyphotowall.min.js"></script>
```

Create a placeholder tag wherever you want the photowall:
```html
<!-- By default the plugin searches for a div with the id of 'photowall' -->
<!-- You can set your custom id in the plugin options -->
<div id="easyphotowall">
    <!-- You can set your images in a unordered list -->
    <ul>
        <li><img src="path/to/image_1.jpg" alt="Image 1"></li>
        <li><img src="path/to/image_2.jpg" alt="Image 2"></li>
        <li><img src="path/to/image_3.jpg" alt="Image 3"></li>
    </ul>
</div>
```

Initialize the plugin:
```javascript
var photowall = new Photowall();
photowall.play()
```

## Options

| Option    | Type             | Default         |
| ----------|------------------| ----------------|
| container | string           | 'easyphotowall' |
| data      | javascript array |   null          |

## Usage

Example with custom id:
```html
<div id="myCustomId">
    <!-- You can set your images in a unordered list -->
    <ul>
        <li><img src="path/to/image_1.jpg" alt="Image 1"></li>
        <li><img src="path/to/image_2.jpg" alt="Image 2"></li>
        <li><img src="path/to/image_3.jpg" alt="Image 3"></li>
    </ul>
</div>
```

```javascript
var photowall = new Photowall({
    container: 'myCustomId'
});
photowall.play();
```

Example with custom id and javascript array data:
```html
<div id="myCustomId"></div>
```

```javascript
var images = ["path/to/image_1.jpg", "path/to/image_2.jpg", "path/to/image_3.jpg"];
var photowall = new Photowall({
    container: 'myCustomId',
    data: images
});
photowall.play();
```

## TODO

- [ ] Improve animations
- [ ] Add more effects
- [ ] Add duration option
- [ ] Add play and pause buttons
- [ ] Add custom size

## How you can contribute

You can drop me any request, suggestion or comment at my [twitter](https://twitter.com/asaelx).

I'm experimenting with this so feel free to submit [issues](https://github.com/realnerdo/easyphotowall/issues) and [pull requests](https://github.com/realnerdo/easyphotowall/pulls). That would be really cool :D.
Thanks for reading.

## Author

Asael Jaimes

[http://realnerdo.com/](http://realnerdo.com/)
