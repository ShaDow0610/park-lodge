import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Tell Font Awesome to skip adding its CSS automatically since it's being
// imported directly above. This prevents the icons rendering large/unstyled
// for a split second on page load.
config.autoAddCss = false;
