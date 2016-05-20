import { $, $cookie } from 'func';
import favorite from 'favorite';
import overflow from 'overflow';
import xhr from 'xhr';

export default function detail() {
  overflow($('.tagList'));
  favorite($('.icon_link'), 'jobid', '/m/hr/Collect/Add', '/m/hr/Collect/Del');

  // 简历投递
  const deliverBtn = $('.dtDeliver');
  deliverBtn.addEventListener('click', (e) => {
    if (!$cookie().accountType) {
      location.href = `http://${MAIN_HOST}/m/main/denglu?redirectURL=${encodeURIComponent(location.href)}`;
    } else {
      const JobID = location.pathname.replace(/.*\//, '');
      const ResumeID = parseInt(e.currentTarget.getAttribute('data-resume'), 10);
      // let userID = 4;
      // fetch('/m/hr/Resume/Delivery', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'credentials': 'include'
      //   },
      //   body: JSON.stringify({
      //     // userID,
      //     ResumeID,
      //     JobID: 100
      //   })
      // })
      //   .then(res => {
      //     console.log(1);
      //     if (res.success) {
      //       console.log(1);
      //     } else {
      //       alert('投递失败');
      //     }
      //   });
      const params = {
        ResumeID,
        JobID
      };
      xhr('/m/hr/Resume/Delivery', params, (data) => {
        if (data.success) {
          deliverBtn.classList.add('is-deliver');
          deliverBtn.textContent = '已投递';
        } else {
          alert('投递失败,请稍后再试');
        }
      });
    }
  });
}
