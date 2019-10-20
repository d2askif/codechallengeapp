// @flow
import * as React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

interface Props {
  children: React.ReactNode
  numColumns?: number
  itemStyle?: any
}

const styles = StyleSheet.create({
  /* linetop: {
    backgroundColor: '#ECECEC',
    height: 2,
    marginRight: 10,
    marginLeft: 10,
  },
  lineleft: {
    backgroundColor: '#ECECEC',
    width: 2,
    marginTop: 10,
    marginBottom: 10,
  }, */
  itemBox: {
    flexGrow: 1,
    flexDirection: 'row',
  },
})

export default class GridView extends React.Component<Props> {
  private static defaultProps = {
    numColumns: 3,
    itemStyle: {},
  }

  public getChildren = () => {
    const { children, numColumns } = this.props
    const childrenArray = React.Children.toArray(children)

    return childrenArray
  }

  public renderItem = ({ item, index }: any) => {
    const { numColumns, itemStyle } = this.props
    const columns = numColumns !== undefined ? numColumns : 2
    const itemWidth = 100 / columns

    return (
      <View
        key={index.toString()}
        style={[{ width: `${itemWidth}%` }, itemStyle]}
      >
        <View style={styles.itemBox}>{item}</View>
      </View>
    )
  }

  public render() {
    const { numColumns } = this.props
    return (
      <FlatList
        data={this.getChildren()}
        renderItem={this.renderItem}
        contentContainerStyle={{
          backgroundColor: '#ffffee',
        }}
        keyExtractor={(key, index) => index.toString()}
        scrollEnabled
        numColumns={numColumns}
      />
    )
  }
}
