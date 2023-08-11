export const transformUser = (userData) => {
    return {
        firstName: userData.first_name,
        lastName: userData.last_name,
        email: userData.email,
        phone: userData.phone,
        address:userData.address,
        profileImageUrl: profile_image??null,
        active: userData.active,
        onboarded: userData.onboarded
    }
}