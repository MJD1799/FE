const createAccordionElement = ({ id, title, content }) => {
  const container = document.createElement('button');
  container.setAttribute('id', id);
  container.classList.add('accordion-header');
  container.innerText = title;
  console.log('ti:,', title, content, container);
  const contentEle = document.createElement('div');
  contentEle.innerText = content;
  contentEle.classList.add('accordion-collapse');
  contentEle.classList.add('accordion-content');
  const accordionFragment = document.createDocumentFragment();
  accordionFragment.appendChild(container);
  accordionFragment.appendChild(contentEle);

  const accordion = document.createElement('div');
  accordion.classList.add('accordion');

  accordion.append(accordionFragment);
  console.log('frag:', accordion);
  return accordion;
};


const renderAccordion = ({ config, parentEle }) => {
  let accordionFragments = [];
  config.forEach((item) => {
    accordionFragments.push(createAccordionElement(item));

  });
  console.log('frag:', accordionFragments);
  return accordionFragments;

};

const handleAccordianClick = (event) => {
  const targetEle = event.target;
  console.log('id:', targetEle, event);
  if (targetEle.id && targetEle.nodeName === "BUTTON") {
    targetEle.nextSibling.classList.toggle('accordion-expand');
    targetEle.nextSibling.classList.toggle('accordion-collapse');
  }
}

const attachEvents = (parentEle) => {

  parentEle.addEventListener("click", handleAccordianClick);

}


const init = () => {

  const config = [{
    id: 'a1',
    title: 'Why?',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cupiditate nesciunt, esse vel quas ratione excepturi tempora repudiandae voluptatem maxime maiores illo beatae, eius distinctio molestiae delectus fugiat quod dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio accusamus at eveniet quisquam corrupti! Illo natus excepturi voluptatem quae ratione error inventore atque pariatur nam? Magnam iste itaque error omnis.',
  }, {
    id: 'a2',
    title: 'What?',
    content: "What this colaveri di?",
  }, {
    id: 'a3',
    title: 'When?',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cupiditate nesciunt, esse vel quas ratione excepturi tempora repudiandae voluptatem maxime maiores illo beatae, eius distinctio molestiae delectus fugiat quod dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio accusamus at eveniet quisquam corrupti! Illo natus excepturi voluptatem quae ratione error inventore atque pariatur nam? Magnam iste itaque error omnis.',
  }, {
    id: 'a4',
    title: 'Where?',
    content: "Where this colaveri di?",
  }];
  const rootEle = document.querySelector('.container');
  const elements = renderAccordion({ config, parentEle: rootEle });
  console.log('elements:', elements, rootEle);
  rootEle.append(...elements);

  attachEvents(rootEle);
};

init();
