import colors from "../Global/colors";
import globalStyles from "../Global/globalStyles";
import shadows from "../Global/shadows";

const styles = {
    buttonStyle: {
        ...globalStyles.center,
        ...globalStyles.pointer,
        backgroundColor: colors.blue,
        color: colors.white,
        boxShadow: shadows.startNow,
        width: '272px',
        height: '64px',
        borderRadius: '50px',
        marginLeft: '100px',
    },

    labelStyle: {
        fontSize: '26px',
        fontWeight: 'bold',
        letterSpacing: '1px'
    }
}

export default styles;