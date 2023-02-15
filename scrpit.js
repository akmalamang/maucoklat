// const aliceTumbling = [{ transform: 'rotate(0) scale(1) translateY(70px)' }, { transform: 'rotate(360deg) scale(0)' }];

// const aliceTiming = {
//     duration: 2000,
//     iterations: 1,
//     fill: 'forwards',
// };

// const alice1 = document.querySelector('#alice1');
// const alice2 = document.querySelector('#alice2');
// const alice3 = document.querySelector('#alice3');

// alice1.addEventListener('click', () => {
//     alice1
//         .animate(aliceTumbling, aliceTiming)
//         .finished.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//         .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
//         .catch((error) => {
//             console.log(error);
//         });
// });

const btn = document.querySelector('.btn button');
const inpt = document.querySelector('.input input');

const CokelatTumbling = [{ transform: 'rotate(0) scale(0) translateY(70px)' }, { transform: 'rotate(360deg) scale(1)' }];

const cokelatTiming = {
  duration: 1000,
  iterations: 1,
  fill: 'forwards',
};
const imgtiming = {
  duration: 1000,
  iterations: Infinity,
  delay: 1000,
  fill: 'forwards',
};

const imgTambling = [{ transform: 'translateY(0px)' }, { transform: 'translateY(10px)' }, { transform: 'translate(0px)' }];

btn.addEventListener('click', () => {
  const gmbrText = document.querySelector('.gambarAndText');
  const gambar = document.querySelector('.gambarAndText .gambar img');
  const textSpan = document.querySelector('.nama');

  if (inpt.value === '') {
    alert('eitss isi dulu nama anda');
  } else {
    textSpan.textContent = inpt.value;
    gmbrText
      .animate(CokelatTumbling, cokelatTiming)
      .finished.then(() => {
        textSpan.animate(CokelatTumbling, cokelatTiming);
        gambar.animate(imgTambling, imgtiming);
      })
      .catch((err) => console.log(err));
  }
});
btn.parentElement.nextElementSibling.firstElementChild.addEventListener('click', () => {
  document.location.reload();
});
