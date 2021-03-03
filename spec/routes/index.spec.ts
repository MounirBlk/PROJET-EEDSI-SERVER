import { roleTypes } from "../../src/types/roleTypes";
import { checkUserSpec } from "../user/checkUser.spec";
import { deleteUserSpec } from "../user/deleteUser.spec"
import { disableUserSpec } from "../user/disableUser.spec";
import { forgotPasswordUserSpec } from "../user/forgotPassword.spec";
import { getUserSpec } from "../user/getUser.spec";
import { htmlSpec } from "../user/html.spec";
import { loginUserSpec } from "../user/login.spec"
import { registerUserSpec } from "../user/register.spec"
import { updateUserSpec } from "../user/updateUser.spec";

export const userSpec = (role: Array<roleTypes>) => {
    htmlSpec();
    deleteUserSpec();
    registerUserSpec(role);
    loginUserSpec();
    getUserSpec();
    updateUserSpec();
    disableUserSpec();
    forgotPasswordUserSpec();
    checkUserSpec();
}

export const productSpec = () => {

}