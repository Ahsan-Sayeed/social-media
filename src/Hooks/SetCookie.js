import Cookies from 'js-cookie';

const SetCookie = (value)=>{
    Cookies.set('tk', value);
}

export default SetCookie;