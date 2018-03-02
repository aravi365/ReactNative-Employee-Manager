import { 
    EMPLOYEE_UPDATE
} from './index';
export const employeeUpdate =({ prop, value }) =>  {
return{
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
};

};