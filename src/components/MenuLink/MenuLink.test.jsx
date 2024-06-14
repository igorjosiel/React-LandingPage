import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http:://localhost">children</MenuLink>);

    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="http:://localhost" newTab>
        children
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should generate a snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="http:://localhost" newTab={false}>
        children
      </MenuLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
