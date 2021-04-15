/* eslint-disable no-param-reassign */
const tabs = document.querySelector('.tabs');
const tabsButtons = tabs.querySelectorAll('[role="tab"]');
const tabsPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleClick(e) {
  // console.log(e.currentTarget);
  // hide all the  tab panels
  tabsPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all tab as unselected
  tabsButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });
  // marck the clicked tab as selecte
  e.currentTarget.setAttribute('aria-selected', true);
  // find the associates tab panel and show it
  const { id } = e.currentTarget;

  /* Method 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

  // Method 2 find in the array of tabPannels
  console.log(tabsPanels);
  const tabPannel = tabsPanels.find((panel) => panel.getAttribute('aria-labelledby') === id);
  tabPannel.hidden = false;
}

tabsButtons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
