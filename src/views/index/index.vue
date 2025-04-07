<template>
  <div class="childPage" :style="{
    height: `${h}px`,
  }">
    <div class="comPage">
      <el-form class="comSearch" :model="tableSearch.query" size="default" :inline="true">
        <el-form-item label="类别" prop="classId">
          <el-tree-select
            v-model="tableSearch.query.classId"
            :data="baseData.typeTree"
            check-strictly
            :render-after-expand="false"
            node-key="id"
            :props="{ label: 'name' }"
            placeholder="请选择类别"
            style="width: 150px;"
            @change="handleQuery"
          />
        </el-form-item>
        <el-form-item label="主题" prop="searchValue">
          <el-input v-model="tableSearch.query.searchValue" placeholder="请输入主题" clearable style="width: 135px;" @change="handleQuery"/>
        </el-form-item>
        <el-form-item label="重点标识" prop="keyMarking">
          <el-radio-group v-model="tableSearch.query.keyMarking" @change="handleQuery">
            <el-radio-button
              v-for="dict in sys_yes_no_search"
              :key="dict.dictValue"
              :label="dict.dictValue">{{ dict.dictLabel }}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <DateRange
          formItemLabel="记录日期"
          v-model="tableSearch.query.date"
          dateType="date"
          :change_start="handleQuery"
          :change_end="handleQuery">
        </DateRange>
        <!-- <el-form-item>
          <el-button type="primary" @click="handleQuery">
            <el-icon class="el-icon--left"><Search /></el-icon>搜索
          </el-button>
          <el-button type="warning" @click="resetQuery">
            <el-icon class="el-icon--left"><Refresh /></el-icon>重置
          </el-button>
        </el-form-item> -->
      </el-form>
      <el-row class="comOperate">
        <el-col v-hasPermi="['profile:datainfo:add']">
          <el-button
            type="primary"
            size="large"
            @click="handleAdd"
            style="width: 100%;"
          ><el-icon class="el-icon--left"><Plus /></el-icon>新增</el-button>
        </el-col>
      </el-row>

      <div class="cards">
        <el-scrollbar>
          <div class="box">
            <div class="card" v-for="(card, i) in table.data" :key="i">
              <span @click="changeKeyMarking(card)" class="important iconfont icon-zhongdianguanzhu" :class="{ active: card.keyMarking === '1' }"></span>
              <span @click="changePinned(card)" class="topping iconfont icon-zhiding" :class="{ active: card.pinned === '1' }"></span>
              <div class="info">
                <div class="one">主题：{{ card.subject }}</div>
                <div class="one">资料员：{{ card.documenter }}</div>
                <div class="one">记录时间：{{ card.recordingTime }}</div>
              </div>
              <div class="butBox">
                <el-button
                  size="small"
                  type="primary"
                  text
                  @click="handleUpdate(card)"
                  v-hasPermi="['profile:datainfo:edit']"
                ><el-icon><EditPen /></el-icon>修改</el-button>
                <el-button
                  size="small"
                  type="danger"
                  text
                  @click="handleDelete(card)"
                  v-hasPermi="['profile:datainfo:remove']"
                ><el-icon><Delete /></el-icon>删除</el-button>
                <el-button
                  size="small"
                  text
                  @click="handleUpdate(card, 'info')"
                ><el-icon><DArrowRight /></el-icon>详情</el-button>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>

    <!-- 添加或修改对话框 -->
    <el-dialog :title="tc.title" v-model="tc.open" append-to-body width="50%" top="5vh">
      <template v-if="form.operation === 'info'">
        <el-form class="comForm" label-width="90px">
          <el-row>
            <el-col :span="24">
              <el-form-item label="资料类别" class="database_dataRecord_fileList">{{ form.data.className }}</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="主题" class="database_dataRecord_fileList">{{ form.data.subject }}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="记录时间">{{ form.data.recordingTime }}</el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="纪要" class="database_dataRecord_fileList">{{ form.data.minutes }}</el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="资料员">{{ form.data.documenter }}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="排序">{{ form.data.orderNum }}</el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="说明" class="database_dataRecord_fileList">{{ form.data.notes }}</el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="置顶">
                <dict-tag :options="sys_yes_no" :value="form.data.pinned"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="重点标识">
                <dict-tag :options="sys_yes_no" :value="form.data.keyMarking"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="附件" class="database_dataRecord_fileList">
            <div
              class="item"
              v-for="(item, i) in form.data.profileUploadList" :key="i">
              <div class="name">{{ item.name }}</div>
              <div class="but" @click="$run.goExternalUrl(baseData.fileUrl + item.url)"><el-icon><FolderOpened /></el-icon></div>
            </div>
          </el-form-item>
        </el-form>
      </template>
      <template v-else>
        <el-form class="comForm" ref="form" :model="form.data" :rules="form.rules" label-width="90px">
          <el-row>
            <el-col :span="24">
              <el-form-item label="资料类别" prop="classId">
                <el-tree-select
                  v-model="form.data.classId"
                  :data="baseData.typeTree"
                  check-strictly
                  :render-after-expand="false"
                  node-key="id"
                  :props="{ label: 'name' }"
                  placeholder="请选择类别"
                  style="width: 100%;"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="主题" prop="subject">
                <el-input v-model="form.data.subject" maxlength="60" placeholder="请输入主题"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="记录时间" prop="recordingTime">
                <el-date-picker
                  v-model="form.data.recordingTime"
                  value-format="YYYY-MM-DD"
                  type="date"
                  placeholder="请选择记录时间"
                  :editable="false"
                  :clearable="true"
                  :disabledDate="$LJSfc.pickerOptions()"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="纪要" prop="minutes">
            <el-input v-model="form.data.minutes" :rows="3" type="textarea" maxlength="200" placeholder="请输入纪要"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="资料员" prop="documenterId">
                <el-select v-model="form.data.documenterId" placeholder="请选择资料员" clearable style="width: 100%">
                  <el-option
                    v-for="item in baseData.dataOfficerSelect"
                    :key="item.userId"
                    :label="item.nickName"
                    :value="item.userId"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="排序" prop="orderNum">
                <el-input
                  v-model="form.data.orderNum"
                  @input="$LJSfc.numCheck(form.data, 'orderNum')"
                  maxlength="5"
                  placeholder="请输入排序"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="说明" prop="notes">
            <el-input v-model="form.data.notes" :rows="3" type="textarea" maxlength="200" placeholder="请输入说明"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="置顶" prop="pinned">
                <el-radio-group v-model="form.data.pinned">
                  <el-radio-button
                    v-for="dict in sys_yes_no"
                    :key="dict.dictValue"
                    :label="dict.dictValue">{{ dict.dictLabel }}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="重点标识" prop="keyMarking">
                <el-radio-group v-model="form.data.keyMarking">
                  <el-radio-button
                    v-for="dict in sys_yes_no"
                    :key="dict.dictValue"
                    :label="dict.dictValue">{{ dict.dictLabel }}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="附件" prop="profileUploadList">
            <file-upload
              :limit="10"
              :fileSize="50"
              v-model="form.data.profileUploadList"
            />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button @click="cancel" class="comResetBut" type="success">{{ form.operation === 'info' ? '关闭' : '取消' }}</el-button>
        <ButtonThrottle v-model="form.butLoading" style="margin-left: 12px;" v-if="form.operation !== 'info'">
          <el-button @click="submitForm" type="primary">保存</el-button>
        </ButtonThrottle>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import index from "./index";
export default index;
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>