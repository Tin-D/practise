function a(){
    return alert(1);
};
function b(){
    return alert(2);    
};
export{a, b}

// 模块化导出方式 
// export default与export的主要区别是不需要知道导出的具体变量名与导入时不需要{}