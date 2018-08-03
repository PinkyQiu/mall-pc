<template>
    <div class="banner">
        <div>
            <h2>立即入驻，走向未来</h2>
            <p>
                <router-link to="Login" class="button">
                    立即入驻
                </router-link>
            </p>
        </div>
        <div class="footer">
            <h3>申请流程</h3>
            <ul class="footer-main">
                <li class="item">
                    <p class="item-name"><span>1</span>注册登录</p>
                    <p class="item-detail">填写手机、邮箱注册飞凡平台账号激活账号即可开始入驻</p>
                </li>
                <li class="item">
                    <p class="item-name"><span>2</span>提交信息</p>
                    <p class="item-detail">提交资质信息，完善基本资料，并设置账号</p>
                </li>
                <li class="item">
                    <p class="item-name"><span>3</span>等待审核</p>
                    <p class="item-detail">2到3个工作日内反馈结果</p>
                </li>
                <li class="item">
                    <p class="item-name"><span>4</span>入驻成功</p>
                    <p class="item-detail">登录商家APP，管理门店、发布商品和活动</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .banner{
        min-height: 600px;
        background: #e2dede;
        background: url("../images/timg.jpg");
        background-size: contain;
        text-align: center;
        h2 {
            padding: 80px;
            font-size: 38px;
            color: #fff;
        }
        .button {
            display: inline-block;
            width: 200px;
            height: 40px;
            line-height: 40px;
            border-radius: 40px;
            background-color: rgba(0, 89, 201, 1);
            color: #fff;
            box-shadow: 0px 0px 20px #f7f7f7;
        }
    }
    .footer {
        margin-top: 100px;
        background-color: #fff;
        padding-bottom: 80px;
        h3 {
            padding: 40px;
            font-size: 16px;
        }
        .footer-main {
            font-size: 0px;
            .item {
                box-sizing: border-box;
                height: 130px;
                font-size: 16px;
                display: inline-block;
                width: 23%;
                box-sizing: border-box;
                padding: 20px;
                background-color: #f7f7f7;
                border-radius: 4px;
                margin: 1%;
                vertical-align: top;
            }
        }
        .item-name {
            padding: 10px;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                font-size: 14px;
                border-radius: 20px;
                margin-right: 10px;
                color: #fff;
                background-color: #F7931E;
            }
        }
        .item-detail {
            font-size: 14px;
        }
    }
</style>

