const rootEl = document.querySelector('#root');
const mainNavEl = document.querySelector('#main-nav');
const lightboxEl = document.querySelector('bento-lightbox-gallery');
const galleryGridEls = document.querySelectorAll('.gallery-grid');
const sectionHeadingEls = document.querySelectorAll('main h2');

const focusLightbox = () => {
  setTimeout(() => {
    const firstSlideEl = lightboxEl.shadowRoot.querySelector('[part="slide"]');
    const slideContainerEl = firstSlideEl.parentElement;
    slideContainerEl.focus();
  }, 500);
};

function createUUID() {
  let dt = new Date().getTime();

  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }
  );

  return uuid;
}

const encodeHtmlEntity = (str) => {
  const buf = [];
  for (var i = str.length - 1; i >= 0; i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return buf.join('');
};

// Treat clicks of the top-level main nav links as normal links,
// preventing their behavior of expanding their subtree
mainNavEl.addEventListener(
  'click',
  function (e) {
    const itemEl = e.target;
    if (itemEl instanceof HTMLAnchorElement) {
      e.stopImmediatePropagation();
    }
  },
  { capture: true }
);

const lightboxObserver = new MutationObserver((mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      focusLightbox();
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
});

lightboxObserver.observe(lightboxEl, { attributes: true });

// Make each gallery its owne unique lightbox
for (const galleryEl of galleryGridEls) {
  const uuid = createUUID();
  for (const galleryItemEl of Array.from(
    galleryEl.querySelectorAll('[lightbox]')
  )) {
    galleryItemEl.setAttribute('lightbox', uuid);
  }
  import('https://cdn.ampproject.org/v0/bento-lightbox-gallery-1.0.mjs');
}

// Enable section permalink reveal on H2 hover
for (const sectionHeadingEl of sectionHeadingEls) {
  const permalinkMsg = encodeHtmlEntity(
    `Permalink to ${sectionHeadingEl.innerText}`
  );
  console.log(permalinkMsg);
  sectionHeadingEl.innerHTML = `
    <span>${sectionHeadingEl.innerHTML}</span>
    <a href="#${sectionHeadingEl.id}" title="${permalinkMsg}"><span class="sr-only">${permalinkMsg}</span></a>
  `;
}

const jumpToAnchor = () => {
  if (location.hash) {
    document.querySelector(location.hash)?.scrollIntoView();
  }
};

jumpToAnchor();

window.addEventListener('hashchange', jumpToAnchor);

const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', (e) => {
  rootEl.toggleAttribute('nav-open');
});

document.querySelectorAll('main table').forEach((tableEl) => {
  const headersText = Array.from(tableEl.querySelectorAll('thead th')).map(
    (thEl) => thEl.innerText
  );
  tableEl.querySelectorAll('tbody tr').forEach((trEl) => {
    headersText.forEach((text, i) => {
      trEl.children[i].dataset.title = text;
    });
  });
});
