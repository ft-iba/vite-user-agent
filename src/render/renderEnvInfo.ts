import { getEnvInfo } from '../data/envInfo';

export function renderEnvInfo(container: HTMLElement) {
  const ul = document.createElement('ul');
  ul.className = 'info__list';

  const info = getEnvInfo();
  for (const [key, value] of Object.entries(info)) {
    const li = document.createElement('li');
    li.className = 'info__item';

    const title = document.createElement('div');
    title.className = 'info__itemTitle';
    title.textContent = key;

    const detail = document.createElement('div');
    detail.className = 'info__itemDetail';
    detail.textContent = String(value);

    li.append(title, detail);
    ul.appendChild(li);
  }

  container.appendChild(ul);
}
