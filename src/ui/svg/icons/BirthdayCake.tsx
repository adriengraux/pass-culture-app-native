import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { IconInterface } from 'ui/svg/icons/types'

const BirthdayCakeSvg: React.FunctionComponent<IconInterface> = ({ size, color, testID }) => {
  const height = typeof size === 'string' ? size : ((size as number) * 156) / 200
  return (
    <Svg width={size} height={height} viewBox="0 0 200 156" testID={testID} aria-hidden>
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M102.311 10.4342C101.984 9.57072 101.16 9 100.239 9C99.3193 9 98.4948 9.57072 98.1675 10.4342L91.5169 27.9813C91.4211 28.2342 91.3719 28.5024 91.3719 28.773C91.3719 32.9844 94.1528 36.6256 98.0226 37.6491V40.1613H95.8057C93.357 40.1613 91.3719 42.1543 91.3719 44.6129V62.4193C91.3719 62.8036 91.4204 63.1765 91.5116 63.5322H69.906C62.7872 63.5322 57.0105 69.2918 57.0105 76.4141V88.4891C57.0105 92.2755 58.6432 95.6768 61.2422 98.0322H53.9889C46.9526 98.0322 41.253 103.772 41.253 110.847V120.569V134.185C41.253 137.379 42.4164 140.303 44.341 142.548H10.2169C8.99253 142.548 8 143.545 8 144.774C8 146.003 8.99253 147 10.2169 147H53.9691C53.9757 147 53.9823 147 53.9889 147L114.41 147H141.012L143.794 147C143.801 147 143.807 147 143.814 147H167.614C168.839 147 169.831 146.003 169.831 144.774C169.831 143.545 168.839 142.548 167.614 142.548H153.444C155.368 140.302 156.53 137.379 156.53 134.185V110.847C156.53 103.773 150.836 98.0322 143.794 98.0322H139.234C141.834 95.6769 143.468 92.2759 143.468 88.4891V76.4141C143.468 69.2908 137.684 63.5322 130.572 63.5322H108.967C109.058 63.1765 109.107 62.8036 109.107 62.4193V44.6129C109.107 42.1543 107.122 40.1613 104.673 40.1613H102.456V37.6491C106.325 36.6257 109.107 32.9855 109.107 28.773C109.107 28.5024 109.058 28.2342 108.962 27.9813L102.311 10.4342ZM143.81 142.548C148.384 142.54 152.096 138.801 152.096 134.185V110.847C152.096 106.221 148.376 102.484 143.794 102.484H53.9889C49.411 102.484 45.6868 106.221 45.6868 110.847V118.343H72.2892C73.5135 118.343 74.506 119.339 74.506 120.569C74.506 121.798 73.5135 122.794 72.2892 122.794H45.6868V134.185C45.6868 138.801 49.4031 142.54 53.9729 142.548C53.9782 142.548 53.9836 142.548 53.9889 142.548L114.41 142.548C114.412 142.548 114.415 142.548 114.418 142.548H141.004C141.007 142.548 141.009 142.548 141.012 142.548L143.794 142.548C143.8 142.548 143.805 142.548 143.81 142.548ZM95.8057 44.6129H100.231L100.239 44.6129L100.248 44.6129H104.673V62.4193H95.8057V44.6129ZM100.239 33.4839C97.9789 33.4839 96.0001 31.6425 95.8191 29.1466L100.239 17.484L104.66 29.1466C104.479 31.643 102.499 33.4839 100.239 33.4839ZM61.4443 76.4141C61.4443 71.773 65.2133 67.9839 69.906 67.9839H130.572C135.26 67.9839 139.035 71.774 139.035 76.4141V88.4891C139.035 93.1292 135.26 96.9193 130.572 96.9193H69.906C65.2133 96.9193 61.4443 93.1302 61.4443 88.4891V83.5671L87.7841 83.8426C89.0084 83.8554 90.0112 82.8693 90.024 81.6401C90.0367 80.4109 89.0546 79.4041 87.8303 79.3913L61.4443 79.1153V76.4141ZM100 81.6169C100 80.3877 100.993 79.3911 102.217 79.3911H106.651C107.875 79.3911 108.867 80.3877 108.867 81.6169C108.867 82.8462 107.875 83.8427 106.651 83.8427H102.217C100.993 83.8427 100 82.8462 100 81.6169ZM85.5904 120.569C85.5904 119.339 86.5829 118.343 87.8072 118.343H92.241C93.4653 118.343 94.4578 119.339 94.4578 120.569C94.4578 121.798 93.4653 122.794 92.241 122.794H87.8072C86.5829 122.794 85.5904 121.798 85.5904 120.569ZM107.759 120.569C107.759 119.339 108.752 118.343 109.976 118.343H114.41C115.634 118.343 116.627 119.339 116.627 120.569C116.627 121.798 115.634 122.794 114.41 122.794H109.976C108.752 122.794 107.759 121.798 107.759 120.569ZM178.699 142.548C177.474 142.548 176.482 143.545 176.482 144.774C176.482 146.003 177.474 147 178.699 147H189.783C191.007 147 192 146.003 192 144.774C192 143.545 191.007 142.548 189.783 142.548H178.699Z"
      />
    </Svg>
  )
}

export const BirthdayCake = styled(BirthdayCakeSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.illustrations.sizes.medium,
}))``