function LoginPage(value = false) {
    Pagestr=value
    if (value) {
        $('body').css('background','#F8F8F8')
        $('.onlogin').css('display','none')
        $('.login').css('display','')
    } else {
        $('body').css('background','#fff')
        $('.onlogin').css('display','')
        $('.login').css('display','none')
    }
}
function init() {
    let src = ''
    arr.forEach((item,index) => {
        src += ` <div class="AccountItem" onclick="xuanzhong(${index})">
            <p class="AccountItemNumbleft"></p>
            <div class="AccountItemNumb">
                <div class="broadband">
                    <p class="broadbandNumb">宽带账号：${item.account}</p>
                    <img class="state" src="./image/login/weixuanzhong.png" alt="" style="display:${index != arrIndex? 'block' : 'none'};">
                    <img class="state" src="./image/login/xuanzhong.png" alt="" style="display:${index == arrIndex? 'block' : 'none'};">
                </div>
            </div>
            <div class="AccountItemData">
                <div class="AccountItemDataitem">
                    <p class="AccountItemTitle">地址</p>
                    <p class="AccountItemcentent">${item.address}</p>
                </div>
                <div class="AccountItemDataitem">
                    <p class="AccountItemTitle">宽带套餐</p>
                    <p class="AccountItemcentent">${item.Package}</p>
                </div>
                <div class="AccountItemDataitem" style="display:${Pagestr ? 'none' : ''};">
                    <p class="AccountItemTitle">代付手机</p>
                    <p class="AccountItemcentent">${item.phone}</p>
                </div>
                <div class="AccountItemDataitem">
                    <p class="AccountItemTitle">有效期</p>
                    <p class="AccountItemcentent">
                    ${item.endTitme}
                        <img class="becomeDue" style="display:${item.Isexpire ? '' : 'none'};" src="./image/login/becomeDue.png" alt="">
                    </p>
                </div>
            </div>
        </div>`
    });
    $(`.loginAccountList`).empty()
    $(`.loginAccountList`).append(src);
}
function xuanzhong(index)   {
    console.log(index)
    arrIndex=index
    init()
}
function modify(value){
    console.log(value)
    sessionStorage.setItem('modify',value)
    window.location.href='./modify.html'
}