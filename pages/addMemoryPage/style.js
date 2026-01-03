import { assets } from "../../assets/assets"

export const styleJSON = (params) => {
    return {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'flex-beginning',
            paddingTop: 50,
            paddingLeft: 20,
            width: "100%",
        },
        title: {
            fontSize: 40,
            justifyContent: 'left',
            alignItems: 'left',
            position: "flex",
            fontFamily: assets.basic.fonts.RALEWAY_BOLD,
            color: assets.basic.main,
            marginBottom: 30,
            width: "100%",
        },
        textInputTitle: {
            height: 48,
            borderColor: assets.basic.lightGray,
            borderWidth: 1,
            borderRadius: 999,
            paddingLeft: 15,
            fontSize: 16,
            color: assets.basic.darkGray,
            backgroundColor: assets.basic.mediumGray,
            fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
            marginBottom: 20,
            width: "100%",
        },
        textInputDescription: {
            height: 250,
            borderColor: assets.basic.lightGray,
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 15,
            fontSize: 16,
            color: assets.basic.darkGray,
            backgroundColor: assets.basic.mediumGray,
            fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
            marginBottom: 20,
            textAlignVertical: 'top', // Ensures text starts at the top
            paddingTop: 10, // Adds padding to the top for better text visibility
            width: "100%",
        },
        addIcon: {
            fontSize: 15, // size={20}
            color: "#ffffff", // text-gray-500
            fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
            bottom: 2,
            width: "100%",
            textAlign: "center",
        },
        addContainer: {
            paddingLeft: 10.5, // p-2
            paddingRight: 10.5, // p-2
            padding: 12, // p-1
            backgroundColor: assets.basic.main, // bg-blue-50
            color: '#fff', // text-blue-700
            fontSize: 12, // text-xs
            borderRadius: 9999, // rounded-md
            // self-end is not directly needed here as justify-between handles alignment
        },
        message: {
            padding: 3,
            borderRadius: 8,
            marginTop: 3,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        successText: {
            color: assets.basic.main,
            fontSize: 16,
            fontFamily: assets.basic.fonts.RALEWAY_BOLD,
        },
        failureText: {
            color: '#fa7a7aff', // Red color for failure messages
            fontSize: 16,
            fontFamily: assets.basic.fonts.RALEWAY_BOLD,
        },
    }
}