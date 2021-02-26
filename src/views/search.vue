<template>
  <div class="dormitory">
    <div class="searchWord">
      <el-input 
        v-model="search" 
        style="display: inline-block;width: 130px"  
        placeholder="请输入搜索内容">
      </el-input>
      <el-button type="primary" @click="searchTab()">搜索</el-button>
    </div>
    <div class="dormitoryData">
      <el-table ref="table" :data="res" tooltip-effect="dark" stripe style="width: 100%">
        <el-table-column label="序号"  type="index" width="65"></el-table-column>
        <el-table-column label="人物" prop="people">
        </el-table-column>
        <el-table-column label="关系" prop="relationship">
        </el-table-column>
        <el-table-column label="初见" prop="meet">
        </el-table-column>
        <el-table-column label="地点" prop="place">
        </el-table-column>
        <el-table-column label="昵称" prop="execg">
        </el-table-column>
        <el-table-column label="认识年限" prop="year">
        </el-table-column>
        <el-table-column label="成名之作" prop="works">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        res:[],
        search: ''
     }
  },
  mounted(){
    this.load()
  },
    methods: {
      // 模糊搜索
      searchTab () {
        const search = this.search
        if (search) {
          this.load();
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
          // 注意： filter() 不会对空数组进行检测。
          // 注意： filter() 不会改变原始数组。
          this.res = this.res.filter(data => {
            return Object.keys(data).some((key) => {
              // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
              // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
              return String(data[key]).toLowerCase().indexOf(search.toLowerCase()) > -1
            })
          })
        } else {
          this.load();
        }
      },
      load(){
        // 模拟后台返回数据赋值
        this.res=this.$store.state.dormitory;
      }
    }
  }
</script>