import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>children</TextComponent>);

    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should match snapshot a text', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the right size', () => {
    renderTheme(<TextComponent>children</TextComponent>);

    expect(screen.getByText('children')).toHaveStyle(
      `font-size: ${theme.fonts.sizes.medium}`,
    );
  });
});
