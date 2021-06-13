<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="条码">
        <el-input v-model="form.code" />
      </el-form-item>
      <el-form-item label="书名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="入馆时间">
        <el-col :span="11">
          <el-date-picker
            v-model="form.publish_date"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>

      <el-form-item label="简介">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getBookById } from '@/api/table'
export default {
  data() {
    return {
      form: {
        code: '',
        name: '',
        author: '',
        publish_date: '',
        desc: ''
      },
      loading: false
    }
  },
  created() {
    var id = this.$route.params.id
    if (id) {
      this.getBookInfo(id)
    }
  },
  methods: {
    getBookInfo(id) {
      this.loading = true
      getBookById(id).then((response) => {
        this.form = response.data
        this.loading = false
      })
    },
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

