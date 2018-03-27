<template>
		<div class="layout">
		  <m-menu></m-menu>
			<div class="local">
				<span>当前位置：首页</span>
			</div>
			<div class="type">
				<h2 class="tt">商品筛选</h2>
				<div class="type_wrapper">
					<div class="item clearfix" v-for="(i,index) in 10" :class="showItem(index)">
						<div class="left fl">品牌:</div>
						<div class="right fl clearfix">
							<span class="all">全部</span>
							<a href="#" v-for="i in 60">联想</a>
						</div>
					</div>
				</div>
				<div class="show">
					<span @click="showOthers" v-if="showBtn">展开</span>
					<span @click="hideOthers" v-if="!showBtn">收起</span>
				</div>
			</div>
			<div class="goods">
				<h3 class="title">商品列表</h3>
				<div class="list clearfix">
					<item></item>
				</div>
				<ul class="pagination">
				  <li class="item">上一页</li>
				  <li class="item">首页</li>
				  <li class="item active">1</li>
				  <li class="item">2</li>
				  <li class="item">3</li>
				  <li class="item">4</li>
				  <li class="item">5</li>
				  <li class="item">6</li>
				  <li class="item">尾页</li>
				  <li class="item">下一页</li>
				</ul>
			</div>
		</div>
</template>
<script>
  import Item from '../commom/Item'
  import MMenu from '../commom/Menu'
	export default {
		data() {
			return{
				showType:false,  //隐藏部门类型
				showBtn:true     //展开按钮
			}
		},
		methods:{

			// 前四个产品类型出现，其他隐藏
			showItem(index) {
				if (index>3) {
					return this.showType === true ? '': 'hide'
				}else{
					return ''
				}
			},

			// 点击展开出现其他产品类型
			showOthers() {
				this.showType=true
				this.showBtn=false
			},

			// 点击收起隐藏其他产品类型
			hideOthers() {
				this.showType=false
				this.showBtn=true
			}
		},
		components:{
			Item,
			MMenu,
		}
		
	}
</script>
<style lang="scss" scoped>
  .local{
  	line-height: 44px;
    background-color: #F2F2F2;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    padding-left: 10px;
  }
  .type{
  	.tt{
  		height: 32px;
	    line-height: 32px;
	    font-size: 14px;
	    background: #F7F7F7;
	    padding: 0 12px;
	    font-weight: bold;
	    color: #666;
  	}
  	.type_wrapper{

  	}
  	.item{
  		padding: 10px;
	    border-bottom: 1px dashed #eee;
	    &.hide{
	    	display: none;
	    }
	    .left{
	    	margin-top: 5px;
	    	width: 115px;
	    }
	    .right{
	    	width:1075px;
	    }
	    .all{
	    	background: #0059c9;
		    color: #FFFFFF;
		    margin:5px 0 0 25px;
		    padding: 3px 5px;
	    }
	    a{
	    	color: #666;
		    margin:5px 0 0 25px;
		    padding: 3px 5px 0 1px;
		    display: inline-block;
		    &:hover{
		    	color:#0059c9;
		    };
	    }
  	}
  	.show{
	    position: relative;
	    text-align: center;
	    top: -1px;
	    border-top: 1px solid #ddd;
	    transition: border-color .15s ease-in-out;
	    margin-bottom: 10px;
	    &:hover{
        border-top: 1px solid #0059c9;
        span{
        	color: #0059c9;
        	border-color: #FFF #0059c9 #0059c9;
        }
	    };
	    span{
	    	position: relative;
		    display: inline-block;
		    margin-top: -1px;
		    height: 28px;
		    line-height: 28px;
		    padding: 0 40px 0 40px;
		    border-width: 1px;
		    border-style: solid;
		    border-color: #FFF #DDD #DDD;
		    background: #fff;
		    cursor: pointer;
		    color: #333;
		    transition: border-color .15s ease-in-out;
	    }
  	}
  }
  .goods{
  	border: 1px solid #ddd;
    background-color: #f7f7f7;
    margin-bottom: 20px;
		.title{
			height: 40px;
	    line-height: 40px;
	    font-size: 16px;
	    padding-left: 5px;
	    background-color: #e7e7e7;
	    margin-bottom: 10px;
		}
		.pagination {
	    position: relative;
	    width: 100%;
	    height: 22px;
	    margin: 20px -17px 40px;
	    text-align: right;
	    li {
		    display: inline-block;
		    height: 22px;
		    line-height: 22px;
		    border-radius: 2px;
		    border: 1px solid #0059c9;
		    margin-left: 10px;
		    padding: 0 8px;
        color: #0059c9;
        &:hover,&.active{
        	background-color:#0059c9;
        	color: #fff;
        };
			}
		}
  }
</style>