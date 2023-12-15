import { getListDebounced } from './utils.mjs';

const inputBox = document.querySelector('#select-input');
const selectMenu = document.querySelector('.select-menu');
console.log('ii:', inputBox);

//const handleInterSection = async (entries) => {
//  console.log('entry:', entries);
//  const last = entries[0];
//  if (!last) return;
//  if (last.isIntersecting) {
//    const list = await getListDebounced("omni");
//    console.log('list lazy:', list);
//  }
//}

//const interSectionObserver = new IntersectionObserver(handleInterSection, { rootMargin: "50px" });

const hideSelectMenu = () => {
  selectMenu.classList.remove('select-menu-open');
}

const setSelectMenu = (list) => {
  const container = document.createDocumentFragment();
  list.forEach(item => {
    const option = document.createElement('div');
    option.setAttribute('data-key', item?.id);
    option.classList.add('select-option');
    option.innerText = item?.title;
    container.appendChild(option);
  });
  const pivot = document.createElement('span');
  pivot.classList.add('last-item');
  container.appendChild(pivot);
  interSectionObserver.observe(pivot);
  selectMenu.innerHTML = "";
  selectMenu.appendChild(container);
}

const handleSearch = async (search) => {
  const list = await getListDebounced(search);
  selectMenu.classList.add('select-menu-open');
  if (list?.length) {
    setSelectMenu(list);
  } else {
    hideSelectMenu();
  }
};

const handleChange = (event) => {
  console.log('e:', event?.target?.value);
  const searchText = event?.target?.value;
  if (searchText) {
    handleSearch(searchText);
  } else {
    hideSelectMenu();
  }
};

const handleSelect = (event) => {
  const { key } = event?.target?.dataset;
  if (key) {
    inputBox.value = event?.target?.innerText;
    hideSelectMenu();
  }
}



const init = () => {
  inputBox.addEventListener('input', handleChange);
  selectMenu.addEventListener('click', handleSelect);
};

init();