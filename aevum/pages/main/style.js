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
        top: 250,
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
        color: assets.basic.blue,
    },
}}