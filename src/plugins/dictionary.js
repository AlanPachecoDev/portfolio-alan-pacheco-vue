import {
  nav_bar_dic_es,
  nav_bar_dic_en,
} from "../plugins/dictionaries/nav-bar-dicts.js";

import {
  home_dic_es, 
  home_dic_en
} from "../plugins/dictionaries/home-dicts.js";

export default {
  ES: {
    ...nav_bar_dic_es,
    ...home_dic_es, 
  },

  EN: {
    ...nav_bar_dic_en,
    ...home_dic_en
  },
};
