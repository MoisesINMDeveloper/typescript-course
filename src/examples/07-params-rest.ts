import {ROLES} from './01-enum'
const currentUser = {
    username: 'minmdev',
    role: ROLES.CUSTOMER
}
export const checkRole = (role1:string, role2:string) => {
    if (currentUser.role === role1) {
        return true;
    }
    if (currentUser.role === role2) {
        return true;
    }
    return false;
}
const rta = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta);


export const checkRoleV2 = (roles:string[]) => {
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
}
const rtaV2 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRole2', rtaV2);

export const checkRoleV3 = (...roles:string[]) => {
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
}
const rtaV3 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRole3', rtaV3);
