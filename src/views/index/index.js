import { list, typeTree, dataOfficerSelect, info, listDel, listAdd, listEdit } from "@/api/database/dataRecord";
export default {
  name: 'DataRecord',
  data() {
    return {
      h: 0,
      // 字典
      sys_yes_no: [],
      sys_yes_no_search: [],
      // 基础数据
      baseData: {
        fileUrl: import.meta.env.VITE_APP_API_URL,
        typeTree: [],
        dataOfficerSelect: [],
        class: undefined,
      },
      // 表格
      table: {
        // 遮罩层
        loading: false,
        // 总条数
        total: 0,
        // 数据
        data: [],
      },
      // 表格搜索条件
      tableSearch: {
        query: {},
        queryReal: {}
      },
      // 操作
      operate: {
        // 选中数组 - 删除标识
        ids: [],
        // 选中数组 - 删除显示名
        names: [],
        // 非单个禁用
        single: true,
        // 非多个禁用
        multiple: true,
      },
      // 弹窗
      tc: {
        // 弹出层标题
        title: '',
        // 是否显示弹出层
        open: false,
      },
      // 表单
      form: {
        operation: undefined,
        // 校验
        rules: {
          classId: [
            { required: true, message: '请选择资料类别', trigger: 'change' }
          ],
          minutes: [
            { required: true, message: '请输入纪要', trigger: 'blur' }
          ],
          recordingTime: [
            { required: true, message: '请选择记录时间', trigger: 'change' }
          ],
          subject: [
            { required: true, message: '请输入主题', trigger: 'blur' }
          ],
          profileUploadList: [
            { required: true, message: '请选择附件', trigger: 'change' }
          ],
          orderNum: [
            { required: true, message: '请输入排序', trigger: 'blur' }
          ],
          pinned: [
            { required: true, message: '请选择置顶', trigger: 'change' }
          ],
          keyMarking: [
            { required: true, message: '请选择重点标识', trigger: 'change' }
          ],
        },
        // 数据
        data: {},
        // 节流阀
        butLoading: false,
      },
    };
  },
  created() {
    this.initData();
  },
  methods: {

    // 初始化数据
    async initData() {
      this.h = document.documentElement.clientHeight - 108;
      const res1 = await this.$dict.getDict('sys_yes_no');
      if (res1) {
        this.sys_yes_no = res1;
        this.sys_yes_no_search = this.$LJSbase.deepCopy(this.sys_yes_no);
        this.sys_yes_no_search.unshift({
          dictValue: undefined,
          dictLabel: '全部'
        });
      }
      await this.getTypeTree();
      this.getDataOfficerSelect();
    },
    async getDataOfficerSelect() {
      const res = await dataOfficerSelect();
      if (res.code === 200) {
        this.baseData.dataOfficerSelect = res.data;
      }
    },
    async getTypeTree() {
      const res = await typeTree();
      if (res.code === 200) {
        this.baseData.typeTree = this.handleTree(res.data);
        if (this.baseData.typeTree.length > 0) {
          this.tableSearch.query.classId = this.baseData.typeTree[0].id;
          this.handleQuery();
        }
      }
    },

    /** 查询资料记录列表 */
    getList() {
      this.table.loading = true;
      const queryReal = this.$apiQC.dateRange(this.tableSearch.queryReal);
      list(queryReal).then(res => {
        if (res.code === 200) {
          this.table.data = res.data;
        }
        this.table.loading = false;
      });
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.tableSearch.queryReal = this.$LJSbase.deepCopy(this.tableSearch.query);
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.tableSearch = {
        query: {},
        queryReal: {}
      };
      if (this.baseData.typeTree.length > 0) {
        this.tableSearch.query.classId = this.baseData.typeTree[0].id;
        this.handleQuery();
      }
    },
    
    // 取消按钮
    cancel() {
      this.tc.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form.data = {
        classId: this.tableSearch.queryReal.classId,
        pinned: '0',
        keyMarking: '0',
        recordingTime: this.$LJSdate.formatTime(new Date().getTime(), '{y}-{m}-{d}'),
        documenterId: !this.$store.getters.userinfo.admin ? this.$store.getters.userinfo.userId : undefined,
        orderNum: '1',
      };
      this.form.operation = undefined;
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.tc.open = true;
      this.tc.title = '添加资料记录';
      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }
    },
    /** 修改按钮操作 */
    handleUpdate(row, operation) {
      this.reset();
      if (operation) {
        this.form.operation = operation;
      }
      info(row.id).then(async res => {
        if (res.code === 200) {
          const fileList = [];
          res.data.profileUploadList.forEach((file) => {
            fileList.push({
              name: file.fileName,
              url: file.path,
            });
          });
          res.data.profileUploadList = fileList;
          this.form.data = res.data;
          this.tc.open = true;
          this.tc.title = '修改资料记录';
          if (this.$refs['form']) {
            this.$refs['form'].resetFields();
          }
        }
      });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.form.butLoading = true;
          const query = this.$LJSbase.deepCopy(this.form.data);
          const fileList = [];
          query.profileUploadList.forEach((file) => {
            fileList.push({
              fileName: file.name,
              path: file.url,
            });
          });
          query.profileUploadList = fileList;
          if (this.form.data.id != undefined) {
            listEdit(query).then(res => {
              if (res.code === 200) {
                this.$modal.msgSuccess('修改成功');
                this.tc.open = false;
                this.getList();
              }
              this.form.butLoading = false;
            });
          } else {
            listAdd(query).then(res => {
              if (res.code === 200) {
                this.$modal.msgSuccess('新增成功');
                this.tc.open = false;
                this.getList();
              }
              this.form.butLoading = false;
            });
          }
        }
      });
    },
    changeKeyMarking(row) {
      row.keyMarking = row.keyMarking === '0' ? '1' : '0';
      const query = {
        id: row.id,
        keyMarking: row.keyMarking,
      }
      listEdit(query).then(res => {
        if (res.code === 200) {
          this.$modal.msgSuccess(`已设置为${row.keyMarking === '0' ? '非重点' : '重点'}！`);
          this.getList();
        }
      });
    },
    changePinned(row) {
      row.pinned = row.pinned === '0' ? '1' : '0';
      const query = {
        id: row.id,
        pinned: row.pinned,
      }
      listEdit(query).then(res => {
        if (res.code === 200) {
          this.$modal.msgSuccess(`已${row.pinned === '0' ? '取消置顶' : '置顶'}！`);
          this.getList();
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      let ids = null;
      let names = null;
      if (row) {
        ids = row.id;
        names = `${row.subject}`;
      } else {
        ids = this.operate.ids;
        names = this.operate.names;
      }
      this.$LJSEl.delMessageBox({
        message: `是否确认删除“${names}”的资料记录数据项？`,
        doSomething: () => {
          this.$store.commit('loadingStore', {
            tag: true,
            text: '删除中....'
          });
          listDel(ids).then((res) => {
            if (res.code === 200) {
              this.getList();
              this.$modal.msgSuccess('删除成功');
            }
            this.$store.commit('loadingStore', {
              tag: false,
              text: '删除中....'
            });
          }).catch(()=>{
            this.$store.commit('loadingStore', {
              tag: false,
              text: '删除中....'
            });
          });
        }
      });
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.operate.ids = selection.map(item => item.id);
      this.operate.names = selection.map(item => {
        const result = `${item.subject}`;
        return result;
      });
      this.operate.single = selection.length!=1;
      this.operate.multiple = !selection.length;
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryReal = this.$apiQC.dateRange(this.tableSearch.queryReal);
      this.download('/profile/datainfo/export', {
        ...queryReal
      }, `资料记录列表.xlsx`)
    }
  }
};