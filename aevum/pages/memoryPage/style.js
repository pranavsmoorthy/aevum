import { assets } from "../../assets/assets"

export const styleJSON = (params) => { return {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-beginning',
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 40,
        justifyContent: 'left',
        alignItems: 'left',
        position: "flex",
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
        color: assets.basic.blue,
        marginBottom: 30,
        width: "100%",
    },
    addIcon: {
        fontSize: 25, // size={20}
        color: "#ffffff", // text-gray-500
        fontFamily: assets.basic.fonts.COMFORTAA_MEDIUM,
        marginTop: -7
    },
    addContainer: {
        paddingLeft: 10.5, // p-2
        paddingRight: 10.5, // p-2
        paddingBottom: 1, // p-1
        backgroundColor: assets.basic.blue, // bg-blue-50
        color: '#fff', // text-blue-700
        fontSize: 12, // text-xs
        borderRadius: 9999, // rounded-md
        marginTop: 15,
        right: 15
        // self-end is not directly needed here as justify-between handles alignment
    },
}}