import { $ } from 'func';
import './canvas-to-blob';

export default function submit() {
  const params = { url: '' };
  // 图片上传
  const file = document.getElementById('file');
  const img = $('.submitImg_img');
  file.addEventListener('change', (e) => {
    const file = e.target.files[0];
    // 图片预览
    const fileReader = new FileReader();
    fileReader.addEventListener('load', (el) => {
      const url = el.target.result;
      img.src = url;
    });
    fileReader.readAsDataURL(file); // 把图片转译成可以插入HTML的格式
    // 压缩
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', 530); // 设置画布的宽
    canvas.setAttribute('height', 270); // 设置画布的高
    const ctx = canvas.getContext('2d'); // 设置图片上传的类型2D/3D

    ctx.drawImage(img, 0, 0, 530, 270);
    const formData = new FormData();
    canvas.toBlob((blob) => {
      // 上传服务器
      formData.append('file', blob);
      fetch('http://upload.dreamhiway.com/uploadimg', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        credential: 'include',
        body: formData
      })
        .then(res => res.json())
        .then(data => {
          params.url = data.path;
        });
    }, 'image/jpeg', 0.7);
  });

   // const fpid = $cookie().submitId;
  const fpid = 2;
  const submitBtn = $('.submitBtn');
  const textReply = $('.textarea');
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');
  submitBtn.addEventListener('click', () => {
    // 获取评论内容给后台
    fetch('/m/RShop/Comment/Add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        fpid,
        fid: 0,
        comment: textReply.value,
        img: params.url,
        type: 0
      })
    })
      .then(res => res.json())
      .then((res) => {
        if (res.success) {
          modalText.textContent = '恭喜您，提交成功!';
          setTimeout(() => { location.href = `http://${SBCS_HOST}/m/home/require/${fpid}`; }, 2510);
        } else {
          modalText.textContent = res.msg;
        }
        modal.classList.add('is-show');
        setTimeout(() => modal.classList.remove('is-show'), 2500);
      });
  });
}
