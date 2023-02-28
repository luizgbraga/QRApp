import globalStyles from "./Global/globalStyles";
import colors from "./Global/colors";

const styles = {
    linksContainer: {
        ...globalStyles.littleRoundedBorder,
        borderColor: colors.grey,
        backgroundColor: colors.lightgrey,
        borderRadius: '12px',
        width: '560px',
        height: '500px',
        margin: '60px 0px 0px 100px'
    },

    header: {
        ...globalStyles.horizontalSpaceBetween,
        height: '16%',
        padding: '0px 28px 0px 28px'
    },

    title: {
        fontSize: '28px'
    },

    addLinkIcon: {
        ...globalStyles.pointer,
        width: '30px'
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