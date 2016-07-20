import { $ } from 'func';

export default function submit() {
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
        img: '',
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
  // 图片上传
  const file = document.getElementById('file');
  const img = $('.submitImg_img');
  file.addEventListener('change', (event) => {
    const file = event.target.files[0];
    // 图片预览
    const fileReader = new FileReader();
    fileReader.addEventListener('load', (event) => {
      const url = event.target.result;
      img.src = url;
    });
    fileReader.readAsDataURL(file);


    // const canvas = document.createElement('canvas');
    // canvas.setAttribute('width', 530);
    // canvas.setAttribute('height', 270);
    // const ctx = canvas.getContext('2d');

    // ctx.drawImage(img, 0, 0, 530, 270);
    // const fileBlob = canvas.toBlob('image/jpeg', 0.7);


    // const formData = new FormData();
    // formData.append('file', fileBlob);
    // fetch('/api', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   },
    //   credential: 'include',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     params.url = data.path;
    //   });
  });
}
