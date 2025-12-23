import { assets } from "../../assets/assets"

export const styleJSON = (params) => { return {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    title: {
        fontSize: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        top: 260,
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
        color: assets.basic.blue,
    },
    responseContainer: {
        flex: 1,
        height: 'auto',
        width: '90%',
        backgroundColor: assets.basic.white, // Tailwind's gray-200
        borderWidth: 1,
        borderColor: assets.basic.lightGray, // Tailwind's gray-300
        borderRadius: 10,
        padding: 10,
        position: "absolute",
        top: 50
    },
    responseText: {
        color: assets.memoryPage.textColor, // text-gray-700
        fontSize: 16, // text-base
        //flexGrow: 1, // flex-grow
        marginBottom: 16, // Added margin to separate from bottom row
        fontFamily: assets.basic.fonts.RALEWAY_REGULAR,
    },
    responseHeader: {
        color: assets.basic.blue, // text-gray-700
        fontSize: 26, // text-base
        marginBottom: 5, // Added margin to separate from bottom row
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
}}