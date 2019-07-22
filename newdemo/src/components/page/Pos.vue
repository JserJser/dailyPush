<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width:100%;">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <span>
                <small>金额:</small>
                {{totalMoney}}
              </span>
              <span>
                <small>数量:</small>
                {{totalCount}}
              </span>
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="ofen-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" :key="goods.goodsId" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">{{goods.price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img
                        src="https://img.4008823823.com.cn/kfcios/Version/635_667540.jpg"
                        width="100%"
                      />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">{{goods.price}}$</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="cookList">
                <li v-for="goods in type1Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg">
                    <img
                      src="https://img.4008823823.com.cn/kfcios/Version/635_667540.jpg"
                      width="100%"
                    />
                  </span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">{{goods.price}}$</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="cookList">
                <li v-for="goods in type2Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg">
                    <img
                      src="https://img.4008823823.com.cn/kfcios/Version/635_667540.jpg"
                      width="100%"
                    />
                  </span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">{{goods.price}}$</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="cookList">
                <li v-for="goods in type3Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg">
                    <img
                      src="https://img.4008823823.com.cn/kfcios/Version/635_667540.jpg"
                      width="100%"
                    />
                  </span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">{{goods.price}}$</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
// import { Message } from 'element-ui'
export default {
  name: 'Pos',
  data () {
    return {
      tableData: [
        // {
        //   goodName: '香辣鸡腿堡',
        //   price: 15,
        //   count: 1
        // },
        // {
        //   goodName: '爱心薯条',
        //   price: 8,
        //   count: 1
        // },
        // {
        //   goodName: '甜筒',
        //   price: 8,
        //   count: 1
        // }
      ],
      oftenGoods: [
        // {
        //   goodsId: 1,
        //   goodsName: '香辣鸡腿堡',
        //   price: 18
        // },
        // {
        //   goodsId: 2,
        //   goodsName: '薯条',
        //   price: 10
        // },
        // {
        //   goodsId: 3,
        //   goodsName: '可乐',
        //   price: 8
        // },
        // {
        //   goodsId: 4,
        //   goodsName: '鸡块',
        //   price: 21
        // },
        // {
        //   goodsId: 5,
        //   goodsName: '大份鸡腿',
        //   price: 18
        // }
      ],
      // type0Goods: [
      //   {
      //     goodsId: 1,
      //     goodsImg: 'https://img.4008823823.com.cn/kfcios/Version/621_626971.jpg',
      //     goodsName: '芝士厚菇素堡',
      //     price: 18
      //   },
      //   {
      //     goodsId: 2,
      //     goodsImg: 'https://img.4008823823.com.cn/kfcios/Version/640_684737.jpg',
      //     goodsName: '芝士澳牛堡',
      //     price: 10

      //   },
      //   {
      //     goodsId: 3,
      //     goodsImg: 'https://img.4008823823.com.cn/kfcios/Version/635_667540.jpg',
      //     goodsName: '脏脏大虾鸡堡',
      //     price: 12
      //   }
      // ],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalMoney: 0,
      totalCount: 0
    }
  },
  created: function () {
    let baseUrl =
      'https://www.easy-mock.com/mock/5c07a781d292dd2dc4f9caa8/mockapi'
    axios
      .get(baseUrl + '/oftenGoods')
      .then(response => {
        console.log('response', response)
        this.oftenGoods = response.data
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问')
      })
    axios
      .get(baseUrl + '/typeGoods')
      .then(response => {
        console.log('......response', response)
        this.type0Goods = response.data[0]
        this.type1Goods = response.data[1]
        this.type2Goods = response.data[2]
        this.type3Goods = response.data[3]
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问')
      })
  },
  mounted: function () {
    var orderHeight = document.body.clientHeight
    console.log('orderHeight....', orderHeight)
    document.getElementById('order-list').style.height = orderHeight + 'px'
  },
  methods: {
    addOrderList (goods) {
      // 添加商品，商品是否已经在订单列表中
      this.totalMoney = 0
      this.totalCount = 0
      let isHave = false
      // 根据判断的值编写业务逻辑
      // 判断是否存在商品
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId === goods.goodsId) {
          isHave = true // 存在
        }
      }
      // 根据判断的值编写业务逻辑
      if (isHave) {
        // 改变列表中商品的数量 这个过滤的是什么？
        let arr = this.tableData.filter(o => o.goodsId === goods.goodsId)
        arr[0].count++
        console.log('arr....是什么', arr)
      } else {
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        }
        this.tableData.push(newGoods)
      }
      // 计算汇总金额和数量
      this.tableData.forEach(element => {
        this.totalCount += element.count
        this.totalMoney = this.totalMoney + element.price * element.count
      })
      this.getAllMoney()
    },
    // 删除单个商品
    delSingleGoods (goods) {
      this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId)
      this.getAllMoney()
    },
    delAllGoods () {
      this.tableData = []
      this.totalMoney = 0
      this.totalCount = 0
    },
    // 汇总数量和金额
    getAllMoney () {
      this.totalCount = 0
      this.totalMoney = 0
      this.tableData.forEach(element => {
        this.totalCount += element.count
        this.totalMoney = this.totalMoney + element.price * element.count
      })
    },
    // 结账 模拟结账
    checkout () {
      if (this.totalCount !== 0) {
        this.tableData = []
        this.totalCount = 0
        this.totalMoney = 0
        this.$message({
          message: '结账成功，感谢你的光顾啊',
          type: 'success'
        })
      } else {
        this.$message.error('不能为空')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pos-order {
  background-color: #f9fafc;
}
.div-btn {
  margin-top: 10px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  cursor: pointer;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
  margin-left: 20px;
  border-top: 1px solid #d3dce6;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totalDiv {
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid#D3dce6;
  color: red;
}
</style>
