const convertVND = (x)=>{
    return x = x.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}

export default convertVND;