import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const styles = {
    loginFormContainerStyles: {
        ...globalStyles.center,
        ...globalStyles.column,
        width: '540px',
        height: 'calc(100vh - 80px)'
    },

    titleStyles: {
        fontSize: '42px',
        fontWeight: 'bold',
        letterSpacing: '0.9px'
    },

    subtitleStyles: {
        fontSize: '22px',
        marginTop: '8px',
        marginBottom: '20px'
    },

    signinStyles: {
        ...globalStyles.pointer,
        color: colors.green,
        fontWeight: 'bold'
    },

    inputsStyles: {
        ...globalStyles.column,
        height: '240px',
        justifyContent: 'space-around'
    }
}

export default styles;