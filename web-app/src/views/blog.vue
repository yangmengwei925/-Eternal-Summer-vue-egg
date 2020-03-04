<template>
    <div class="blog">
        
        <div class="blog_">
            <!-- 筛选 -->
            <div class="blog_search">
                <!-- 搜索关键字 -->
                <div>
                    <el-input placeholder="请输入关键字" v-model="keyword"></el-input>
                    <el-button @click="onSearch">搜索</el-button>
                </div>
                <!-- 近期发布 -->
                <div></div>
                <!-- 标签 -->
                <div></div>
            </div>

            <!-- 列表 -->
            <div class="blog_list">
                <div v-for="item in list" :key="item.id">
                    <img src="@/assets/blog/b1.jpg"/>
                    <div class="icon">
                        <span class="el-icon-user-solid"></span>
                        <span>{{item.author}}</span>
                        <span class="el-icon-grape"></span>
                        <span>{{$transTimer(item.subTime)}}</span>
                    </div>
                    <div class="title">{{item.title}}</div>
                    <div class="text">{{item.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[],
            keyword:''
        }
    },
    mounted(){
        this.initData();
        
    },
    methods:{
        //初始化游记列表
        initData(){
            let {$httpSuccess} = this;
            $httpSuccess(['get','/blog/list'], data => this.list = data)
        },
        onSearch(){

        }
    }
}
</script>
<style scoped>
.blog{
    width: 100vw;
    margin: 80px 0;
}
.blog_{
    width: 80%;
    min-width: 1000px;
    overflow: hidden;
    margin:0 auto;
}
.blog_search{
    width: 20%;
    min-width: 200px;
    float: left;
}
.blog_list{
    width: 80%;
    float: left;
    min-width: 800px;
}
.blog_list img{
    width: 100%;
}
.blog_list .icon{
    height: 50px;
    line-height: 50px;
}
.blog_list .title{
    height: 50px;
    line-height: 50px;
    color: orange;
    font-size: 22px;
}
.blog_list .text{
    line-height: 20px;
    font-size: 14px;
    margin: 30px 0 50px;
    box-sizing: border-box;

}
</style>