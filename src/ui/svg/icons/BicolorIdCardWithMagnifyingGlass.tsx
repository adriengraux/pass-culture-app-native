import * as React from 'react'
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { svgIdentifier } from 'ui/svg/utils'

import { BicolorIconInterface } from './types'

const BicolorIdCardWithMagnifyingGlassSvg: React.FC<BicolorIconInterface> = ({
  size,
  color,
  color2,
  testID,
}) => {
  const { id: gradientId, fill: gradientFill } = svgIdentifier()

  const height = typeof size === 'string' ? size : ((size as number) * 156) / 200
  return (
    <Svg width={size} height={height} viewBox="0 0 200 156" fill="none" testID={testID} aria-hidden>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M109.604 106.405C108.396 103.378 107.732 100.077 107.732 96.6219C107.732 81.9643 119.681 70.0772 134.41 70.0772C141.21 70.0772 147.406 72.6006 152.129 76.7696C152.925 77.4714 152.997 78.6822 152.292 79.4735C151.587 80.2643 150.372 80.3366 149.577 79.6352C145.53 76.0634 140.234 73.9071 134.41 73.9071C121.804 73.9071 111.58 84.0813 111.58 96.6219C111.58 109.163 121.804 119.337 134.41 119.337C147.016 119.337 157.24 109.163 157.24 96.6219C157.24 93.4539 156.587 90.4192 155.413 87.6792C154.997 86.7055 155.452 85.5807 156.429 85.1665C157.406 84.7525 158.536 85.2042 158.953 86.1775C160.326 89.3838 161.087 92.9287 161.087 96.6219C161.087 111.279 149.139 123.167 134.41 123.167C124.727 123.167 116.246 118.029 111.571 110.345L38.2363 115.4L38.234 115.401C32.7626 115.754 28.0667 111.65 27.7162 106.228L23.0208 33.5705C22.6703 28.1469 26.8 23.4711 32.2725 23.1164L126.334 17.0214C131.807 16.6667 136.504 20.7706 136.854 26.1942L139.033 59.9064C139.106 61.0387 138.249 62.016 137.118 62.0893C135.987 62.1625 135.011 61.304 134.938 60.1718L132.759 26.4595C132.553 23.2681 129.799 20.8713 126.596 21.0788L32.5347 27.1739C29.3326 27.3814 26.9094 30.1137 27.1156 33.3051L31.8111 105.962C32.0173 109.154 34.772 111.55 37.9741 111.343L37.9764 111.343L109.604 106.405ZM49.6806 41.9301L49.6831 41.9259C51.5761 38.7133 54.9952 36.4707 59.015 36.2102C65.4471 35.7934 71.0112 40.6157 71.4242 47.0065L71.8636 53.8051C72.2766 60.1959 67.3795 65.696 60.9475 66.1128C54.5154 66.5296 48.9513 61.7073 48.5383 55.3166L48.0989 48.5179C47.9453 46.1398 48.5244 43.8538 49.6806 41.9301ZM53.2212 43.9804L53.2134 43.9936L53.2097 43.9997C52.4748 45.2191 52.0929 46.6913 52.1938 48.2526L52.6332 55.0512C52.901 59.1954 56.5089 62.326 60.6853 62.0554C64.8616 61.7847 68.0365 58.2146 67.7687 54.0704L67.3293 47.2718C67.0615 43.1276 63.4536 39.997 59.2772 40.2677C56.6657 40.4369 54.45 41.8895 53.2212 43.9804ZM81.2155 87.1626C81.3016 87.3665 81.2614 87.6021 81.1124 87.7658C80.0446 88.9391 78.8688 90.0251 77.6167 90.9887C76.7213 91.6778 76.5594 92.9529 77.2497 93.8382C77.9421 94.7262 79.2327 94.89 80.1308 94.1988C82.0331 92.7348 83.7755 91.0327 85.2836 89.1788C85.7229 88.6388 85.8541 87.9153 85.6336 87.2593C82.2625 77.23 72.4386 70.2837 61.2639 71.0078C50.0892 71.732 41.2413 79.8881 39.1892 90.2689C39.0548 90.9485 39.2786 91.6497 39.7847 92.1285C45.8203 97.8387 54.1578 101.183 63.1762 100.599C65.6305 100.44 68.0233 100.007 70.2972 99.2977C71.3814 98.9595 71.9783 97.8167 71.642 96.7499C71.3052 95.6814 70.1558 95.0806 69.0701 95.4193C67.126 96.0256 65.0584 96.4027 62.914 96.5416C55.646 97.0126 48.8778 94.5407 43.7383 90.1868C43.5693 90.0437 43.4991 89.8152 43.5583 89.6017C45.7573 81.6772 52.7918 75.6313 61.5261 75.0653C70.2608 74.4993 78.015 79.5874 81.2155 87.1626ZM89.0123 39.7174C88.9402 38.6013 89.7934 37.6295 90.9286 37.5559L119.67 35.6936C120.805 35.62 121.776 36.4736 121.848 37.5896C121.92 38.7057 121.067 39.6775 119.932 39.751L91.1908 41.6134C90.0557 41.687 89.0844 40.8334 89.0123 39.7174ZM91.9347 53.1253C90.7995 53.1989 89.9462 54.1707 90.0184 55.2867C90.0905 56.4028 91.0617 57.2564 92.1969 57.1828L113.1 55.8283C114.235 55.7548 115.088 54.783 115.016 53.6669C114.944 52.5509 113.972 51.6973 112.837 51.7709L91.9347 53.1253ZM120.673 86.3151C119.756 85.7827 118.578 86.0905 118.042 87.004C115.803 90.8232 112.479 100.22 120.289 109.256C120.982 110.058 122.196 110.148 123.001 109.459C123.807 108.77 123.899 107.56 123.205 106.758C116.928 99.4949 119.529 92.0658 121.365 88.9346C121.901 88.0206 121.59 86.8477 120.673 86.3151ZM156.035 118.138C156.786 117.391 158.004 117.391 158.755 118.138L176.436 135.731C177.188 136.479 177.188 137.692 176.436 138.439C175.685 139.187 174.468 139.187 173.716 138.439L156.035 120.847C155.284 120.099 155.284 118.886 156.035 118.138Z"
        fill={gradientFill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M109.604 106.405L109.617 106.605L109.891 106.586L109.789 106.331L109.604 106.405ZM152.129 76.7696L151.997 76.9195L151.997 76.9195L152.129 76.7696ZM152.292 79.4735L152.441 79.6066L152.441 79.6066L152.292 79.4735ZM149.577 79.6352L149.709 79.4853L149.709 79.4853L149.577 79.6352ZM155.413 87.6792L155.597 87.6005L155.597 87.6005L155.413 87.6792ZM156.429 85.1665L156.507 85.3506L156.507 85.3506L156.429 85.1665ZM158.953 86.1775L159.137 86.0987L159.137 86.0987L158.953 86.1775ZM111.571 110.345L111.742 110.241L111.679 110.137L111.557 110.146L111.571 110.345ZM38.2363 115.4L38.2491 115.6L38.25 115.6L38.2363 115.4ZM38.234 115.401L38.2213 115.201L38.2211 115.201L38.234 115.401ZM27.7162 106.228L27.9158 106.215L27.7162 106.228ZM23.0208 33.5705L23.2203 33.5576L23.2203 33.5576L23.0208 33.5705ZM32.2725 23.1164L32.2854 23.316L32.2854 23.316L32.2725 23.1164ZM126.334 17.0214L126.347 17.2209L126.347 17.2209L126.334 17.0214ZM136.854 26.1942L136.655 26.2071L136.655 26.2071L136.854 26.1942ZM139.033 59.9064L138.833 59.9193L138.833 59.9193L139.033 59.9064ZM137.118 62.0893L137.131 62.2889L137.131 62.2889L137.118 62.0893ZM134.938 60.1718L134.738 60.1847L134.738 60.1847L134.938 60.1718ZM132.759 26.4595L132.959 26.4466L132.959 26.4466L132.759 26.4595ZM126.596 21.0788L126.583 20.8792L126.583 20.8792L126.596 21.0788ZM32.5347 27.1739L32.5476 27.3735L32.5476 27.3735L32.5347 27.1739ZM27.1156 33.3051L27.3152 33.2922L27.3152 33.2922L27.1156 33.3051ZM31.8111 105.962L31.6115 105.975L31.6115 105.975L31.8111 105.962ZM37.9741 111.343L37.987 111.543L37.9872 111.543L37.9741 111.343ZM37.9764 111.343L37.9895 111.542L37.9902 111.542L37.9764 111.343ZM49.6831 41.9259L49.8549 42.0283L49.8554 42.0275L49.6831 41.9259ZM49.6806 41.9301L49.852 42.0332L49.8524 42.0325L49.6806 41.9301ZM59.015 36.2102L59.0021 36.0106L59.0021 36.0106L59.015 36.2102ZM71.4242 47.0065L71.6238 46.9936L71.6238 46.9936L71.4242 47.0065ZM71.8636 53.8051L71.664 53.818L71.664 53.818L71.8636 53.8051ZM60.9475 66.1128L60.9604 66.3124L60.9604 66.3124L60.9475 66.1128ZM48.5383 55.3166L48.3387 55.3295L48.3387 55.3295L48.5383 55.3166ZM48.0989 48.5179L47.8994 48.5308L47.8994 48.5308L48.0989 48.5179ZM53.2134 43.9936L53.3841 44.0979L53.3859 44.095L53.2134 43.9936ZM53.2212 43.9804L53.3936 44.0817L53.3936 44.0817L53.2212 43.9804ZM53.2097 43.9997L53.039 43.8955L53.0384 43.8965L53.2097 43.9997ZM52.1938 48.2526L51.9942 48.2655L51.9942 48.2655L52.1938 48.2526ZM52.6332 55.0512L52.4336 55.0641L52.4336 55.0641L52.6332 55.0512ZM60.6853 62.0554L60.6982 62.2549L60.6982 62.2549L60.6853 62.0554ZM67.7687 54.0704L67.9683 54.0575L67.9683 54.0575L67.7687 54.0704ZM67.3293 47.2718L67.1298 47.2847L67.1298 47.2847L67.3293 47.2718ZM59.2772 40.2677L59.2643 40.0681L59.2643 40.0681L59.2772 40.2677ZM81.1124 87.7658L80.9645 87.6311L80.9645 87.6311L81.1124 87.7658ZM81.2155 87.1626L81.3997 87.0847L81.3997 87.0847L81.2155 87.1626ZM77.6167 90.9887L77.7387 91.1472L77.7387 91.1472L77.6167 90.9887ZM77.2497 93.8382L77.092 93.9612L77.092 93.9612L77.2497 93.8382ZM80.1308 94.1988L80.0088 94.0403L80.0088 94.0403L80.1308 94.1988ZM85.2836 89.1788L85.1285 89.0526L85.1284 89.0526L85.2836 89.1788ZM85.6336 87.2593L85.444 87.3231L85.444 87.3231L85.6336 87.2593ZM61.2639 71.0078L61.251 70.8083L61.251 70.8083L61.2639 71.0078ZM39.1892 90.2689L39.3854 90.3077L39.3854 90.3077L39.1892 90.2689ZM39.7847 92.1285L39.6473 92.2738L39.6473 92.2738L39.7847 92.1285ZM63.1762 100.599L63.1892 100.799L63.1892 100.799L63.1762 100.599ZM70.2972 99.2977L70.3567 99.4886L70.3567 99.4886L70.2972 99.2977ZM71.642 96.7499L71.4513 96.81L71.4513 96.81L71.642 96.7499ZM69.0701 95.4193L69.1297 95.6102L69.1297 95.6102L69.0701 95.4193ZM62.914 96.5416L62.9011 96.342L62.9011 96.342L62.914 96.5416ZM43.7383 90.1868L43.8675 90.0342L43.8675 90.0341L43.7383 90.1868ZM43.5583 89.6017L43.3656 89.5483L43.3656 89.5483L43.5583 89.6017ZM61.5261 75.0653L61.5132 74.8657L61.5132 74.8657L61.5261 75.0653ZM90.9286 37.5559L90.9157 37.3564L90.9157 37.3564L90.9286 37.5559ZM89.0123 39.7174L89.2119 39.7045L89.2119 39.7045L89.0123 39.7174ZM119.67 35.6936L119.657 35.494L119.657 35.494L119.67 35.6936ZM121.848 37.5896L121.649 37.6025L121.649 37.6025L121.848 37.5896ZM119.932 39.751L119.919 39.5514L119.919 39.5514L119.932 39.751ZM91.1908 41.6134L91.1779 41.4138L91.1779 41.4138L91.1908 41.6134ZM90.0184 55.2867L89.8188 55.2996L89.8188 55.2996L90.0184 55.2867ZM91.9347 53.1253L91.9218 52.9257L91.9218 52.9257L91.9347 53.1253ZM92.1969 57.1828L92.2098 57.3824L92.2098 57.3824L92.1969 57.1828ZM113.1 55.8283L113.087 55.6288L113.087 55.6288L113.1 55.8283ZM115.016 53.6669L115.215 53.654L115.215 53.654L115.016 53.6669ZM112.837 51.7709L112.85 51.9704L112.85 51.9704L112.837 51.7709ZM118.042 87.004L117.87 86.9028L117.87 86.9028L118.042 87.004ZM120.673 86.3151L120.773 86.1421L120.773 86.1421L120.673 86.3151ZM120.289 109.256L120.138 109.387L120.138 109.387L120.289 109.256ZM123.001 109.459L122.871 109.307L122.871 109.307L123.001 109.459ZM123.205 106.758L123.054 106.889L123.054 106.889L123.205 106.758ZM121.365 88.9346L121.538 89.0358L121.538 89.0358L121.365 88.9346ZM158.755 118.138L158.896 117.996L158.896 117.996L158.755 118.138ZM156.035 118.138L155.894 117.996L155.894 117.996L156.035 118.138ZM176.436 135.731L176.577 135.589L176.577 135.589L176.436 135.731ZM176.436 138.439L176.577 138.581L176.577 138.581L176.436 138.439ZM173.716 138.439L173.575 138.581L173.575 138.581L173.716 138.439ZM156.035 120.847L155.894 120.989L155.894 120.989L156.035 120.847ZM109.789 106.331C108.591 103.327 107.932 100.051 107.932 96.6219H107.532C107.532 100.103 108.201 103.429 109.418 106.479L109.789 106.331ZM107.932 96.6219C107.932 82.0757 119.79 70.2772 134.41 70.2772V69.8772C119.571 69.8772 107.532 81.8529 107.532 96.6219H107.932ZM134.41 70.2772C141.16 70.2772 147.309 72.7817 151.997 76.9195L152.262 76.6196C147.503 72.4196 141.261 69.8772 134.41 69.8772V70.2772ZM151.997 76.9195C152.709 77.548 152.774 78.6319 152.143 79.3404L152.441 79.6066C153.221 78.7325 153.14 77.3947 152.262 76.6196L151.997 76.9195ZM152.143 79.3404C151.511 80.049 150.421 80.1139 149.709 79.4853L149.445 79.7852C150.322 80.5593 151.663 80.4797 152.441 79.6066L152.143 79.3404ZM149.709 79.4853C145.627 75.8824 140.284 73.7071 134.41 73.7071V74.1071C140.183 74.1071 145.433 76.2444 149.445 79.7852L149.709 79.4853ZM134.41 73.7071C121.694 73.7071 111.38 83.9699 111.38 96.6219H111.78C111.78 84.1927 121.913 74.1071 134.41 74.1071V73.7071ZM111.38 96.6219C111.38 109.274 121.694 119.537 134.41 119.537V119.137C121.913 119.137 111.78 109.051 111.78 96.6219H111.38ZM134.41 119.537C147.125 119.537 157.44 109.274 157.44 96.6219H157.04C157.04 109.051 146.906 119.137 134.41 119.137V119.537ZM157.44 96.6219C157.44 93.4264 156.781 90.3649 155.597 87.6005L155.23 87.7579C156.392 90.4735 157.04 93.4815 157.04 96.6219H157.44ZM155.597 87.6005C155.224 86.7292 155.632 85.7219 156.507 85.3506L156.351 84.9823C155.273 85.4395 154.769 86.6818 155.23 87.7579L155.597 87.6005ZM156.507 85.3506C157.383 84.9793 158.396 85.3849 158.769 86.2562L159.137 86.0987C158.676 85.0236 157.429 84.5256 156.351 84.9823L156.507 85.3506ZM158.769 86.2562C160.131 89.4381 160.887 92.9563 160.887 96.6219H161.287C161.287 92.9011 160.52 89.3295 159.137 86.0987L158.769 86.2562ZM160.887 96.6219C160.887 111.168 149.029 122.967 134.41 122.967V123.367C149.248 123.367 161.287 111.391 161.287 96.6219H160.887ZM134.41 122.967C124.799 122.967 116.382 117.868 111.742 110.241L111.4 110.449C116.11 118.191 124.655 123.367 134.41 123.367V122.967ZM111.557 110.146L38.2225 115.201L38.25 115.6L111.585 110.545L111.557 110.146ZM38.2235 115.201L38.2213 115.201L38.2468 115.6L38.2491 115.6L38.2235 115.201ZM38.2211 115.201C32.8586 115.547 28.259 111.526 27.9158 106.215L27.5166 106.24C27.8743 111.775 32.6665 115.961 38.2469 115.6L38.2211 115.201ZM27.9158 106.215L23.2203 33.5576L22.8212 33.5834L27.5166 106.24L27.9158 106.215ZM23.2203 33.5576C22.877 28.2455 26.9219 23.6636 32.2854 23.316L32.2595 22.9169C26.6781 23.2785 22.4635 28.0483 22.8212 33.5834L23.2203 33.5576ZM32.2854 23.316L126.347 17.2209L126.321 16.8218L32.2595 22.9169L32.2854 23.316ZM126.347 17.2209C131.711 16.8734 136.311 20.895 136.655 26.2071L137.054 26.1813C136.696 20.6462 131.903 16.4601 126.321 16.8218L126.347 17.2209ZM136.655 26.2071L138.833 59.9193L139.233 59.8935L137.054 26.1813L136.655 26.2071ZM138.833 59.9193C138.899 60.9416 138.125 61.8236 137.105 61.8897L137.131 62.2889C138.372 62.2084 139.313 61.1358 139.233 59.8935L138.833 59.9193ZM137.105 61.8897C136.085 61.9558 135.204 61.1812 135.138 60.1589L134.738 60.1847C134.819 61.4269 135.89 62.3693 137.131 62.2889L137.105 61.8897ZM135.138 60.1589L132.959 26.4466L132.56 26.4724L134.738 60.1847L135.138 60.1589ZM132.959 26.4466C132.746 23.1436 129.894 20.6647 126.583 20.8792L126.609 21.2784C129.703 21.078 132.361 23.3925 132.56 26.4724L132.959 26.4466ZM126.583 20.8792L32.5217 26.9743L32.5476 27.3735L126.609 21.2784L126.583 20.8792ZM32.5217 26.9743C29.2108 27.1889 26.7026 30.015 26.916 33.318L27.3152 33.2922C27.1162 30.2123 29.4544 27.5739 32.5476 27.3735L32.5217 26.9743ZM26.916 33.318L31.6115 105.975L32.0106 105.949L27.3152 33.2922L26.916 33.318ZM31.6115 105.975C31.8249 109.278 34.676 111.757 37.987 111.543L37.9612 111.143C34.8679 111.344 32.2097 109.029 32.0106 105.949L31.6115 105.975ZM37.9872 111.543L37.9895 111.542L37.9633 111.143L37.961 111.143L37.9872 111.543ZM37.9902 111.542L109.617 106.605L109.59 106.206L37.9627 111.143L37.9902 111.542ZM49.5112 41.8236L49.5087 41.8278L49.8524 42.0325L49.8549 42.0283L49.5112 41.8236ZM59.0021 36.0106C54.9143 36.2755 51.4365 38.5564 49.5108 41.8244L49.8554 42.0275C51.7158 38.8702 55.0762 36.6658 59.028 36.4098L59.0021 36.0106ZM71.6238 46.9936C71.2035 40.4906 65.5424 35.5868 59.0021 36.0106L59.028 36.4098C65.3518 36 70.8189 40.7409 71.2246 47.0194L71.6238 46.9936ZM72.0631 53.7922L71.6238 46.9936L71.2246 47.0194L71.664 53.818L72.0631 53.7922ZM60.9604 66.3124C67.5007 65.8886 72.4834 60.2952 72.0631 53.7922L71.664 53.818C72.0697 60.0965 67.2584 65.5035 60.9345 65.9133L60.9604 66.3124ZM48.3387 55.3295C48.759 61.8325 54.4201 66.7362 60.9604 66.3124L60.9345 65.9133C54.6107 66.323 49.1436 61.5822 48.7379 55.3037L48.3387 55.3295ZM47.8994 48.5308L48.3387 55.3295L48.7379 55.3037L48.2985 48.505L47.8994 48.5308ZM49.5091 41.8271C48.3321 43.7856 47.743 46.1119 47.8994 48.5308L48.2985 48.505C48.1475 46.1677 48.7167 43.9221 49.852 42.0332L49.5091 41.8271ZM53.3859 44.095L53.3936 44.0817L53.0488 43.879L53.041 43.8923L53.3859 44.095ZM53.3804 44.104L53.3841 44.0979L53.0428 43.8894L53.039 43.8955L53.3804 44.104ZM52.3934 48.2397C52.2951 46.7193 52.6671 45.2876 53.381 44.103L53.0384 43.8965C52.2825 45.1507 51.8907 46.6634 51.9942 48.2655L52.3934 48.2397ZM52.8327 55.0383L52.3934 48.2397L51.9942 48.2655L52.4336 55.0641L52.8327 55.0383ZM60.6723 61.8558C56.6042 62.1194 53.0933 59.0703 52.8327 55.0383L52.4336 55.0641C52.7086 59.3205 56.4136 62.5326 60.6982 62.2549L60.6723 61.8558ZM67.5691 54.0833C67.8297 58.1153 64.7405 61.5922 60.6723 61.8558L60.6982 62.2549C64.9828 61.9773 68.2433 58.3139 67.9683 54.0575L67.5691 54.0833ZM67.1298 47.2847L67.5691 54.0833L67.9683 54.0575L67.5289 47.2589L67.1298 47.2847ZM59.2902 40.4672C63.3583 40.2036 66.8692 43.2528 67.1298 47.2847L67.5289 47.2589C67.2539 43.0025 63.5489 39.7904 59.2643 40.0681L59.2902 40.4672ZM53.3936 44.0817C54.5898 42.0464 56.7467 40.6321 59.2902 40.4672L59.2643 40.0681C56.5848 40.2417 54.3102 41.7326 53.0488 43.8791L53.3936 44.0817ZM81.2603 87.9004C81.4618 87.679 81.5162 87.3605 81.3997 87.0847L81.0312 87.2404C81.0871 87.3726 81.061 87.5252 80.9645 87.6311L81.2603 87.9004ZM77.7387 91.1472C79.0003 90.1762 80.1847 89.0822 81.2603 87.9004L80.9645 87.6311C79.9044 88.7959 78.7373 89.8739 77.4947 90.8302L77.7387 91.1472ZM77.4074 93.7152C76.7856 92.9178 76.9308 91.7689 77.7387 91.1472L77.4947 90.8302C76.5117 91.5867 76.3332 92.988 77.092 93.9612L77.4074 93.7152ZM80.0088 94.0403C79.1975 94.6647 78.0319 94.5161 77.4074 93.7152L77.092 93.9612C77.8523 94.9362 79.2679 95.1153 80.2528 94.3573L80.0088 94.0403ZM85.1284 89.0526C83.63 90.8946 81.8986 92.5859 80.0088 94.0403L80.2528 94.3573C82.1675 92.8837 83.921 91.1707 85.4387 89.305L85.1284 89.0526ZM85.444 87.3231C85.6426 87.9138 85.5247 88.5656 85.1285 89.0526L85.4387 89.305C85.9212 88.7119 86.0656 87.9168 85.8232 87.1956L85.444 87.3231ZM61.2768 71.2074C72.3593 70.4893 82.1013 77.378 85.444 87.3231L85.8232 87.1956C82.4237 77.0819 72.5179 70.0782 61.251 70.8083L61.2768 71.2074ZM39.3854 90.3077C41.4202 80.0141 50.1943 71.9256 61.2768 71.2074L61.251 70.8083C49.984 71.5383 41.0623 79.7621 38.993 90.2301L39.3854 90.3077ZM39.9222 91.9832C39.4658 91.5514 39.2644 90.9197 39.3854 90.3077L38.993 90.2301C38.8453 90.9773 39.0914 91.7479 39.6473 92.2738L39.9222 91.9832ZM63.1633 100.4C54.2033 100.98 45.9195 97.6573 39.9222 91.9832L39.6473 92.2738C45.7212 98.0202 54.1124 101.387 63.1892 100.799L63.1633 100.4ZM70.2376 99.1068C67.9797 99.811 65.6026 100.241 63.1633 100.4L63.1892 100.799C65.6584 100.639 68.0669 100.203 70.3567 99.4886L70.2376 99.1068ZM71.4513 96.81C71.754 97.7702 71.2172 98.8012 70.2376 99.1068L70.3567 99.4886C71.5456 99.1178 72.2027 97.8631 71.8328 96.6898L71.4513 96.81ZM69.1297 95.6102C70.1112 95.304 71.1479 95.8477 71.4513 96.81L71.8328 96.6898C71.4625 95.5152 70.2005 94.8572 69.0106 95.2283L69.1297 95.6102ZM62.9269 96.7412C65.0862 96.6013 67.1696 96.2215 69.1297 95.6102L69.0106 95.2283C67.0824 95.8297 65.0305 96.2041 62.9011 96.342L62.9269 96.7412ZM43.609 90.3394C48.7861 94.7251 55.6048 97.2157 62.9269 96.7412L62.9011 96.342C55.6873 96.8095 48.9695 94.3563 43.8675 90.0342L43.609 90.3394ZM43.3656 89.5483C43.2855 89.8368 43.3805 90.1458 43.609 90.3394L43.8675 90.0341C43.7582 89.9415 43.7126 89.7936 43.751 89.6552L43.3656 89.5483ZM61.5132 74.8657C52.6919 75.4373 45.5868 81.5438 43.3656 89.5483L43.751 89.6552C45.9279 81.8107 52.8917 75.8252 61.539 75.2649L61.5132 74.8657ZM81.3997 87.0847C78.1669 79.4331 70.3348 74.2941 61.5132 74.8657L61.539 75.2649C70.1867 74.7045 77.8631 79.7417 81.0312 87.2404L81.3997 87.0847ZM90.9157 37.3564C89.6715 37.437 88.7334 38.5028 88.8127 39.7303L89.2119 39.7045C89.1469 38.6998 89.9154 37.822 90.9415 37.7555L90.9157 37.3564ZM119.657 35.494L90.9157 37.3564L90.9415 37.7555L119.683 35.8931L119.657 35.494ZM122.048 37.5767C121.968 36.3493 120.901 35.4134 119.657 35.494L119.683 35.8931C120.709 35.8266 121.584 36.5979 121.649 37.6025L122.048 37.5767ZM119.945 39.9506C121.189 39.87 122.127 38.8042 122.048 37.5767L121.649 37.6025C121.714 38.6072 120.945 39.485 119.919 39.5514L119.945 39.9506ZM91.2038 41.813L119.945 39.9506L119.919 39.5514L91.1779 41.4138L91.2038 41.813ZM88.8127 39.7303C88.892 40.9577 89.9595 41.8936 91.2038 41.813L91.1779 41.4138C90.1518 41.4803 89.2768 40.7091 89.2119 39.7045L88.8127 39.7303ZM90.2179 55.2738C90.153 54.2692 90.9215 53.3914 91.9476 53.3249L91.9218 52.9257C90.6776 53.0064 89.7395 54.0722 89.8188 55.2996L90.2179 55.2738ZM92.184 56.9832C91.1579 57.0497 90.2829 56.2785 90.2179 55.2738L89.8188 55.2996C89.8981 56.5271 90.9656 57.463 92.2098 57.3824L92.184 56.9832ZM113.087 55.6288L92.184 56.9832L92.2098 57.3824L113.112 56.0279L113.087 55.6288ZM114.816 53.6798C114.881 54.6845 114.113 55.5623 113.087 55.6288L113.112 56.0279C114.357 55.9473 115.295 54.8815 115.215 53.654L114.816 53.6798ZM112.85 51.9704C113.876 51.904 114.751 52.6752 114.816 53.6798L115.215 53.654C115.136 52.4266 114.069 51.4907 112.824 51.5713L112.85 51.9704ZM91.9476 53.3249L112.85 51.9704L112.824 51.5713L91.9218 52.9257L91.9476 53.3249ZM118.215 87.1052C118.695 86.2871 119.75 86.0107 120.572 86.488L120.773 86.1421C119.761 85.5547 118.461 85.894 117.87 86.9028L118.215 87.1052ZM120.44 109.125C112.711 100.183 115.996 90.8889 118.215 87.1052L117.87 86.9028C115.61 90.7575 112.247 100.258 120.138 109.387L120.44 109.125ZM122.871 109.307C122.149 109.925 121.061 109.843 120.44 109.125L120.138 109.387C120.903 110.272 122.242 110.372 123.131 109.611L122.871 109.307ZM123.054 106.889C123.675 107.607 123.593 108.69 122.871 109.307L123.131 109.611C124.021 108.85 124.123 107.513 123.357 106.627L123.054 106.889ZM121.193 88.8335C119.335 92.0013 116.696 99.5334 123.054 106.889L123.357 106.627C117.159 99.4564 119.723 92.1302 121.538 89.0358L121.193 88.8335ZM120.572 86.488C121.395 86.9653 121.672 88.0154 121.193 88.8335L121.538 89.0358C122.13 88.0258 121.786 86.7302 120.773 86.1421L120.572 86.488ZM158.896 117.996C158.067 117.171 156.723 117.171 155.894 117.996L156.176 118.28C156.85 117.61 157.941 117.61 158.614 118.28L158.896 117.996ZM176.577 135.589L158.896 117.996L158.614 118.28L176.295 135.872L176.577 135.589ZM176.577 138.581C177.408 137.755 177.408 136.415 176.577 135.589L176.295 135.872C176.968 136.542 176.968 137.628 176.295 138.298L176.577 138.581ZM173.575 138.581C174.405 139.406 175.748 139.406 176.577 138.581L176.295 138.298C175.622 138.967 174.531 138.967 173.858 138.298L173.575 138.581ZM155.894 120.989L173.575 138.581L173.858 138.298L156.176 120.705L155.894 120.989ZM155.894 117.996C155.064 118.822 155.064 120.162 155.894 120.989L156.176 120.705C155.503 120.035 155.503 118.949 156.176 118.28L155.894 117.996Z"
        fill="white"
      />
      <Defs>
        <LinearGradient
          id={gradientId}
          x1="28.841%"
          x2="71.159%"
          y1="0%"
          y2="100%"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color2} />
          <Stop offset="1" stopColor={color} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export const BicolorIdCardWithMagnifyingGlass = styled(BicolorIdCardWithMagnifyingGlassSvg).attrs(
  ({ color, color2, size, theme }) => ({
    color: color ?? theme.colors.primary,
    color2: color2 ?? color ?? theme.colors.secondary,
    size: size ?? theme.illustrations.sizes.medium,
  })
)``
