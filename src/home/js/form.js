import { $, $from } from 'func';

export function switchPassword(data, prop) {
  const password = $('input[type=password]');
  const showPassword = $('.showPassword');
  const switcher = $('.acc_switcher');
  switcher.addEventListener('click', (e) => {
    const isOn = e.currentTarget.classList.toggle('is-on');
    showPassword.style.zIndex = isOn ? 0 : -1;
  });

  password.addEventListener('input', () => {
    showPassword.value = password.value;
  });
  showPassword.addEventListener('input', () => {
    password.value = showPassword.value;
    data[prop] = password.value;
  });
}

export function refrechCodeImg() {
  const codeImg = $('.codeImg');
  const refresh = function (img) {
    const code = Math.random();
    img.src = `/m/main/VerifyCode?_=${code}`;
  };
  codeImg.addEventListener('click', e => refresh(e.target));
  return function () {
    refresh(codeImg);
  };
}

export function dataBinding(data, btn) {
  const inputs = $from('input[name]');
  const common = function () {
    console.log(data);
    btn.disabled = false;
    inputs.forEach((_input) => {
      if (_input.required && !_input.value) btn.disabled = true;
    });
  };

  inputs.forEach((input) => {
    const prop = input.name;
    data[prop] = '';
    if (input.type === 'checkbox') {
      input.addEventListener('change', (e) => {
        data[prop] = e.target.checked;
        common();
      });
    } else {
      input.addEventListener('input', (e) => {
        data[prop] = e.target.value.trim();
        common();
      });
    }
  });
}
