import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandImage: 'https://storage.cloud.google.com/palyanytsya-343517.appspot.com/LogoUI.svg',
  brandTarget: '_self',
  fontBase: '"Open Sans", sans-serif',
  appBg: 'linear-gradient(92deg, #f0f5fe 0%, #f6fafb 100%)',
  appBorderRadius: 8,
  colorPrimary: '#FF868E',
  colorSecondary: '#060606',
});
