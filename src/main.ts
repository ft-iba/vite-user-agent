import './global.css'
import './style.css'

const isAndroidMobile = () => {
  return /Android.+Mobile/.test(navigator.userAgent);
}

const isMobile = () => {
  return /iPhone|Android.+Mobile/.test(navigator.userAgent);
}

const isiOS = () => { // iPadは除外
  return /iPhone|iPod/.test(navigator.userAgent);
}

const isiPadOS = () => { // iPadOS 13以降は UA が Mac
  return (
    navigator.userAgent.includes('iPad') ||
    (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
  );
}

const functionList = { isAndroidMobile, isMobile, isiOS, isiPadOS };
const app = document.getElementById('app')!;

for (const [item, fn] of Object.entries(functionList)) {
  const section = document.createElement('section');
  const heading = document.createElement('h1');
  heading.textContent = item;

  const nodeCode = document.createElement('pre');
  nodeCode.textContent = fn.toString();

  const nodeResult = document.createElement('p');
  nodeResult.textContent = `Result: ${fn()}`;

  section.appendChild(heading);
  section.appendChild(nodeCode);
  section.appendChild(nodeResult);

  app.appendChild(section);
}

const nodeUA = document.createElement('p');
nodeUA.textContent = navigator.userAgent;
app.appendChild(nodeUA);