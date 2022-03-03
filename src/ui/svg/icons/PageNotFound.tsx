import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { IconInterface } from 'ui/svg/icons/types'

const PageNotFoundSvg: React.FunctionComponent<IconInterface> = ({ size, color, testID }) => {
  const height = typeof size === 'string' ? size : ((size as number) * 156) / 200
  return (
    <Svg width={size} height={height} viewBox="0 0 200 156" testID={testID} aria-hidden>
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114.681 107.795C114.681 120.901 125.176 131.521 138.128 131.521C151.079 131.521 161.574 120.901 161.574 107.795C161.574 94.6881 151.079 84.0677 138.128 84.0677C134.084 84.0677 130.279 85.1068 126.953 86.9365C125.88 87.5272 124.536 87.1252 123.952 86.0386C123.369 84.952 123.766 83.5923 124.84 83.0016C128.796 80.8251 133.325 79.5891 138.128 79.5891C141.409 79.5891 144.557 80.1625 147.481 81.2158V51.8431H135.287C134.05 51.8431 133.047 50.8321 133.047 49.585C133.047 48.3378 134.05 47.3268 135.287 47.3268H147.481V43.6234C147.481 36.4494 142.235 31.018 136.262 31.018H50.1959C44.1966 31.018 38.9772 36.4457 38.9772 43.6234V47.3268H119.359C120.596 47.3268 121.599 48.3378 121.599 49.585C121.599 50.8321 120.596 51.8431 119.359 51.8431H38.9772V103.72C38.9772 110.897 44.1966 116.325 50.1959 116.325H99.2315C100.606 116.325 101.72 117.448 101.72 118.834C101.72 120.22 100.606 121.343 99.2315 121.343H50.1959C41.0315 121.343 34 113.23 34 103.72V43.6234C34 34.1134 41.0315 25.9999 50.1959 25.9999H136.262C145.393 25.9999 152.458 34.1097 152.458 43.6234V82.142C152.458 82.5992 152.337 83.0279 152.125 83.397C160.423 88.2819 166 97.3779 166 107.795C166 123.374 153.524 136 138.128 136C122.732 136 110.255 123.374 110.255 107.795C110.255 103.005 111.436 98.4743 113.537 94.518C114.115 93.4286 115.457 93.0201 116.534 93.6055C117.61 94.191 118.014 95.5487 117.435 96.6381C115.675 99.9524 114.681 103.756 114.681 107.795ZM114.41 94.9927C114.473 94.8744 114.552 94.7706 114.643 94.6827C114.569 94.7612 114.504 94.8508 114.451 94.9509C112.426 98.7635 111.287 103.131 111.287 107.753C111.287 122.779 123.32 134.955 138.169 134.955C145.584 134.955 152.296 131.919 157.159 127.008C152.293 131.943 145.563 134.997 138.128 134.997C123.279 134.997 111.246 122.821 111.246 107.795C111.246 103.173 112.385 98.8053 114.41 94.9927ZM124.823 85.5596C124.553 85.0578 124.663 84.4505 125.053 84.0744C124.697 84.4526 124.604 85.0342 124.864 85.5178C125.187 86.1178 125.928 86.3398 126.521 86.0136C129.988 84.1063 133.955 83.0231 138.169 83.0231C151.668 83.0231 162.607 94.0924 162.607 107.753C162.607 114.592 159.864 120.783 155.431 125.259C159.84 120.786 162.565 114.613 162.565 107.795C162.565 94.1342 151.627 83.0649 138.128 83.0649C133.914 83.0649 129.947 84.1481 126.48 86.0554C125.887 86.3816 125.145 86.1596 124.823 85.5596ZM127.509 118.536C126.525 117.538 126.527 115.921 127.513 114.925L134.558 107.81L127.553 100.705C126.569 99.707 126.571 98.0902 127.558 97.0941C128.544 96.098 130.142 96.0998 131.126 97.0982L138.121 104.192L145.126 97.0574C146.108 96.0569 147.706 96.0517 148.694 97.0457C149.683 98.0397 149.688 99.6565 148.706 100.657L141.698 107.795L148.738 114.871C149.727 115.865 149.732 117.481 148.75 118.482C147.768 119.483 146.17 119.488 145.181 118.494L138.135 111.412L131.078 118.539C130.092 119.536 128.494 119.534 127.509 118.536ZM49.5 42.896C51.1569 42.896 52.5 41.5528 52.5 39.896C52.5 38.2391 51.1569 36.896 49.5 36.896C47.8431 36.896 46.5 38.2391 46.5 39.896C46.5 41.5528 47.8431 42.896 49.5 42.896ZM62.5 39.896C62.5 41.5528 61.1569 42.896 59.5 42.896C57.8431 42.896 56.5 41.5528 56.5 39.896C56.5 38.2391 57.8431 36.896 59.5 36.896C61.1569 36.896 62.5 38.2391 62.5 39.896ZM69.5 42.896C71.1569 42.896 72.5 41.5528 72.5 39.896C72.5 38.2391 71.1569 36.896 69.5 36.896C67.8431 36.896 66.5 38.2391 66.5 39.896C66.5 41.5528 67.8431 42.896 69.5 42.896Z"
      />
    </Svg>
  )
}

export const PageNotFound = styled(PageNotFoundSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.illustrations.sizes.medium,
}))``