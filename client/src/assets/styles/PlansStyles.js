import globalStyles from "./Global/globalStyles";

const styles = {
    container: {
        ...globalStyles.center,
        ...globalStyles.column
    },

    box: {
        ...globalStyles.littleRoundedBorder,
        width: '360px',
        height: '540px'
    },

    boxesContainer: {
        ...globalStyles.horizontalSpaceAround,
        width: '1400px',
        margin: '60px 0px 100px 0px'
    },

    title: {
        fontSize: '40px',
        fontWeight: '500'
    }
}

export default styles;