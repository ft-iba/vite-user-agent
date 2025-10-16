import './global.css';
import './style.css';

import { renderFunctions } from './render/renderFunctions';
import { renderEnvInfo } from './render/renderEnvInfo';
import { renderShareTest } from './render/renderShareTest';

const app = document.getElementById('app')!;
renderFunctions(app);
renderEnvInfo(app);
renderShareTest(app);