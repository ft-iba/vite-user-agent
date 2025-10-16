import { shareTests } from '../data/shareTests';

export function renderShareTest(container: HTMLElement) {
  const section = document.createElement('section');
  const heading = document.createElement('h1');
  heading.textContent = 'navigator.share()';

  const actionContainer = document.createElement('div');
  actionContainer.className = 'share__action';

  const resultArea = document.createElement('pre');
  resultArea.className = 'share__result';
  resultArea.textContent = '結果が表示されます';

  for (const test of shareTests) {
    const button = document.createElement('button');
    button.className = 'share__actionButton';
    button.textContent = test.label;
    button.onclick = async () => {
      try {
        const data = await test.getData();
        const canShare =
          'canShare' in navigator ? (navigator as Navigator).canShare(data) : false;

        resultArea.textContent = `canShare: ${canShare}\n\n${JSON.stringify(
          data,
          null,
          2
        )}`;

        if (canShare && 'share' in navigator) {
          await (navigator as Navigator).share(data);
          resultArea.textContent += '\n\n共有ダイアログを開きました';
        } else {
          resultArea.textContent += '\n\n共有APIがサポートされていません';
        }
      } catch (err) {
        resultArea.textContent += `\n\nerror: ${(err as Error).message}`;
      }
    };
    actionContainer.appendChild(button);
  }

  section.append(heading, actionContainer, resultArea);
  container.appendChild(section);
}
