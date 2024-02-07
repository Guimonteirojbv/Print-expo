import React from "react";
import { TouchableHighlight, Modal, Image, Text, View, TouchableOpacity, Platform } from "react-native";
import { styles } from "./styles";
import { Entypo } from '@expo/vector-icons';

import { usePrint } from "../../hooks/usePrint";

type DataProps  = {
    title: string;
    imageUrl: string;
    html: string
}

export function ListItem ({title, html, imageUrl} : DataProps) {
    const [modalVisible, setModalVisible] = React.useState(false)

    const {print, printToFile, selectPrinter} = usePrint()
    
    function handleOpenModal () {
        setModalVisible(true)
    }
    function handleCloseModal () {
        setModalVisible(false)
    }

    async function handlePrint() {
        await print(html)
    }

    async function handlePrintToFile() {
        await printToFile(html)
    }

    async function handleSelectPrinter() {
        await selectPrinter()
    }

    return (
       <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUrl}}/>
            <Text style={styles.title}>
                {title}
            </Text>

            <TouchableHighlight style={styles.buttonOptions}>
                <Entypo name="dots-three-vertical" size={24} color="black" onPress={handleOpenModal}/>
            </TouchableHighlight>

            <View style={styles.modal}>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent
                >
                    <View style={styles.centeredView}>

                        <View style={styles.modalContent}>
                        <TouchableOpacity style={{position: 'absolute', right: 20, top: 5}} onPress={handleCloseModal}>
                            <Text>X</Text>
                        </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handlePrint}>
                                <Text style={styles.titleButton}>Print</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={handlePrintToFile}>
                                <Text style={styles.titleButton}>PrintToPDF file</Text>
                            </TouchableOpacity>
                            {Platform.OS === 'ios' && (
                                <TouchableOpacity style={styles.button} onPress={handleSelectPrinter}>
                                    <Text style={styles.titleButton}>Select Printer</Text>
                                </TouchableOpacity>
                            )}
                               
                        </View>
                    </View>
                </Modal>
            </View>
            
       </View>
    )
}