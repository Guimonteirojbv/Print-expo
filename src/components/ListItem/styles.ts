import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        marginBottom: 20,
        flexDirection: 'row',
        
        borderRadius: 8,
        paddingHorizontal: 6,
        paddingVertical: 4,
        position: 'relative',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 6,
        alignSelf: 'center',
    },
    title: {
        color: '#000',
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1
    },
    buttonOptions: {
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: 'transparent',
        
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0,0.5)'
    },
    modalContent: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, 
        width: '90%'
    },

    button: {
        backgroundColor: '#000',
        width: '100%',
        height: 40,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleButton: {
        color: "#fff",
        
    }
})