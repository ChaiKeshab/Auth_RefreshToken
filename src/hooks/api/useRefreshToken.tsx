import axios from '../../api/baseConfig';

const useRefreshToken = () => {

    /** Get new accessToken using refreshToken */
    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });

        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;