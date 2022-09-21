<template>
  <div class="login">
    <div class="login-box">
      <!-- 头顶Loggo -->
      <div class="title"></div>
      <!-- 表单内容 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="50px"
      >
        <!-- mobile -->
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            show-password
            @keyup.enter.native="submitForm"
          ></el-input>
        </el-form-item>
        <!-- buttion -->
        <el-form-item>
          <el-button
            :plain="true"
            class="btnLogin"
            type="primary"
            @click="submitForm"
            :loading="loading"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    let checkMobile = (rule, value, callback) => {
      let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
      if (!reg.test(value)) {
        return callback(new Error('请输入正确的手机号码'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      ruleForm: {
        mobile: '13800000002',
        password: '123456'
      },
      rules: {
        mobile: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 6, max: 9, message: '密码长度必须在6-9位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.loading = true

      this.$refs.ruleForm.validate(async valid => {
        // 如果表单验证通过, valid = true
        if (valid) {
          try {
            await this.$store.dispatch('user/toLogin', this.ruleForm)
            this.loading = false
            // 跳转到dashboard
            this.$router.push('/')
          } catch (err) {
            console.log(err)
            this.loading = false
          }
        } else {
          console.log('表单验证失败')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('~@/assets/common/logBg.png');
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 580px;
    .title {
      height: 50px;
      background: url('~@/assets/common/login-logo.png') no-repeat center;
      margin-bottom: 10px;
    }
    ::v-deep .el-form-item__label {
      color: #fff;
    }

    .btnLogin {
      width: 100%;
    }
  }
}
</style>
