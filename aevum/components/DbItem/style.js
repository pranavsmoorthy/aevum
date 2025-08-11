import { assets } from "../../assets/assets"

export const styleJSON = (params) => { return {
    container: {
        flex: 1, // Takes up full height
        backgroundColor: assets.basic.lightGray, // bg-gray-100
        alignItems: 'center', // items-center
        justifyContent: 'center', // justify-center
        padding: 16, // p-4
    },
    boxWrapper: {
        marginBottom: 24, // mb-6
    },
    roundedBoxContainer: {
        position: 'relative', // for absolute positioning of elements if needed, though not strictly used for button here
        backgroundColor: assets.basic.white, // bg-white
        padding: 24, // p-6
        borderRadius: 12, // rounded-xl
        shadowColor: '#000', // shadow-lg equivalent
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        maxWidth: 384, // max-w-sm (384px)
        width: '100%', // mx-auto equivalent for centering within parent
        flexDirection: 'column', // flex-col
        justifyContent: 'space-between', // justify-between
        // space-y-4 is handled by marginBottom on elements or padding on container
        borderWidth: 1, // border
        borderColor: assets.basic.lightGray, // border-gray-200
        marginBottom: 30,
    },
    boxText: {
        color: assets.memoryPage.textColor, // text-gray-700
        fontSize: 16, // text-base
        //flexGrow: 1, // flex-grow
        marginBottom: 16, // Added margin to separate from bottom row
        fontFamily: assets.basic.fonts.RALEWAY_REGULAR,
    },
    bottomRow: {
        flexDirection: 'row', // flex
        alignItems: 'center', // items-center
        justifyContent: 'space-between', // justify-between
        width: '100%', // w-full
        marginTop: 8, // mt-2
    },
    yearContainer: {
        padding: 8, // p-2
        backgroundColor: assets.basic.blue, // bg-blue-50
        color: assets.basic.blue, // text-blue-700
        fontSize: 12, // text-xs
        fontWeight: '600', // font-semibold
        borderRadius: 6, // rounded-md
        // self-end is not directly needed here as justify-between handles alignment
    },
    yearText: {
        color: '#ffffff', // text-blue-700
        fontSize: 12, // text-xs
        fontWeight: '600', // font-semibold
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
    closeIcon: {
        fontSize: 25, // size={20}
        color: assets.memoryPage.xbuttonColor, // text-gray-500
        fontFamily: assets.basic.fonts.COMFORTAA_MEDIUM
    },
}}