import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },

    profileSection: {
        flex:1,
        backgroundColor: '#CF7751',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        
    },

    profileText: {
        color: 'white',
        fontSize : 20,
        fontFamily: 'poppins'
    },

    todosSection: {
        flex:2,
    },

    todosInformation: {
        flex: 1,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },

    todosHeading: {
        fontFamily: 'poppins',
        fontWeight: 700,
        fontSize: 17,
    },

    actualTodos: {
        flex: 10,
        backgroundColor : 'crimson'
    },

    profilePicture: {
        height : 100,
        width: 100,
    }
})


export default styles;