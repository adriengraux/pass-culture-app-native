import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { IconInterface } from 'ui/svg/icons/types'

const UserBlockedSvg: React.FunctionComponent<IconInterface> = ({ size, color, testID }) => {
  const height = typeof size === 'string' ? size : ((size as number) * 156) / 200
  return (
    <Svg width={size} height={height} viewBox="0 0 200 156" testID={testID} aria-hidden>
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.55 19C71.5071 19 62.775 28.3999 62.775 39.7378V49.6461C62.775 60.9584 71.5099 70.3553 82.55 70.3553C93.5929 70.3553 102.325 60.9554 102.325 49.6175V39.7378C102.325 28.3999 93.5929 19 82.55 19ZM68.425 39.7378C68.425 31.2591 74.8914 24.6687 82.55 24.6687C90.2086 24.6687 96.675 31.2591 96.675 39.7378V49.6175C96.675 58.0962 90.2086 64.6866 82.55 64.6866C74.8886 64.6866 68.425 58.0932 68.425 49.6461V39.7378ZM82.55 82.7762C65.8868 82.7762 51.9029 95.2244 48.8312 111.869C57.1807 121.489 69.1836 127.506 82.5501 127.506L82.571 127.506C85.3568 127.506 89.3337 127.497 92.9372 126.838C94.7376 126.508 96.3079 126.039 97.5257 125.41C98.4645 124.926 99.0971 124.399 99.5 123.851V100.387C99.5 96.7814 102.066 93.7617 105.489 93.1327V91.3352C105.489 78.9391 115.435 68.8556 127.75 68.8556C140.065 68.8556 150.011 78.9391 150.011 91.3352V93.1328C153.435 93.7621 156 96.7816 156 100.387V130.626C156 134.684 152.749 138 148.683 138H132.27C132.15 138 132.033 137.993 131.917 137.978C131.801 137.993 131.683 138 131.564 138H106.817C102.792 138 99.5659 134.751 99.501 130.749C97.7594 131.553 95.8301 132.071 93.9507 132.414C89.7964 133.174 85.3518 133.174 82.623 133.174H82.55C66.9282 133.174 53.0146 125.895 43.6478 114.528C43.2235 114.013 42.9969 113.368 43 112.709C42.9991 112.509 43.0191 112.309 43.0598 112.113C46.0957 92.3631 62.5223 77.1076 82.55 77.1076C86.8441 77.1076 90.9873 77.8157 94.856 79.1089C96.3362 79.6037 97.1363 81.2087 96.6432 82.6938C96.15 84.1789 94.5503 84.9817 93.0701 84.4869C89.7633 83.3816 86.2225 82.7762 82.55 82.7762ZM144.361 91.3352V93.0123H111.139V91.3352C111.139 82.0301 118.595 74.5243 127.75 74.5243C136.905 74.5243 144.361 82.0301 144.361 91.3352ZM106.817 98.681H146.783C146.915 98.6999 147.049 98.7096 147.186 98.7096C147.323 98.7096 147.458 98.6999 147.589 98.681H148.683C149.589 98.681 150.35 99.4195 150.35 100.387V130.626C150.35 131.593 149.589 132.331 148.683 132.331H132.27C132.15 132.331 132.033 132.339 131.917 132.353C131.801 132.339 131.683 132.331 131.564 132.331H106.817C105.911 132.331 105.15 131.593 105.15 130.626V124.692C105.15 124.675 105.151 124.658 105.151 124.641C105.151 124.63 105.151 124.619 105.151 124.609L105.15 124.571V100.387C105.15 99.4195 105.911 98.681 106.817 98.681ZM132.976 116.006C132.976 118.923 130.636 121.288 127.75 121.288C124.863 121.288 122.523 118.923 122.523 116.006C122.523 113.088 124.863 110.723 127.75 110.723C130.636 110.723 132.976 113.088 132.976 116.006Z"
      />
    </Svg>
  )
}

export const UserBlocked = styled(UserBlockedSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.illustrations.sizes.medium,
}))``