import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContexts";

export default function LoginPage(){

    const {signIn} = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput placeholder="email" style={styles.input} />
            <TextInput placeholder="senha" style={styles.input} />
            <TouchableOpacity style={styles.btnLogin} onPress={() => signIn()}>
                <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link style={styles.txtLinks} to={{screen: 'RegisterPage'}}>Registre-se</Link>
                <Link style={styles.txtLinks} to={{screen: 'ForgetPasswordPage'}}>Esqueceu a senha?</Link>
            </View>
        </View>
    );
}