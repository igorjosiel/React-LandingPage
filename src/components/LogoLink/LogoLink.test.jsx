import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo">
        children
      </LogoLink>,
    );

    expect(screen.getByAllText('Olá mundo')).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg">
        children
      </LogoLink>,
    );

    expect(screen.getByAllText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg">
        children
      </LogoLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
