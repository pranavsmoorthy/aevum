export const styleJSON = (params) => {return {
  container: {
    flex: 1, // Takes up full screen height
    width: '100%',
    backgroundColor: 'transparent', // Equivalent to bg-gray-100
  },
  swipeUpArea: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64, // Equivalent to h-16
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsMenu: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: params.screenHeight * 0.8, // 80% of screen height
    backgroundColor: 'white',
    borderTopLeftRadius: 24, // Equivalent to rounded-t-3xl
    borderTopRightRadius: 24,
    shadowColor: '#000', // Equivalent to shadow-2xl
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15, // For Android shadow
    overflow: 'hidden', // Ensures rounded corners clip content
  },
  settingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20, // Equivalent to p-5
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb', // Equivalent to border-gray-200
    backgroundColor: '#f9fafb', // Equivalent to bg-gray-50
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  settingsTitle: {
    fontSize: 22, // Equivalent to text-2xl
    color: '#333', // Equivalent to text-gray-800
    fontFamily: "Raleway-Bold"
  },
  closeButton: {
    padding: 8, // Equivalent to p-2
    borderRadius: 9999, // Equivalent to rounded-full
    backgroundColor: 'transparent',
  },
  closeButtonText: {
    fontSize: 24, // Adjusted size for 'X' to match lucide-react size
    color: '#6b7280', // Equivalent to text-gray-500
  },
  settingsContent: {
    flex: 1,
    padding: 24, // Equivalent to p-6
    overflow: 'scroll', // Enable scrolling for long content
  },
  settingItemBlue: {
    marginBottom: 16, // Equivalent to mb-4
    padding: 16, // Equivalent to p-4
    backgroundColor: '#eff6ff', // Equivalent to bg-blue-50
    borderRadius: 8, // Equivalent to rounded-lg
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1, // For Android shadow
  },
  settingItemTitleBlue: {
    fontSize: 18, // Equivalent to text-lg
    fontWeight: '500', // Equivalent to font-medium
    color: '#1e40af', // Equivalent to text-blue-800
    marginBottom: 8, // Equivalent to mb-2
  },
  settingItemGreen: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#ecfdf5', // Equivalent to bg-green-50
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingItemTitleGreen: {
    fontSize: 18,
    fontWeight: '500',
    color: '#065f46', // Equivalent to text-green-800
    marginBottom: 8,
  },
  settingItemYellow: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fffbeb', // Equivalent to bg-yellow-50
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingItemTitleYellow: {
    fontSize: 18,
    fontWeight: '500',
    color: '#92400e', // Equivalent to text-yellow-800
    marginBottom: 8,
  },
  settingItemPurple: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f3e8ff', // Equivalent to bg-purple-50
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingItemTitlePurple: {
    fontSize: 18,
    fontWeight: '500',
    color: '#5b21b6', // Equivalent to text-purple-800
    marginBottom: 8,
  },
  settingItemRed: {
    padding: 16,
    backgroundColor: '#fef2f2', // Equivalent to bg-red-50
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingItemTitleRed: {
    fontSize: 18,
    fontWeight: '500',
    color: '#991b1b', // Equivalent to text-red-800
    marginBottom: 8,
  },
  settingItemDescription: {
    color: '#4b5563', // Equivalent to text-gray-700
  },
  aboutAppInfoHeader: {
    color: '#2c3138ff',
    justifyContent: 'center',
    textAlign: 'center'
  },
  aboutAppInfoSubject: {
    color: '#4b5563',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 11
  }
}};