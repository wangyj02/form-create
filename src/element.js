/**
 *
 * JS表单生成器 | ElementUI 版本
 * Author: xaboy
 * Github: https://github.com/xaboy/form-create
 */

import formCreate, {setDrive, install} from './core/formCreate';
import drive from './components/element/index'

setDrive(drive);

if (typeof window !== 'undefined') {
    window.formCreate = formCreate;

    if (window.Vue) {
        install(Vue);
    }
}


export default formCreate;
