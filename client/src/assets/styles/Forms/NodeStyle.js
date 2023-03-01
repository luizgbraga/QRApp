import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const styles = {
    container: {
        ...globalStyles.verticalAlign
    },

    line: {
        width: '40px',
        height: '3px',
        backgroundColor: colors.grey
    },

    coloredLine: {
        width: '40px',
        height: '3px',
        backgroundColor: colors.green
    },

    ball: {
        ...globalStyles.center,
        width: '36px',
        height: '36px',
        borderRadius: '20px',
        backgroundColor: colors.grey
    },

    coloredBall: {
        ...globalStyles.center,
        width: '36px',
        height: '36px',
        borderRadius: '20px',
        backgroundColor: colors.green
    },

    idx: {
        color: colors.white,
        fontWeight: '500',
        fontSize: '16px'
    }
}

export default styles;