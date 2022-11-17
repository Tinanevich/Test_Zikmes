import './index.html';
import './index.scss';

const Button = document.getElementById('form_btm');
const input = document.getElementById('form_input');

Button.addEventListener('click', sendNum)

async function sendNum(e) {
    e.preventDefault();
    if (!input.value) return;

 const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      number: input.value,
      body: 'test body',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
   
    if (response.ok) {
        let json = await response.json();
        alert(`Ваша заявка отправлена!
        Ваш номер ${json.number}`);
        input.value = '';
  }
}