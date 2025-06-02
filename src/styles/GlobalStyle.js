import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
    body {
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 0;

    font-family: 'SpoqaHanSansNeo-Regular';
    }

    * {
        box-sizing: border-box;
        color: inherit; /* 하위 요소에도 폰트 색상 상속 */
    }
`;
export default GlobalStyle;
