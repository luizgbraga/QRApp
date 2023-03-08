import globalStyles from "./Global/globalStyles";
import colors from "./Global/colors";

const styles = {
    linksContainer: {
        borderColor: colors.grey,
        backgroundColor: colors.lightgrey,
        width: '40%',
        height: '54%',
        margin: '30px 0px 0px 100px',
        // overflow: 'scroll'
    },

    header: {
        ...globalStyles.row,
        height: '16%',
        padding: '0px 28px 0px 0px'
    },

    title: {
        fontSize: '24px',
        margin: '0px 24px 0px 0px'
    },

    addLinkIcon: {
        ...globalStyles.pointer,
        width: '28px',
        height: '28px'
    },

    links: {
        padding: '16px 28px 0px 28px'
    },

    linkDescription: {
        fontSize: '20px',
        fontWeight: '500',
        marginBottom: '20px'
    }
}

export default styles;