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
        borderRadius: '8px'
    },

    labelStyle: {
        fontSize: '20px'
    }
}

export default styles;