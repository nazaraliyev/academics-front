'use client';
import { createTheme, Tabs } from '@mantine/core';
import styles from './theme.module.scss';

const theme = createTheme({
  fontFamily: 'var(--font-poppins)',
  components:{
    Tabs:Tabs.extend({
      classNames:{
        list:styles.tabs_list,
        tab:styles.tabs_tab
      },
      defaultProps:{
        color:"var(--academic-primary)"
      }
    })
  }
});
export default theme;
