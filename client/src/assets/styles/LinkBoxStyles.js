import globalStyles from "./Global/globalStyles";
import colors from "./Global/colors";

const styles = {
    box: {
        ...globalStyles.verticalAlign,
        ...globalStyles.littleRoundedBorder,
        height: '62px',
        borderColor: colors.grey,
        backgroundColor: '#FFFFFF',
        width: '500px',
        marginBottom: '20px'
    },

    title: {
        fontSize: '18px',
        marginBottom: '4px'
    },

    url: {
        fontSize: '12px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },

    starContainer: {
        ...globalStyles.center,
        width: '10%',
        height: '50%',
        borderRight: `solid 1px ${colors.grey}`
    },

    star: {
        width: '28px'
    },

    infoContainer: {
        ...globalStyles.column,
        justifyContent: 'center',
        width: '72%',
        height: '72%',
        padding: '0px 0px 0px 12px'
    },

    redirectsContainer: {
        ...globalStyles.columnCentered,
        width: '18%',
        height: '72%',
    },

    redirects: {
        fontSize: '22px',
        fontWeight: '500'
    },

    redirectsText: {
        fontSize: '12px',
        fontWeight: '500'
    }
}

export default styles;