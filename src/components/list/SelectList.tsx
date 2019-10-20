import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width)

interface Props {
  data: any
  renderItem: Function
  style?: any
}
class SelectList extends React.Component<Props> {
  public render() {
    const { data, renderItem, style } = this.props
    return (
      <FlatList
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        style={{
          width: SCREEN_WIDTH + 5,
          alignSelf: 'center',
          backgroundColor: '#f6f6f6',
        }}
        horizontal
        data={data}
        contentContainerStyle={style}
        scrollEnabled={true}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    )
  }
}

export default SelectList
