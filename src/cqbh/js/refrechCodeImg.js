import { $ } from 'func';

export function refrechCodeImg() {
  const codeImg = $('.codeImg');
  const refresh = function (img) {
    const code = Math.random();
    img.src = `/m/Cqbh/Apply/VerifyCode?_=${code}`;
  };
  codeImg.addEventListener('click', e => refresh(e.target));
  return function () {
    refresh(codeImg);
  };
}
