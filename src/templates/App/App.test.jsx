import { renderTheme } from '../../styles/render-theme';
import Home from '.';

describe('<Home />', () => {
  it('shold render home', () => {
    renderTheme(<Home />);
  });
});
