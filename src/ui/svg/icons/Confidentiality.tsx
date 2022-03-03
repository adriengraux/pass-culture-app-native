import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { IconInterface } from './types'

const ConfidentialitySvg: React.FunctionComponent<IconInterface> = ({ size, color, testID }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" testID={testID} aria-hidden>
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 3.5C14.091 3.5 11 6.81762 11 10.8192V14.3163C11 18.3088 14.092 21.6254 18 21.6254C21.909 21.6254 25 18.3078 25 14.3062V10.8192C25 6.81762 21.909 3.5 18 3.5ZM13 10.8192C13 7.82673 15.289 5.50071 18 5.50071C20.711 5.50071 23 7.82673 23 10.8192V14.3062C23 17.2987 20.711 19.6247 18 19.6247C15.288 19.6247 13 17.2976 13 14.3163V10.8192ZM18 26.0093C12.1015 26.0093 7.15148 30.4027 6.06414 36.2772C8.82881 39.4532 12.725 41.5164 17.0894 41.7697C17.3908 41.7872 17.6944 41.7961 18 41.7961H18L18.0069 41.7961C18.993 41.7961 20.4011 41.7931 21.6769 41.5604C22.3142 41.4441 22.8701 41.2784 23.3011 41.0566C23.6334 40.8856 23.8574 40.6995 24 40.5061V32.2247C24 30.9522 24.9082 29.8865 26.1201 29.6645V29.03C26.1201 24.655 29.6409 21.0961 34.0001 21.0961C38.3594 21.0961 41.8801 24.655 41.8801 29.03V29.6645C43.0919 29.8866 44 30.9523 44 32.2247V42.8973C44 44.3296 42.8493 45.5 41.41 45.5H35.6C35.5577 45.5 35.5159 45.4974 35.475 45.4923C35.4341 45.4974 35.3923 45.5 35.35 45.5H26.59C25.1653 45.5 24.0233 44.3532 24.0004 42.9407C23.3839 43.2247 22.7009 43.4073 22.0356 43.5286C20.5651 43.7969 18.9918 43.7968 18.0258 43.7968H18C12.4702 43.7968 7.545 41.2277 4.22929 37.2158C4.0791 37.034 3.9989 36.8064 4.00001 36.5736C3.99968 36.503 4.00677 36.4326 4.02118 36.3634C5.09583 29.3929 10.9105 24.0085 18 24.0085C19.52 24.0085 20.9866 24.2585 22.3561 24.7149C22.8801 24.8895 23.1633 25.456 22.9887 25.9802C22.8142 26.5043 22.2479 26.7877 21.7239 26.613C20.5534 26.2229 19.3 26.0093 18 26.0093ZM39.8801 29.622H28.1201V29.03C28.1201 25.7459 30.7594 23.0968 34.0001 23.0968C37.2409 23.0968 39.8801 25.7459 39.8801 29.03V29.622ZM26.59 31.6227H40.7375C40.7841 31.6294 40.8317 31.6328 40.8801 31.6328C40.9285 31.6328 40.9762 31.6294 41.0228 31.6227H41.41C41.7307 31.6227 42 31.8834 42 32.2247V42.8973C42 43.2386 41.7307 43.4993 41.41 43.4993H35.6C35.5577 43.4993 35.5159 43.5019 35.475 43.507C35.4341 43.5019 35.3923 43.4993 35.35 43.4993H26.59C26.2693 43.4993 26 43.2386 26 42.8973V40.8029C26.0003 40.7887 26.0003 40.7745 26 40.7603V32.2247C26 31.8834 26.2693 31.6227 26.59 31.6227ZM35.8499 37.7373C35.8499 38.767 35.0216 39.6018 33.9999 39.6018C32.9782 39.6018 32.1499 38.767 32.1499 37.7373C32.1499 36.7076 32.9782 35.8729 33.9999 35.8729C35.0216 35.8729 35.8499 36.7076 35.8499 37.7373Z"
    />
  </Svg>
)

export const Confidentiality = styled(ConfidentialitySvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``
