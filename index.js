console.log('bobbyhadz.com');

const boxes = document.getElementsByClassName('box');
console.log(boxes); // 👉️ [div.box, div.box, div.box]

// ✅ addEventListener to first box
boxes[0].addEventListener('click', function onClick() {
  console.log('box clicked');
});

// ✅ addEventListener to all boxes
for (const box of boxes) {
  box.addEventListener('click', function onClick() {
    console.log('box clicked');
  });
}

// -------------------------------------------------------

// Check if the element exists before calling `addEventListener()`

const box = null;

if (
  typeof box === 'object' &&
  box !== null &&
  'addEventListener' in box
) {
  box.addEventListener('click', function onClick() {
    console.log('box clicked');
  });
}
