var leftArrowURL = "img/arrow_left.png";
var rightArrowURL = "img/arrow_right.png";

function ImageSequence(name, urls, links) {
  this.name = name;
  this.urls = urls;
  this.links = links;
  var cursor = 0;
  this.now = function () {
    return urls[cursor];
  };
  this.next = function () {
    cursor = (cursor + 1) % urls.length;
    return urls[cursor];
  };
  this.prev = function () {
    cursor = (cursor - 1 + urls.length) % urls.length;
    return urls[cursor];
  };
  this.displayNext = function () {
    document.getElementById(name + "_img").src = this.next();
    document.getElementById(name + "_a").href = this.links[cursor];
  };
  this.displayPrev = function () {
    document.getElementById(name + "_img").src = this.prev();
    document.getElementById(name + "_a").href = this.links[cursor];
  };
}

var imageSequences = new Object(); // object can be used as a map in javascript

// width, height and link can be null
// width and height specify the initial size of the image container. if you insert the maximum width and height of the images of a sequence, you prevent position changes  when changing an image
function insertImageChanger(name, urls, links, width, height) {
  var imageSequence = new ImageSequence(name, urls, links);
  var style = (width != null ? "width:" + width + "px;" : "") + (height != null ? "height:" + height + "px;" : "");
  imageSequences[name] = imageSequence;
  document.write('<div class="imagesequence-container">\n');
  if (urls.length > 1) {
    document.write(
      '<div class="imagesequence-prev"><img src="' +
        leftArrowURL +
        '" onClick="imageSequences.' +
        name +
        '.displayPrev()"/></div>' +
        "\n"
    );
  }
  document.write('<div class="imagesequence-image" style="text-align:center;' + style + '">' + "\n");
  if (links != null) document.write('<a id="' + name + '_a" href="' + links[0] + '">');
  document.write('<img id="' + name + '_img" src="' + urls[0] + '" style="display:block;margin: auto auto;"/> ');
  if (links != null) document.write("</a>");
  document.write("</div>");
  if (urls.length > 1) {
    document.write(
      '<div class="imagesequence-next"><img src="' +
        rightArrowURL +
        '" onClick="imageSequences.' +
        name +
        '.displayNext()"/></div>'
    );
  }
  document.write('</div><div style="clear:both;"></div>');
}
