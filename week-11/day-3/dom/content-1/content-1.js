const p = document.querySelectorAll('p');

for (let i = 0; i < p.length; i++) {
  let content = p[i].innerHTML;

  if (i === p.length - 1) {
    break;
  } else {
    p[i + 1].innerHTML = p[i + 1].innerHTML + ' ' + content;
  }
  console.log(p[i].innerHTML);
}