<template>
  <div style="width:500px">
    <h1>validater</h1>
    <p></p>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" size="mini">
      <el-form-item label="标题" prop="title" r :max="5">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone" r phone>
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" v email>
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="整数" prop="int" v int>
        <el-input v-model="ruleForm.int"></el-input>
      </el-form-item>
      <el-form-item label="数字" prop="num" v number>
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age" v :int-min="1" :int-max="200">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="人数" prop="peopleCount" v :int-min="0">
        <el-input v-model="ruleForm.peopleCount"></el-input>
      </el-form-item>
      <el-form-item label="金额" prop="amount" r :num-min="0">
        <el-input v-model="ruleForm.amount"></el-input>
      </el-form-item>
      <el-form-item label="金额" prop="amount2" r :num-d="2">
        <el-input v-model="ruleForm.amount2"></el-input>
      </el-form-item>
      <el-form-item label="QQ号" prop="qq" v qq>
        <el-input v-model="ruleForm.qq"></el-input>
      </el-form-item>
      <el-form-item label="微信号" prop="wx" v wx>
        <el-input v-model="ruleForm.wx"></el-input>
      </el-form-item>
      <el-form-item
        label="身份证号"
        prop="idCard"
        v
        regex="(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)"
      >
        <el-input v-model="ruleForm.idCard"></el-input>
      </el-form-item>
      <el-form-item label="活动性质" prop="type" r>
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource" r>
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc" r>
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="产品" v-for="(p, index) in ruleForm.products" :key="p.index">
        <el-col :span="6">
          <el-form-item :prop="`products.${index}.name`" r>
            <el-input v-model="p.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">-</el-col>
        <el-col :span="6">
          <el-form-item :prop="`products.${index}.count`" v int>
            <el-input placeholder="数量" v-model="p.count"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">-</el-col>
        <el-col :span="6">
          <el-form-item :prop="`products.${index}.desc`" v :max="6">
            <el-input placeholder="描述" v-model="p.desc"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        type: [],
        products: [
          { name: "car", count: 5, desc: "特斯拉" },
          { name: "tv", count: 3, desc: "" },
          { name: "pc", count: 0, desc: "dell" }
        ]
        // title: "",
        // phone: "",
        // email: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>