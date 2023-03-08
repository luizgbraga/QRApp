import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const styles = {
    loginFormContainerStyles: {
        ...globalStyles.center,
        ...globalStyles.column,
        width: '540px',
        height: 'calc(100vh - 100px)'
    },

    titleStyles: {
        fontSize: '40px',
        fontWeight: 'bold',
        letterSpacing: '0.9px'
    },

    subtitleStyles: {
        fontSize: '20px',
        marginTop: '4px',
        marginBottom: '16px'
    },

    signinStyles: {
        ...globalStyles.pointer,
        color: colors.green,
        fontWeight: 'bold'
    },

    inputsStyles: {
        ...globalStyles.column,
        height: '230px',
        justifyContent: 'space-around'
    }
}

export default styles;