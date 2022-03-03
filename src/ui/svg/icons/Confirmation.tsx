import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { IconInterface } from 'ui/svg/icons/types'

function ConfirmationSvg({ size, color, testID, opacity }: IconInterface): JSX.Element {
  return (
    <Svg width={size} height={size} testID={testID} viewBox="0 0 48 48" fill={color} aria-hidden>
      <Path
        opacity={opacity}
        d="M6.00046 6.5C6.00046 5.39299 6.89325 4.5 8.00318 4.5H36.0307C37.1406 4.5 38.0334 5.39299 38.0334 6.5V28.1783C36.5201 27.5707 34.8306 27.3443 33.1028 27.6007C27.9088 28.3617 24.3318 33.2023 25.0921 38.3852C25.8532 43.5738 30.6976 47.1597 35.8871 46.3894C36.801 46.2556 37.6629 45.9987 38.4699 45.6292C38.9722 45.3993 39.1929 44.8058 38.9628 44.3036C38.7328 43.8015 38.1392 43.5809 37.637 43.8109C37.0029 44.1012 36.3237 44.3043 35.5965 44.4106L35.5942 44.4109C31.4949 45.0199 27.6715 42.186 27.0714 38.0949C26.4704 33.9982 29.2991 30.179 33.3937 29.5795L33.3958 29.5792C37.4948 28.9702 41.3181 31.8039 41.9185 35.8946C42.1312 37.3565 41.9179 38.7757 41.3634 40.0242C41.1393 40.529 41.3668 41.1199 41.8717 41.344C42.3766 41.5681 42.9676 41.3406 43.1918 40.8358C43.8985 39.2445 44.1656 37.444 43.898 35.606L43.8979 35.6049C43.5091 32.9547 42.055 30.7227 40.0338 29.2756V6.5C40.0338 4.28701 38.244 2.5 36.0307 2.5H8.00318C5.78984 2.5 4 4.28701 4 6.5V42.5C4 44.713 5.78984 46.5 8.00318 46.5H22.5174C23.0698 46.5 23.5176 46.0523 23.5176 45.5C23.5176 44.9477 23.0698 44.5 22.5174 44.5H8.00318C6.89325 44.5 6.00046 43.607 6.00046 42.5V6.5ZM12.0078 10.5C11.4554 10.5 11.0076 10.9477 11.0076 11.5C11.0076 12.0523 11.4554 12.5 12.0078 12.5H32.0275C32.5799 12.5 33.0277 12.0523 33.0277 11.5C33.0277 10.9477 32.5799 10.5 32.0275 10.5H12.0078ZM11.0076 17.5C11.0076 16.9477 11.4554 16.5 12.0078 16.5H32.0275C32.5799 16.5 33.0277 16.9477 33.0277 17.5C33.0277 18.0523 32.5799 18.5 32.0275 18.5H12.0078C11.4554 18.5 11.0076 18.0523 11.0076 17.5ZM12.0078 22.5C11.4554 22.5 11.0076 22.9477 11.0076 23.5C11.0076 24.0523 11.4554 24.5 12.0078 24.5H24.0196C24.572 24.5 25.0198 24.0523 25.0198 23.5C25.0198 22.9477 24.572 22.5 24.0196 22.5H12.0078ZM39.4516 33.5832C39.842 33.9739 39.8418 34.607 39.451 34.9974L34.0057 40.4374C33.445 40.9976 32.5218 40.9976 31.9611 40.4374L29.5387 38.0174C29.1479 37.627 29.1477 36.9939 29.5382 36.6032C29.9286 36.2125 30.5619 36.2123 30.9527 36.6027L32.9834 38.6314L38.037 33.5827C38.4278 33.1923 39.0611 33.1925 39.4516 33.5832Z"
      />
    </Svg>
  )
}

export const Confirmation = styled(ConfirmationSvg).attrs(({ color, size, opacity, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
  opacity: opacity ?? 1,
}))``