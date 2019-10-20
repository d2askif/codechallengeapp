import React, { Component } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import Button from '../form/Button'

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#dedede',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    height: '30%',
  },
  close: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '80%',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  buttonClose: {
    width: 20,
    height: 20,
    paddingVertical: 0,
    paddingHorizontal: 0,
    padding: 0,
    backgroundColor: '#dedede',
    borderRadius: 10,
  },
  buttonBookTime: {
    width: '100%',
    backgroundColor: 'tomato',
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  testStyle: {
    fontSize: 18,
  },
})
interface Props {
  showModal?: boolean
  onBookSlot: () => void
  date: string
  time: string
  onModalClose: () => void
}
class ModalExample extends Component<Props> {
  public render() {
    const { showModal, onModalClose, onBookSlot, date, time } = this.props
    return (
      <Modal
        presentationStyle={'overFullScreen'}
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={styles.close}>
              <Button
                onPress={onModalClose}
                style={styles.buttonClose}
                textStyle={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}
                title={'X'}
              />
            </View>
            <Text style={styles.testStyle}>
              {new Date(date).toDateString()}
            </Text>
            <Text style={styles.testStyle}>{time}</Text>

            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Button
                title="Book Time"
                style={styles.buttonBookTime}
                onPress={onBookSlot}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
export default ModalExample
