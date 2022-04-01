import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {diagonalDp} from '~helpers';

interface GapProps {
  vertical?: number;
  horizontal?: number;
  adapted?: boolean;
}

/**
 * View component for filling gaps. Could receive children.
 * @prop vertical paddingVertical value.
 * @prop horizontal paddingHorizontal value.
 * @prop adapted determine if the value needs to be adapted with widthDp or not.
 * @return a view component.
 */
const Gap = ({
  vertical,
  horizontal,
  children,
  adapted = false,
}: PropsWithChildren<GapProps>) => {
  const horizontalValue = (horizontal || 0) / 2;
  const verticalValue = (vertical || 0) / 2;

  const paddingVertical = adapted ? diagonalDp(verticalValue) : verticalValue;
  const paddingHorizontal = adapted
    ? diagonalDp(horizontalValue)
    : horizontalValue;

  const style = [
    vertical !== undefined && {
      paddingVertical,
    },
    horizontal !== undefined && {
      paddingHorizontal,
    },
  ];
  return <View style={style}>{children}</View>;
};

export default Gap;
