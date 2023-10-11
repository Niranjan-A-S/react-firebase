export const useGetUserInfo = () => {
    const jsonString = localStorage.getItem('auth');
    if (jsonString) {
        const { userId, name, profilePhoto, isAuthenticated } = JSON.parse(jsonString);
        return { userId, name, profilePhoto, isAuthenticated }
    }
}