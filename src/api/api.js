import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '748b393e-e1ad-478f-9aaa-f9643c62d185'}
});

export const usersAPI = {
    getUsers(pageSize=5, currentPage=1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`,
            {withCredentials: true})
            .then(response => response.data);
    }
};

export const authAPI = {
    getAuthMe() {
       return instance.get("auth/me", {withCredentials: true})
            .then(response => response.data);
    }
};

export const profileAPI = {
    getUserProfile(userId) {
       return instance.get(`profile/${userId}`)
           .then(response => response.data);
    },
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data);
    },
    putUserStatus(status) {
        return instance.put(`/profile/status`, {status: status})
            .then(response => response.data);
    }
};

export const followAPI = {
    deleteUserFollowing(userId) {
      return instance.delete(`follow/${userId}`)
          .then(response => response.data);
    },
    postUserFollowing(userId) {
        return instance.post(`follow/${userId}`, null)
            .then(response => response.data);
    }
};






