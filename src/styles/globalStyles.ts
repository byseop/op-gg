import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
    font-family: 'Apple SD Gothic Neo',
    'AppleSDGothicNeo',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helvetica Neue',
    'Malgun Gothic',
    '맑은 고딕',
    '나눔고딕',
    'Nanum Gothic',
    'Noto Sans KR',
    'Noto Sans CJK KR',
    'arial',
    '돋움',
    'Dotum',
    'Tahoma',
    'Geneva',
    'sans-serif';
  }
  :root {
    --white1: #fff;
    --black: #000;
    --bg-primary1: #1ea1f7;
    --bg-gray1: #eaeaea;
    --bg-gray2: #e0e3e3;
    --bg-gray3: #ededed;
    --bg-white1: #f2f2f2;
    --bg-primary2: #7aa5c3;
    --bg-secondary1: #cb9e9a;
    --text-placeholder-gray: #727272;
    --text-input-gray: #202d37;
    --text-gray1: #657070;
    --text-gray2: #879292;
    --text-gray3: #555555;
    --text-gray4: #666666;
    --text-gray5: #999999;
    --text-gray6: #948e8d;
    --text-gray-selected1: #5e5e5e;
    --text-black1: #242929;
    --text-black2: #353a3a;
    --text-black3: #555e5e;
    --text-black4: #333333;
    --text-primary1: #1f8ecd;
    --border-gray1: #d0d3d4;
    --border-gray2: #d8d8d8;
    --border-gray3: #cdd2d2;

    --kda-level-1: #2daf7f;
    --kda-level-2: #1f8ecd;
    --kda-level-3: #e19205;
    --winrate-level-1: #c6443e;
    --avg-level-1: #e19205;

    --chart-winrate1: #1f8ecd;
    --chart-winrate2: #ee5a52;

    --match-lose-bg: #d6b5b2;
    --match-lose-border: #c0aba8;
    --match-lose-text1: #d0021b;
    --match-lose-div: #d0a6a5;
    --match-win-bg: #b0ceea;
    --match-win-border: #a1b8cd;
    --match-win-text1: #2c709b;
    --match-win-div: #94b9d6;
  }

  body {
    background: #fff;
  }

  a {
    text-decoration: none;
  }

  strong {
    color: inherit;
    font-weight: bold;
  }
`;

export default GlobalStyle;
