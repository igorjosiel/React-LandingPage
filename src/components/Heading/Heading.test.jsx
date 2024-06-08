import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render small size correctly', () => {
    renderTheme(<Heading size="small">texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should render medium size correctly', () => {
    renderTheme(<Heading size="medium">texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });
  });

  it('should render big size correctly', () => {
    renderTheme(<Heading size="big">texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });
  });

  it('should render huge size correctly', () => {
    renderTheme(<Heading size="huge">texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  // it('should render correct font-size when using mobile', () => {
  //   renderTheme(<Heading size="huge">texto</Heading>);

  //   const heading = screen.getByRole('heading', { name: 'texto' });

  //   expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.huge, {
  //     media: theme.media.lteMedium,
  //   });
  // });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
