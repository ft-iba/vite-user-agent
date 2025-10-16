import { userAgentTests } from '../data/userAgentTests';

export function renderFunctions(container: HTMLElement) {
  for (const [name, fn] of Object.entries(userAgentTests)) {
    const section = document.createElement('section');
    const heading = document.createElement('h1');
    heading.textContent = name;

    const nodePre = document.createElement('pre');
    nodePre.innerHTML = fn.toString();

    const nodeResult = document.createElement('p');
    nodeResult.innerHTML = `Result: ${fn()}`;

    section.append(heading, nodePre, nodeResult);
    container.appendChild(section);
  }
}
