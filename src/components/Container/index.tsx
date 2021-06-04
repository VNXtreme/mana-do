import theme from 'globalTheme';
import styled from 'styled-components';

const createMediaQueries = () => {
  let sizes = theme.size;
  let css = '';
  for (const key in sizes) {
    if (Object.prototype.hasOwnProperty.call(sizes, key)) {
      const element = sizes[key as keyof typeof sizes];
      css += `@media screen and (min-width: ${element}) {max-width: ${element};}`;
    }
  }
  return css;
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${createMediaQueries()}
`;

export default Container;