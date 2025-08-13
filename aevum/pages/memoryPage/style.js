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
            paddingRight: 20,
        },
        title: {
            fontSize: 40,
            justifyContent: 'left',
            alignItems: 'left',
            position: "flex",
            fontFamily: assets.basic.fonts.RALEWAY_BOLD,
            color: assets.basic.blue,
            marginBottom: 10,
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
        noMemoryText: {
            fontSize: 18,
            color: '#888',
            fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
            bottom: 10,
            marginBottom: 25,
        },
        searchContainer: {
            width: '100%',
            marginBottom: 20,
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
        },
        searchBar: {
            flex: 1,
            height: 40,
            backgroundColor: '#f5f5f5',
            borderRadius: 20,
            paddingHorizontal: 16,
            fontSize: 16,
            color: assets.basic.darkGray,
            fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
        },
        clearButton: {
            position: 'absolute',
            right: 12,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
        clearButtonText: {
            fontSize: 20,
            color: '#888',
            fontWeight: '500',
        },
    }
}