// fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';

// Prevent automatic CSS addition to avoid issues with Next.js
config.autoAddCss = false;

// Add the icons to the library
library.add(faMagnifyingGlass, faMicrophone, faStar, faGithub);
