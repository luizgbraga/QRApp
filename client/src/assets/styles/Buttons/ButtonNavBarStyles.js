import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const styles = {
    buttonStyle: {
        ...globalStyles.center,
        ...globalStyles.pointer,
        backgroundColor: colors.green,
        color: colors.white,
        width: '144px',
        height: '44px',
        borderRadius: '24px'
    },

    labelStyle: {
        fontSize: '18.5px',
        fontWeight: 'bold',
        letterSpacing: '1px'
    }
}

export default styles;