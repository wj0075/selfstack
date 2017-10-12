<template>
    <section>
        <header class="top-tips">
            <span class="num-tip" v-if="fatherComponent == 'home'" v-text="level">{{}}</span>
            <span class="num-tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
        </header>
        <div v-if="fatherComponent == 'home'" >
            <div class="home-logo item-container-style"></div>
            <router-link to="item" class="start button-style" ></router-link>
        </div>
        <div v-if="fatherComponent == 'item'" >
            <div class="item-back item-container-style">
                <div class="item-list-container" v-if="itemDetail.length > 0">
                    <header class="item-title">{{itemDetail[itemNum-1].topic_name}}</header>
                    <ul>
                        <li  v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item-list">
                            <span class="option-style" v-bind:class="{'has-choosed':choosedNum==index}">{{chooseType(index)}}</span>
                            <span class="option-detail">{{item.answer_name}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <span class="next-item button-style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
            <span class="submit-item button-style" v-else @click="submitAnswer"></span>
        </div>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'itemcontainer',
        data() {
            return {
                itemId: null, //题目ID
                choosedNum: null, //选中答案索引
                choosedId:null //选中答案id
            }
        },
        props:['fatherComponent'],
        computed: mapState([
            'itemNum', //第几题
            'level', //第几周
            'itemDetail', //题目详情
            'timer', //计时器
        ]),
        methods: {
            ...mapActions([
                'addNum',
                'initializeData',
            ]),
            //点击下一题
            nextItem(){
                if (this.choosedNum !== null) {
                    this.choosedNum = null;
                    //保存答案, 题目索引加一，跳到下一题
                    this.addNum(this.choosedId)
                }else{
                    alert('您还没有选择答案哦')
                }
            },
            //索引0-3对应答案A-B
            chooseType: type => {
                switch(type){
                    case 0: return 'A';
                    case 1: return 'B';
                    case 2: return 'C';
                    case 3: return 'D';
                }
            },
            //选中的答案信息
            choosed(type,id){
                this.choosedNum = type;
                this.choosedId = id;
            },
            //到达最后一题，交卷，请空定时器，跳转分数页面
            submitAnswer(){
                if (this.choosedNum !== null) {
                    this.addNum(this.choosedId)
                    clearInterval(this.timer)
                    this.$router.push('score')
                }else{
                    alert('您还没有选择答案哦')
                }
            },
        },
        created(){
            //初始化信息
            this.initializeData();
            document.body.style.backgroundImage = 'url(./images/1-1.jpg)';
        }
    }
</script>
<style lang="scss" scoped>
    @import "../style/common";
    .top-tips{
        position: absolute;
        height:rpx(735/2);
        width: rpx(325/2);
        top: rpx(-130/2);
        right: rpx(160/2);
        background: url("../images/WechatIMG2.png") no-repeat;
        background-size: 100% 100%;
        z-index: 10;
        .num-tip{
            position: absolute;
            left: rpx(50/2);
            bottom: rpx(40/2);
            height: rpx(70);
            width: rpx(250/2);
            font-size: rpx(60/2);
            font-family: '黑体';
            font-weight: 600;
            color: #a57c50;
            text-align: center;
        }
    }
    .item-container-style{
        position: absolute;
        top: rpx(410/2);
        left: rpx(100/2);
        height: rpx(1162.5/2);
        width: rpx(1315/2);
        background-repeat: no-repeat;
    }
    .home-logo{
        background-image: url(../images/1-2.png);
        background-size: rpx(1314.2/2) 100%;
        background-position: right center;
    }
    .item-back{
        background-image: url(../images/2-1.png);
        background-size: 100% 100%;
    }
    .button-style{
        display: block;
        position: absolute;
        top: rpx(1650/2);
        left: 50%;
        height: rpx(210/2);
        width: rpx(435/2);
        margin-left: rpx(-240/2);
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .start{
        background-image: url(../images/1-4.png);
    }
    .next-item{
        background-image: url(../images/2-2.png);
    }
    .submit-item{
        background-image: url(../images/3-1.png);
    }
    .item-list-container{
        position: absolute;
        height: rpx(700/2);
        width: rpx(800/2);
        top: rpx(240/2);
        left: rpx(300/2);
        -webkit-font-smoothing: antialiased;
    }
    .item-title{
        font-size: rpx(65/2);
        color: #fff;
        line-height: rpx(70/2);
    }
    .item-list{
        font-size: 0;
        margin-top:rpx(40/2);
        width: rpx(1000/2);
        span{
            display: inline-block;
            font-size: rpx(60/2);
            color: #fff;
            vertical-align: middle;
        }
        .option-style{
            height: rpx(72.5/2);
            width: rpx(72.5/2);
            border: 1px solid #fff;
            border-radius: 50%;
            line-height: rpx(72.5/2);
            text-align: center;
            margin-right: rpx(30/2);
            font-size: rpx(50/2);
            font-family: 'Arial';
        }
        .has-choosed{
            background-color: #ffd400;
            color: #575757;
            border-color: #ffd400;
        }
        .option-detail{
            width: rpx(750/2);
            padding-top: rpx(11/2);
        }
    }

</style>