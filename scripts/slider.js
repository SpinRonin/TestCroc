window.onload = function() {
  class Slider {
    constructor(obj){
    this.images = document.querySelectorAll(obj.images);
    this.btNext = document.querySelector(obj.next);
    this.btPrev = document.querySelector(obj.prev);
    this.interval = obj.interval;
    this.i = 0;
    this.btNext.addEventListener('click', this.next.bind(this));
    this.btPrev.addEventListener('click', this.prev.bind(this));
    setInterval(this.next.bind(this), this.interval);
    }
    prev() {
      this.images[this.i].className = "";
      this.i--;
      if (this.i < 0){
        this.i = this.images.length - 1;
      }
      this.images[this.i].className = "shown";
    }
    next() {
      this.images[this.i].className = "";
      this.i++;
      if (this.i >= this.images.length) {
        this.i = 0;
      }
      this.images[this.i].className = "shown";
    }
  }
  new Slider({
    images: '.slider .slides img',
    next: '.slider .tabs .next',
    prev: '.slider .tabs .prev',
    interval:'5000'
  })
}