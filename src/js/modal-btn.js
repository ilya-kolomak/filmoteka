import { refs } from './refs';

export function textModalBtn(id) {
  const btnQueue = document.querySelector('.add__queue');
  const btnWatch = document.querySelector('.add__watched');
  if (inList(id, 'watched')) {
    // console.log('є в watched');
    btnWatch.textContent = 'Adding to watched';
    btnWatch.disabled = true;
    function changeText() {
      // console.log('Функція працює!!!!');
      btnWatch.disabled = false;
      btnWatch.textContent = 'REMOVE FROM WATCHED';
      btnWatch.classList.add('active');
    }
    setTimeout(changeText, 300);
  } else {
    // console.log('немає в watched');
    btnWatch.textContent = 'ADD TO WATCHED';
    btnWatch.classList.remove('active');
    // console.log('видалити класс active');
    btnWatch.disabled = false;
  }

  if (inList(id, 'queue')) {
    // console.log('є в queue');
    btnQueue.textContent = 'Adding to queue';
    btnQueue.disabled = true;
    function changeText() {
      btnQueue.disabled = false;
      btnQueue.textContent = 'REMOVE FROM QUEUE';
      btnQueue.classList.add('active');
    }
    setTimeout(changeText, 300);
  } else {
    // console.log('немає queue');
    btnQueue.textContent = 'ADD TO QUEUE';
    btnQueue.classList.remove('active');
    btnQueue.disabled = false;
  }
}

function inList(id, list) {
  // console.log(id, list);
  let localListJson = load(list);

  if (localListJson === undefined) {
    // console.log(localListJson);
    return;
  } else {
    const findMovie = localListJson.find(item => item.id == id);
    return findMovie ? true : false;
  }
}

const load = key => {
  try {
    let serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      // console.log('serializedState', serializedState);
      return;
    } else {
      // console.log('serializedState', serializedState);
      return (serializedState = JSON.parse(serializedState) || undefined);
    }
  } catch (err) {
    console.error('Get state error: ', err);
  }
};
