import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Modal, Dimensions } from 'react-native';

const baseUrl = "https://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.9;

export default function CardFilme({ filme }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleImagePress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image style={styles.imagem} source={{uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>
      </TouchableOpacity>
      <Text style={styles.titulo}>{filme.titulo}</Text>
      <Text style={styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + "..." : filme.sinopse}</Text>
      <Link to={{screen: 'MoviesDetailsPage', params: {filme: filme}}}>Saiba mais</Link>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>COMPRAR</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Image style={styles.modalImage} source={{uri: baseUrl + filme.poster.data.attributes.formats.medium.url}} />
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: MAX_HEIGHT,
    width: MAX_WIDTH
  },
  imagem: {
    width: '140px',
    height: '200px',
    borderRadius: 5,
    margin: 10,
    resizeMode: 'cover',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.60)'
  },
  titulo: {
    color: '#ddd',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  sinopse: {
    color: '#ccc',
    fontSize: 15,
    margin: 10,
    textAlign: 'justify'
  },
  botao: {
    height: 40,
    width: '95%',
    backgroundColor: '#034efc',
    margin: 10, 
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.60)'
  },
  botaoTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
