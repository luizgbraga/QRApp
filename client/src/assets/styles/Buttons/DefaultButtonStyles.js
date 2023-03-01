import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const styles = {
    buttonStyle: {
        ...globalStyles.center,
        ...globalStyles.pointer,
        ...globalStyles.defaultSize,
        backgroundColor: colors.green,
        color: colors.white,
        height: '50px',
        borderRadius: '8px',
        fontSize: '20px'
    },

    disabledButtonStyle: {
        ...globalStyles.center,
        ...globalStyles.pointer,
        ...globalStyles.defaultSize,
        backgroundColor: colors.unabled,
        color: colors.unabledtxt,
        height: '50px',
        borderRadius: '8px',
        fontSize: '20px'
    },

    secundaryButtonStyle: {
        ...globalStyles.center,
        ...globalStyles.pointer,
        ...globalStyles.defaultSize,
        backgroundColor: "#FFFFFF",
        color: colors.green,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: colors.green,
        height: '50px',
        borderRadius: '8px',
        fontSize: '20px'
    },

    terciaryButtonStyle: {
        ...globalStyles.center,
        ...globalStyles.pointer,
        ...globalStyles.defaultSize,
        backgroundColor: "#FFFFFF",
        color: colors.green,
        height: '50px',
        borderRadius: '8px',
        fontSize: '18px',
        textDecoration: 'underline'
    }
}

export default styles;