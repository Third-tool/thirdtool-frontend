import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    }

    body {
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 0;

    font-family: 'Pretendard-Regular';
    }

    * {
        box-sizing: border-box;
        color: inherit; /* 하위 요소에도 폰트 색상 상속 */
    }
`;

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: #000;
//     color: #fff;
//     margin: 0;
//     padding: 0;

//     font-family: 'IBM Plex Sans KR', sans-serif;
//   }

//   * {
//     box-sizing: border-box;
//     color: inherit;
//   }
export default GlobalStyle;
