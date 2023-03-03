import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const styles = {
    container: {
        ...globalStyles.verticalAlign,
        margin: '6px 0px 0px 0px'
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
    },

    nodeTitle: {
        ...globalStyles.center,
        fontSize: '13px'
    },

    nodeTitleStarting: {
        fontSize: '13px',
        marginLeft: '4px'
    },

    nodeTitleEnding: {
        fontSize: '13px',
        marginLeft: '36px',
    },

    nodeTitleColored: {
        ...globalStyles.center,
        fontSize: '13px',
        color: colors.green,
        fontWeight: '500'

    },

    nodeTitleStartingColored: {
        fontSize: '13px',
        marginLeft: '4px',
        color: colors.green,
        fontWeight: '500'
    },

    nodeTitleEndingColored: {
        fontSize: '13px',
        marginLeft: '36px',
        color: colors.green,
        fontWeight: '500'
    },

    lock: {
        width: '20px'
    },

    unabled: {
        color: colors.grey
    }
}

export default styles;