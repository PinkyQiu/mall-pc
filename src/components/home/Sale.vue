<template>
  <div class="layout">
  	<div class="content-title clearfix">
  		<h2 class="fl">限时特价</h2>
  		<h3 class="fl">/每一天都有惊喜/</h3>
  	</div>
  	<div class="wrapper layout">
  	  <i class="arrow left" @click="arrowLeft"></i>
	  	<div class="good_wrapper" ref="goodList">
		  	<div class="good_list">
			  	<Item 
					ref="goodListPic" 
					class="good_list_pic clearlfix" 
					:showPrice="false"
					:list="hotList"
				></Item>
		  	</div>
	  	</div>
	  	<i class="arrow right" @click="arrowRight"></i>
  	</div>
  </div>
</template>

<script>
import Item from '../commom/Item'
export default {
  data () {
    return {
    	currentDistance:0,
    }
	},
	computed: {
		hotList () {
				let list = this.$store.state.home.hotList
				list = list.slice(4)
				return list
			},
	},
  methods: {
  	go(isNext) {
			var goodList = this.$refs.goodList;
			var goodListPic = this.$refs.goodListPic;
			var itemWidth = 238
			var wrapWidth = goodList.clientWidth
			var picListWidth = goodListPic.$el.clientWidth
			var newDistance = this.currentDistance
			if(isNext) {
				newDistance -= itemWidth
			} else {
				newDistance += itemWidth
			}
			
			if(newDistance > 0 || (Math.abs(newDistance) + wrapWidth) > picListWidth) {
				return
			}
			console.log(goodListPic.$el)
			goodListPic.$el.style.transform ='translateX('+ newDistance +'px)'

			this.currentDistance = newDistance
		},
		arrowLeft() {
			this.go(false);
		},
		arrowRight() {
			this.go(true);
		},
  },
  components:{
		Item,
	}
  
}
</script>

<style scoped lang="scss">
  .content-title{
  	height: 38px;
    border-bottom: 2px solid #333;
    h2 {
		    font-weight: 300;
		    line-height: 1;
		    font-size: 24px;
		    padding: 10px 0 14px;
		    color: #333;
		}
		h3 {
		    font-weight: 300;
		    line-height: 1;
		    font-size: 18px;
		    padding: 16px 0 14px;
		    font-family: " microsoft yahei";
		    color: #333;
		    margin-left: 25px;
		}
  }
  .good_wrapper{
  	position: relative;
  	float: left;
  	width: 100%;
  	height: 294px;
    border: 1px solid #eee;
    border-top: none;
    background-color:#f5f3f3;
    .good_list{
    	position: absolute;
	    top: 8px;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    overflow: hidden;
	    font-size: 0;
	    white-space: nowrap;
    }
    .good_list_pic{
    	position: absolute;
      left:0;
      transition:all .3s;
      .item{
      	display: inline-block;
      	width: 226px;
        height: 319px;
		    margin-right: 20px;
		    cursor: pointer;
		    transition: all .3s ease;
        border: 1px solid #fff;
        margin-right: 17px;
        text-align: center;
        &:hover{
        	border: 1px solid #666;
        };
      }
      .item_pic{
      	display: block;
		    margin: 0 auto;
		    width: 200px;
		    height: 200px;
      }
      .item_des{
      	padding: 0 28px;
		    height: 43px;
		    line-height: 20px;
		    overflow: hidden;
		    text-align: center;
		    font-size: 14px;
		    margin-top: 3px;
      }
      .item_login{
      	margin: 0 9px;
		    height: 38px;
		    overflow: hidden;
		    cursor: pointer;
		    span{
		    	display: block;
		    	height: 36px;
			    line-height: 36px;
			    font-size: 14px;
			    text-align: center;
			    border: 1px dotted #333;
			    transition: all .1s ease-in 0s;
			    &:hover{
			    	background-color: #F7931E;
            color: #fff;
			    };
		    }

      }
    }
  }
  .wrapper{
  	position: relative;
  }
  .arrow {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 146px;
    cursor: pointer;
    z-index: 10;
    &.left{
    	background: url(../images/left.png) 0 0 no-repeat;
      background-size: 100% 100%;
      left: -30px;
    }
    &.right{
    	background: url(../images/right.png) 0 0 no-repeat;
     background-size: 100% 100%;
     right: -30px;
    }
  }
	
	
</style>
