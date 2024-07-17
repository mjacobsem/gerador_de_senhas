import { useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal' 

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword() {

    let password = "";

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)

  }

  return(
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(Number(value.toFixed(0)))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 6,
  },
  button: {
    backgroundColor: '#392de9',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
})