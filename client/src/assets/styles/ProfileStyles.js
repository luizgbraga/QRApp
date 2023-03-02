import globalStyles from "./Global/globalStyles";
import colors from "./Global/colors";

const styles = {
    container: {
        padding: '16px 0px 0px 72px',
        height: 'calc(100vh - 260px)'
    },

    title: {
        fontSize: '40px',
        fontWeight: '600',
        margin: '0px 0px 40px 0px'
    },

   header: {
        ...globalStyles.verticalAlign,
        ...globalStyles.horizontalSpaceBetween,
        width: 'calc(100vw - 1000px)',
        height: '54px'
   },

    subtitle: {
        ...globalStyles.pointer,
        fontSize: '22px',
        fontWeight: '500'
    },

    subsubtitle: {
        fontSize: '20px',
        fontWeight: '500',
        margin: '0px 0px 20px 0px'
    },

    unabledSubtitle: {
        ...globalStyles.pointer,
        fontSize: '22px',
        fontWeight: '500',
        color: colors.unabledtxt
    },

    profileContainer: {
        height: '90%',
    },

    row: {
        ...globalStyles.horizontalSpaceBetween
    },

    personalInfoContainer: {
        margin: '40px 0px 0px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },

    billingInfoContainer: {
        margin: '40px 0px 0px 0px',
        ...globalStyles.horizontalSpaceBetween,
        width: 'calc(100vw - 590px)'
    },

    addressInfoContainer: {
        width: '60%'
    },

    allButons: {
        ...globalStyles.horizontalSpaceBetween,
        width: '420px',
        margin: '20px 0px 0px 0px'
    },

    actionButtons: {
        ...globalStyles.horizontalSpaceBetween,
        width: '260px',
    },

    accountUsageContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '72px',
        margin: '40px 0px 0px 0px'
    },

    info: {
        ...globalStyles.horizontalSpaceBetween,
        width: '24%'
    },

    label: {
        fontSize: '20px',
        fontWeight: '500'
    },

    value: {
        fontSize: '20px' 
    }
}

export default styles;