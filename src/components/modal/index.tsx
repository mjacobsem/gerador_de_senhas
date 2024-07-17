import { View, Text, StyleSheet, TouchableOpacity, Pressable, Touchable } from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'

interface ModalPasswordProps {
    password: string;
    handleClose: () => void;
  }

export function ModalPassword({ password, handleClose }: ModalPasswordProps) {

    const { saveItem } = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        alert('Senha salva com sucesso!')

        await saveItem('@pass', password)
        handleClose();
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>
                
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '85%',
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000 ',
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: '#0e0e0e',
        width: '90%',
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 8,
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    },
    buttonArea: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginTop: 15,
        justifyContent: 'space-around'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttonText: {

    },
    buttonSave: {
        backgroundColor: '#392de9',
        borderRadius: 8,
    },
    buttonSaveText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})
