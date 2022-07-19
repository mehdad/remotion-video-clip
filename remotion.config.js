// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import {Config} from 'remotion';
Config.Puppeteer.setBrowserExecutable("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe");
Config.Rendering.setImageFormat('jpeg');
Config.Rendering.setConcurrency(1);