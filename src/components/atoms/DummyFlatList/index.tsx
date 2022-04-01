import React, {PropsWithChildren, forwardRef} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import {FlatListProps} from 'react-native';

type Omiter<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type NewFlatList = Omiter<FlatListProps<any>, 'data' | 'renderItem'>;

interface DummyFlatListProps extends NewFlatList {}

const DummyFlatList = forwardRef<any, PropsWithChildren<DummyFlatListProps>>(
  ({children, ...props}, ref) => {
    const data: any = [];
    const keyExtractor = () => `dummyId`;
    const renderItem = () => null;
    const ListHeaderComponent = <>{children}</>;

    return (
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        ref={ref}
        {...props}
      />
    );
  },
);

export default DummyFlatList;
