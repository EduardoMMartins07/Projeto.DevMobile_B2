import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imgLogo: {
        height: 150,
        width: 150,
        marginBottom: 15
    },
    input: {
        border: '1px solid black',
        borderRadius: '5px',
        margin: '3px',
        width: '70%',
        height: '40px',
        padding: '7px',
        backgroundColor: '#353535',
        color: '#aaaaaa'
    },
    btnLogin: {
        border: '1px solid black',
        backgroundColor: '#034efc',
        height: '40px',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
        borderRadius: '5px'
    },
    txtRegister: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    viewLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    },
    txtLinks: {
        color: '#aaaaaa',
        fontWeight: 'bold'
    }
})

export default styles;