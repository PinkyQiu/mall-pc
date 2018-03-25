<template>
  <div>
	  <div class="goods layout" v-for="i in 3">
	  	<div class="content-title clearfix">
				<h2 class="tt fl">整机 服务器</h2>
				<ul class="tab-nav clearfix fr">
					<li class="item active">消费笔记本</li>
					<li class="item">戴尔台式机</li>
					<li class="item">戴尔笔记本</li>
					<li class="item">扬天笔记本</li>
					<li class="item">Think笔记本</li>
					<li class="item">华硕笔记本</li>
					<li class="item">启天台式机</li>
					<li class="item">启天台式机</li>
					<li class="item2">扬天台式机</li>
				</ul>
			</div>
			<div class="content_main layout clearfix">
				<div class="left fl">
					<img src="../images/left_pic.jpg" alt="" class="left_pic">
					<ul class="category">
							<li>消费笔记本</li>
							<li>戴尔台式机</li>
							<li>戴尔笔记本</li>
							<li>扬天笔记本</li>
							<li>Think笔记本</li>
							<li>华硕笔记本</li>
							<li>启天台式机</li>
							<li>扬天台式机</li>
						</ul>
				</div>
				<div class="right fr">
					<div class="right_list">
						<Item :num=8></Item>
					</div>
				</div>
			</div>
	  </div>
  </div>
</template>

<script>
import Item from '../commom/Item'
export default {
  data () {
    return {
    }
  },
  components:{
		Item,
	}
  
}
</script>

<style scoped lang="scss">
	.goods{
		padding: 20px 0;
	}
	.content-title{
    height: 38px;
    border-bottom: 2px solid #333;
	}
	.tt{
    font-weight: 300;
    line-height: 1;
    font-size: 24px;
    padding: 10px 0 6px;
    color: #333;
	}
	.tab-nav{
    padding-top: 6px;
    height: 32px;
    overflow: hidden;
		.item{
			font-size: 16px;
	    float: left;
	    margin: 0 5px;
	    padding: 0 10px;
	    line-height: 32px;
	    text-align: center;
	    cursor: default;
	    color: #333;
	    background-color: #fff;
	    &:hover,&.active{
	    	background-color:#000;
	    	color: #fff;
	    }
		}
	}
	.content_main{
		.left{
			position: relative;
			width: 234px;
			height: 570px;
		}
		.left_pic{
			width: 234px;
      height: 454px;
		}
		.category {
		    position: absolute;
		    bottom:0;
		    left: 0;
		    z-index: 3;
		    padding: 17px 14px 0 10px;
		    width: 210px;
		    height: 107px;
		    background: #fcecec;
		    li{
					float: left;
			    margin-bottom: 10px;
			    padding: 0 9px;
			    height: 15px;
			    line-height: 15px;
			    border-right: 1px solid #333;
			    white-space: nowrap;
			    font-size: 14px;
			    color: #333
				}
		}
		.right{
			width: 976px;
			height: 570px;
      overflow: hidden;
      .right_list{
      	background-color: #f5f3f3;
      	padding-top: 6px;
      	height: 564px;
      }
		}
	}
</style>
