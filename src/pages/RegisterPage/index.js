import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { Link } from "@react-navigation/native";

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput placeholder="nome de usuário" style={styles.input} />
            <TextInput placeholder="email" style={styles.input} />
            <TextInput placeholder="senha" style={styles.input} />
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtRegister}>Registrar-se</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'LoginPage'}} style={styles.txtLinks}>Voltar ao Login</Link>
            </View>
        </View>
    );
}