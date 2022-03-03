import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

import { AccessibleIcon } from '../types'

function MusicalInstrumentStoreSvg({
  size,
  color,
  accessibilityLabel,
  testID,
}: AccessibleIcon): JSX.Element {
  return (
    <AccessibleSvg
      width={size}
      height={size}
      testID={testID}
      fill={color}
      viewBox="0 0 96 96"
      accessibilityLabel={accessibilityLabel}
      aria-hidden={!accessibilityLabel}>
      <Path d="M38.3 8C20.9576 8 8 20.4413 8 36.9745C8 38.0796 8.89543 38.9755 10 38.9755C11.1046 38.9755 12 38.0796 12 36.9745C12 22.8124 23.0024 12.002 38.3 12.002C45.8209 12.002 51.2332 15.1967 54.9536 19.255C58.7208 23.3644 60.7198 28.3336 61.2888 31.6502C62.1536 36.697 64.093 42.2363 68.4354 45.4302L68.4532 45.4431C70.6657 47.0574 73.378 48 76.68 48C76.7671 48 76.8528 47.9944 76.9369 47.9836C79.4426 48.0551 81.0993 49.1756 82.2059 50.7815C83.4081 52.5263 84 54.9282 84 57.3046V63.988L72 63.988H62H42H32H22L12 63.988V45.979C12 44.8738 11.1046 43.978 10 43.978C8.89543 43.978 8 44.8738 8 45.979V63.988V67.99V81.997C8 85.3032 10.6954 88 14 88H66.74C67.8446 88 68.74 87.1041 68.74 85.999C68.74 84.8939 67.8446 83.998 66.74 83.998H14C12.9046 83.998 12 83.093 12 81.997V67.99H20V77.995C20 79.1001 20.8954 79.996 22 79.996C23.1046 79.996 24 79.1001 24 77.995V67.99H30V77.995C30 79.1001 30.8954 79.996 32 79.996C33.1046 79.996 34 79.1001 34 77.995V67.99H40V77.995C40 79.1001 40.8954 79.996 42 79.996C43.1046 79.996 44 79.1001 44 77.995V67.99H60V77.995C60 79.1001 60.8954 79.996 62 79.996C63.1046 79.996 64 79.1001 64 77.995V67.99H70V77.995C70 79.1001 70.8954 79.996 72 79.996C73.1046 79.996 74 79.1001 74 77.995V67.99H84V81.997C84 83.093 83.0954 83.998 82 83.998H77.42C76.3154 83.998 75.42 84.8939 75.42 85.999C75.42 87.1041 76.3154 88 77.42 88H82C85.3046 88 88 85.3032 88 81.997V67.99V63.988V57.3046C88 54.3585 87.2819 51.0974 85.4991 48.5101C83.658 45.8381 80.73 43.978 76.68 43.978C76.5903 43.978 76.502 43.9839 76.4155 43.9953C74.0548 43.9479 72.2518 43.2643 70.8005 42.2026L70.7938 42.1977C67.7431 39.9469 66.0455 35.7259 65.2312 30.9736L65.2312 30.9731C64.5402 26.946 62.2192 21.2599 57.9014 16.5499C53.5368 11.7888 47.0991 8 38.3 8ZM36 53.983C34.8954 53.983 34 54.8789 34 55.984C34 57.0891 34.8954 57.985 36 57.985H60C61.1046 57.985 62 57.0891 62 55.984C62 54.8789 61.1046 53.983 60 53.983H36Z" />
    </AccessibleSvg>
  )
}

export const MusicalInstrumentStoreIcon = styled(MusicalInstrumentStoreSvg).attrs(
  ({ color, size, theme }) => ({
    color: color ?? theme.colors.black,
    size: size ?? theme.icons.sizes.standard,
  })
)``
