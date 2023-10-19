import 'dark-mode-toggle';
import '@shoelace-style/shoelace/dist/components/split-panel/split-panel.js';
import '@shoelace-style/shoelace/dist/components/tree/tree.js';
import '@shoelace-style/shoelace/dist/components/tree-item/tree-item.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/image-comparer/image-comparer.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
import { defineElement as defineBentoLightboxGallery } from '@bentoproject/lightbox-gallery';

defineBentoLightboxGallery();

registerIconLibrary('material', {
  resolver: (name) => {
    const match = name.match(/^(.*?)(_(round|sharp))?$/);
    return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${
      match[1]
    }/${match[3] || 'outline'}.svg`;
  },
  mutator: (svg) => svg.setAttribute('fill', 'currentColor'),
});

const rootEl = document.querySelector('#root');
const mainNavEl = document.querySelector('#main-nav');
const lightboxEl = document.querySelector('bento-lightbox-gallery');
const galleryGridEls = document.querySelectorAll('.gallery-grid');
const sectionHeadingEls = document.querySelectorAll('main h2');
const attributeEls = document.querySelectorAll('.scene-class h3');

const focusLightbox = () => {
  setTimeout(() => {
    const firstSlideEl = lightboxEl.shadowRoot.querySelector('[part="slide"]');
    const slideContainerEl = firstSlideEl?.parentElement;
    slideContainerEl?.focus();
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
}

// Enable section permalink reveal on H2 hover
for (const sectionHeadingEl of sectionHeadingEls) {
  const permalinkMsg = encodeHtmlEntity(
    `Permalink to ${sectionHeadingEl.innerText}`
  );
  sectionHeadingEl.innerHTML = `
    <span>${sectionHeadingEl.innerHTML}</span>
    <a href="#${sectionHeadingEl.id}" title="${permalinkMsg}"><span class="sr-only">${permalinkMsg}</span></a>
  `;
}

// Enable attribute permalink reveal on hover
for (const attributeEl of attributeEls) {
  const permalinkMsg = encodeHtmlEntity(
    `Permalink to ${attributeEl.innerText}`
  );
  attributeEl.id = attributeEl.innerText;
  attributeEl.innerHTML = `
    <span>${attributeEl.innerHTML}</span>
    <a href="#${attributeEl.id}" title="${permalinkMsg}"><span class="sr-only">${permalinkMsg}</span></a>
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

const DARK_MODE_STORAGE_KEY = 'dark-mode-toggle'

const getColorPreference = () => {
  if (localStorage.getItem(DARK_MODE_STORAGE_KEY))
    return localStorage.getItem(DARK_MODE_STORAGE_KEY);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);
};

// Immediately read color preference from localStorage or
// the system setting
const theme = {
  value: getColorPreference()
};

// Immediately set html[data-theme] so there is no flash of a
// default theme before activating the user's preference
reflectPreference();

//
document.addEventListener('DOMContentLoaded', () => {
  reflectPreference();

  const toggleEl = document.querySelector("dark-mode-toggle");

  // Handle toggle event
  toggleEl.addEventListener("colorschemechange", () => {
    theme.value = toggleEl.mode;
    reflectPreference();
  });
})

// Sync with system setting when it changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    reflectPreference();
  });

(async () => {
  await Promise.allSettled([
    customElements.whenDefined('dark-mode-toggle'),
    customElements.whenDefined('sl-split-panel'),
    customElements.whenDefined('sl-tree'),
    customElements.whenDefined('sl-tree-item'),
  ]);

  // Button, card, and rating are registered now! Add
  // the `ready` class so the UI fades in.
  document.body.classList.add('ready');
})();
