import * as ActionType from "./types"
import api from "./../../../../utils/apiUtil";

export const actAuthLogin = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuthLoginRequest());
        api.post("/QuanLyNguoiDung/DangNhap", user)
            .then((result) => {
                if (result.data.content.maLoaiNguoiDung === "KhachHang") {
                    return Promise.reject({
                        response: {
                            data: {
                                content: "Bạn không có quyền truy cập!",
                            }
                        }
                    })
                }
                dispatch(actAuthLoginSuccess(result.data.content));
                // Lưu trạng thái login
                localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));

                //redirect to page admin/dashboard
                navigate("/admin/dashboard", { replace: true });
            })
            .catch((error) => {
                dispatch(actAuthLoginFail(error));
            })
    };
};

export const actAuthLoginRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    };
};

export const actAuthLoginSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data,
    };
};

export const actAuthLoginFail = (error) => {
    return {
        type: ActionType.AUTH_FAIL,
        payload: error,
    };
};