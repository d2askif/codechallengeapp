import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/form/Button'
import CenterView from '../components/view/CenterView'
import BasicContainer from '../containers/common/BasicContainer'
interface Props {
  onBook: () => void
}
export default class HomeScreenContainer extends Component<Props> {
  public render() {
    const { onBook } = this.props
    return (
      <BasicContainer>
        <CenterView>
          <Button title={'Book interview'} onPress={onBook} />
        </CenterView>
      </BasicContainer>
    )
  }
}
