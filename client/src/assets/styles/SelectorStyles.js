import globalStyles from "./Global/globalStyles";
import colors from "./Global/colors";

const styles = {
    container: {
        ...globalStyles.horizontalSpaceBetween,
        margin: '30px 0px 20px 100px',
        width: '600px'
    },

    notSelected: {
        ...globalStyles.center,
        ...globalStyles.pointer,
        width: '280px',
        height: '44px',
        borderRadius: '30px',
        border: '1px solid',
        borderColor: colors.grey,
        color: colors.darkgrey
    },

    selected: {
        ...globalStyles.center,
        ...globalStyles.pointer,
        width: '280px',
        height: '44px',
        backgroundColor: colors.green,
        borderRadius: '30px',
        fontWeight: '500'
    },

    text: {
        fontSize: '20px'
    }


};

export default styles;