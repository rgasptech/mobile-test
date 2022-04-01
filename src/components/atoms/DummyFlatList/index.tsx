import React, {PropsWithChildren, forwardRef} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import {FlatListProps, StyleProp, ViewStyle} from 'react-native';
import spaces from '~constants/spaces';

type Omiter<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type NewFlatList = Omiter<FlatListProps<any>, 'data' | 'renderItem'>;

interface DummyFlatListProps extends NewFlatList {
  usePadding?: boolean;
}

const DummyFlatList = forwardRef<any, PropsWithChildren<DummyFlatListProps>>(
  ({children, usePadding = false, contentContainerStyle, ...props}, ref) => {
    const data: any = [];
    const keyExtractor = () => `dummyId`;
    const renderItem = () => null;
    const ListHeaderComponent = <>{children}</>;

    const styles: StyleProp<ViewStyle> = [
      usePadding && {paddingHorizontal: spaces.semiLarge},
      contentContainerStyle,
    ];

    return (
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles}
        ref={ref}
        {...props}
      />
    );
  },
);

export default DummyFlatList;
