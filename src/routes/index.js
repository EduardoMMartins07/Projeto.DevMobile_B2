import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import {useAuth} from "../contexts/AuthContexts";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Routes(){

    const {logado, loading} = useAuth();

    if(loading){
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return (
        logado == true ? <AppRoutes/> : <AuthRoutes />
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#111'
        }
    });