<template>
  <div class="app-container">
    <div class="content-container outpatient-container" style="width:776px">
      <div>
        <div class="top-head-wrapper" style="top: 58px; width: 774px;"><div class="outpatient-form-tab-wrapper"><div class="abc-tabs"><div class="abc-tabs-item abc-tabs-item-active"><!----> <!---->

        门诊

        <!----> <!----> <!----></div><div class="abc-tabs-item"><!----> <!---->

        慢病管理

        <!----> <!----> <!----></div> <div class="abc-tabs-active-bar" style="transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s; transform: translateX(0px); width: 32px;"></div></div></div> <div class="outpatient-record-count">
            
        </div> <div class="buttons-wrapper"><!----> <button disabled="disabled" class="abc-button abc-button-blank abc-button-normal is-disabled"><!----> 
                    费用预览
                </button> <!----> <button class="abc-button abc-button-primary abc-button-normal"><!----> 
                        完成接诊
                    </button> <button class="abc-button abc-button-blank abc-button-normal"><!----> 
                        删除
                    </button> <!----> <!----> <!----> <!----></div></div>
        <div class="main-content">
          <div class="abc-form">
            <div class="outpatient-patient-form" style="display: flex"><div class="patient-form" style="display:flex"><div class="abc-form-item is-required"><!----> <div class="abc-form-item-content"><!----> <div class="abc-input-wrapper abc-autocomplete-wrapper" style="width: 116px;"><!----> <input autocomplete="off" spellcheck="false" type="text" maxlength="20" placeholder="姓名" class="abc-input__inner"> <div class="suggestions-wrapper patient-suggestion" style="width: 511px; display: none;"><div class="suggestion-title"><div class="patient-info">
                            患者信息
                        </div> <div class="mr-info">
                            上次就诊
                        </div></div> <div class="abc-scrollbar-wrapper"><dl>     </dl></div> <div></div></div> <!----> <!----> <div style="display: none;"><div class="clear-btn"><i class="icon iconfont cis-icon-close_popup_grey_hov"></i></div></div></div></div></div> <div class="abc-form-item is-required"><!----> <div class="abc-form-item-content"><!----> <div class="abc-select-wrapper" select-type="sex" style="width: 48px;"><input type="text" readonly="readonly" class="abc-input__inner" style="padding-left: 8px;">  <i class="iconfont cis-icon-dropdown_triangle"></i> <!----> <div class="options-wrapper" style="width: 50px; display: none;"><div class="option-item-wrapper"> <ul><!----> <li class="abc-option-item is-selected is-hover"><span>男</span></li> <li class="abc-option-item"><span>女</span></li></ul></div></div></div></div></div> <div class="abc-form-item patient-age-year is-required"><!----> <div class="abc-form-item-content"><!----> <div class="abc-input-wrapper abc-input-append"><!----> <input type="text" autocomplete="off" spellcheck="false" maxlength="500" class="abc-input__inner" style="width: 36px; padding: 3px 6px; text-align: center;"> <div class="append-input"><span>岁</span></div> <!----> <!----> <!----></div></div></div> <div class="abc-form-item patient-age-month is-required"><!----> <div class="abc-form-item-content"><!----> <div class="abc-input-wrapper abc-input-append"><!----> <input type="text" autocomplete="off" spellcheck="false" maxlength="500" class="abc-input__inner" style="width: 36px; text-align: center;"> <div class="append-input"><span>月</span></div> <!----> <!----> <!----></div></div></div> <!----> <div class="abc-form-item"><!----> <div class="abc-form-item-content"><!----> <div class="abc-input-wrapper abc-autocomplete-wrapper mobile-autocomplete" style="width: 106px;"><!----> <input autocomplete="off" spellcheck="false" type="text" maxlength="11" placeholder="手机号" class="abc-input__inner"> <div class="suggestions-wrapper patient-suggestion" style="width: 479px; display: none;"><div class="suggestion-title"><div class="patient-info">
                            患者信息
                        </div> <div class="mr-info">
                            上次就诊
                        </div></div> <div class="abc-scrollbar-wrapper"><dl>     </dl></div> <div></div></div> <!----> <!----> </div></div></div> <!----></div> <div class="reg-form" style="display:flex; padding-left:63px"><div class="abc-form-item is-required"><!----> <div class="abc-form-item-content"><!----> <div class="abc-select-wrapper" style="width: 140px;"><input type="text" readonly="readonly" placeholder="" class="abc-input__inner">  <i class="iconfont cis-icon-dropdown_triangle"></i> <!----> <div class="options-wrapper" style="width: 142px; display: none;"><div class="option-item-wrapper"> <ul><!----> <li class="abc-option-item is-selected is-hover"><span>张涵</span></li> <!----> </ul></div></div></div></div></div> <div class="abc-form-item" style="margin-right: 0px;"><!----> <div class="abc-form-item-content"><!----> <div class="abc-input-wrapper abc-input-prepend"><div class="prepend-input"><label class="prepend" style="width: 24px; font-size: 14px; text-align: center;"><i class="icon iconfont cis-icon-renminbi"></i></label></div> <input type="text" autocomplete="off" spellcheck="false" maxlength="500" placeholder="诊费" class="abc-input__inner" style="text-align: left; width: 70px; padding: 0px 3px 0px 24px;"> <!----> <!----> <!----> <!----></div></div></div></div></div>
            <!---->
            <div class="outpatient-form-item">
              <div class="title" style="padding-right: 7px">
                <h3 style="height: 32px">病历</h3>
                <div class="btn-group">
                  <!---->
                  <div class="add-btn">上传图片</div>
                  <div class="cut-line" />
                  <!---->
                  <div class="add-btn">病历模板</div>
                  <div>
                    <div
                      id="abc-popover-8924"
                      role="tooltip"
                      tabindex="0"
                      aria-hidden="true"
                      class="abc-popover abc-popper"
                      style="
                        position: absolute;
                        z-index: 1992;
                        outline: none;
                        width: auto;
                        display: none;
                      "
                    >
                      <div class="outpatient-setting-popover">
                        <div class="setting-title">
                          病历设置
                          <button
                            class="abc-button abc-button-text abc-button-normal"
                            style="margin-left: auto"
                          >
                            <!---->
                            恢复默认
                          </button>
                        </div>
                        <div class="setting-content">
                          <h5>选择常用的病历类型</h5>
                          <div class="abc-radio-group abc-radio-group">
                            <input class="abc-radio-original">
                            <label
                              class="abc-radio"
                            ><span
                               class="abc-radio-input"
                             ><span
                                class="abc-radio-inner is-checked"
                              />
                               <input
                                 type="radio"
                                 class="abc-radio-original"
                                 value="0"
                               ></span>
                              <span class="abc-radio-label">
                                西医格式
                                <!----></span></label>
                            <label
                              class="abc-radio"
                            ><span
                               class="abc-radio-input"
                             ><span class="abc-radio-inner" />
                               <input
                                 type="radio"
                                 class="abc-radio-original"
                                 value="1"
                               ></span>
                              <span class="abc-radio-label">
                                中医格式
                                <!----></span></label>
                            <label
                              class="abc-radio"
                            ><span
                               class="abc-radio-input"
                             ><span class="abc-radio-inner" />
                               <input
                                 type="radio"
                                 class="abc-radio-original"
                                 value="2"
                               ></span>
                              <span class="abc-radio-label">
                                口腔格式
                                <!----></span></label>
                          </div>
                        </div>
                        <div class="cut-line" />
                        <div class="setting-content">
                          <h5>选择需要的病历字段</h5>
                          <div>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="
                                abc-checkbox-wrapper
                                is-disabled is-checked
                              "
                            ><span
                               aria-checked="mixed"
                               class="
                                  abc-checkbox__input
                                  is-disabled is-checked
                                "
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                主诉
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper is-checked"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input is-checked"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                现病史
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper is-checked"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input is-checked"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                既往史
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                家族史
                              </span></label>
                          </div>
                          <div>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                月经婚育史
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                流行病史
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                体格检查
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper is-checked"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input is-checked"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                望闻切诊
                              </span></label>
                          </div>
                          <div>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                口腔检查
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                辅助检查
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="
                                abc-checkbox-wrapper
                                is-disabled is-checked
                              "
                            ><span
                               aria-checked="mixed"
                               class="
                                  abc-checkbox__input
                                  is-disabled is-checked
                                "
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                诊断
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper is-checked"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input is-checked"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                辨证
                              </span></label>
                          </div>
                          <div>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                治法
                              </span></label>
                            <label
                              role="checkbox"
                              aria-checked="true"
                              class="abc-checkbox-wrapper"
                            ><span
                               aria-checked="mixed"
                               class="abc-checkbox__input"
                             ><span
                                class="abc-checkbox__inner"
                              ><i class="iconfont cis-icon-positive_" />
                                <!----></span>
                               <input
                                 type="checkbox"
                                 aria-hidden="true"
                                 value="on"
                                 class="abc-checkbox__original"
                               ></span>
                              <span class="abc-checkbox__label">
                                方药
                              </span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="
                        outpatient-setting-reference
                        abc-popover__reference
                      "
                      aria-describedby="abc-popover-8924"
                      tabindex="-1"
                    >
                      <i
                        slot="icon"
                        class="icon iconfont cis-icon-three_dot_v"
                        style="margin-right: 0px; color: rgb(122, 135, 148)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="content-wrapper medical-record-wrapper"
                module="outpatient"
              >
                <!---->
                <div class="medical-record-item">
                  <label>主诉</label>
                  <div class="abc-form-item is-required">
                    <!---->
                    <div class="abc-form-item-content">
                      <!---->
                        <div class="chief-complaint-wrapper" @click="togglePopover">
                        <div
                          spellcheck="false"
                          contenteditable="true"
                          class="abc-input__inner abc-edit-div"
                        >{{contentA}}
                        </div>
                        <input
                          type="text"
                          tabindex="-1"
                          style="
                            opacity: 0;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            width: 0px;
                          "
                          v-model="contentA"
                        >
                        <!---->
                      </div>
                          <div class="medical-record-suggestions-wrapper" style="top: 40px; width:626px" v-show="popoverVisible"><div class="symptom-list"><ul><li><div v-on:click="contentA += '咳嗽,'">
                        咳嗽
                    </div><div v-on:click="contentA += '干咳,'">
                        干咳
                    </div><div v-on:click="contentA += '咳痰,'">
                        咳痰
                    </div><div v-on:click="contentA += '夜咳,'">
                        夜咳
                    </div><div v-on:click="contentA += '咽干,'">
                        咽干
                    </div><div v-on:click="contentA += '咽痒,'">
                        咽痒
                    </div><div v-on:click="contentA += '咽痛,'">
                        咽痛
                    </div><div v-on:click="contentA += '咽部异物感,'">
                        咽部异物感
                    </div><div v-on:click="contentA += '反复感冒,'">
                        反复感冒
                    </div></li> <li><div @click="addInput">
                        发热
                    </div><div @click="addInput">
                        喷嚏
                    </div><div @click="addInput">
                        流涕
                    </div><div @click="addInput">
                        鼻塞
                    </div><div @click="addInput">
                        头痛
                    </div><div @click="addInput">
                        头晕
                    </div><div @click="addInput">
                        耳鸣
                    </div><div @click="addInput">
                        多汗
                    </div><div @click="addInput">
                        少汗
                    </div><div @click="addInput">
                        盗汗
                    </div><div @click="addInput">
                        自汗
                    </div></li></ul> <div class="cut-line"></div> <ul><li><div @click="addInput">
                        胃胀
                    </div><div @click="addInput">
                        胃痛
                    </div><div @click="addInput">
                        腹胀
                    </div><div @click="addInput">
                        腹痛
                    </div><div @click="addInput">
                        腹泻
                    </div><div @click="addInput">
                        恶心
                    </div><div @click="addInput">
                        呕吐
                    </div><div @click="addInput">
                        冒酸
                    </div><div @click="addInput">
                        嗳气
                    </div><div @click="addInput">
                        纳差
                    </div><div @click="addInput">
                        吞咽困难
                    </div></li> <li><div @click="addInput">
                        便秘
                    </div><div>
                        便溏
                    </div><div>
                        便血
                    </div><div>
                        里急后重
                    </div><div>
                        排便不爽
                    </div><div>
                        夜尿多
                    </div><div>
                        尿频
                    </div><div>
                        尿急
                    </div><div>
                        尿痛
                    </div><div>
                        尿不尽
                    </div></li></ul> <div class="cut-line"></div> <ul><li><div>
                        胸闷
                    </div><div>
                        胸痛
                    </div><div>
                        心悸
                    </div><div>
                        气短
                    </div><div>
                        气喘
                    </div><div>
                        气促
                    </div><div>
                        呼吸困难
                    </div><div>
                        水肿
                    </div><div>
                        失眠
                    </div><div>
                        嗜睡
                    </div></li> <li><div>
                        肩痛
                    </div><div>
                        胁痛
                    </div><div>
                        背痛
                    </div><div>
                        腰痛
                    </div><div>
                        颈椎痛
                    </div><div>
                        关节痛
                    </div><div>
                        关节僵强
                    </div><div>
                        四肢无力
                    </div><div>
                        四肢麻木
                    </div></li></ul> <div class="cut-line"></div> <ul><li><div>
                        眼干
                    </div><div>
                        口干
                    </div><div>
                        口苦
                    </div><div>
                        牙痛
                    </div><div>
                        牙龈出血
                    </div><div>
                        口腔溃疡
                    </div><div>
                        皮疹
                    </div><div>
                        皮肤红斑
                    </div><div>
                        皮肤瘙痒
                    </div><div>
                        疖疔痈
                    </div></li> <li><div>
                        闭经
                    </div><div>
                        痛经
                    </div><div>
                        崩漏
                    </div><div>
                        月经不调
                    </div><div>
                        白带量多
                    </div><div>
                        白带黄
                    </div><div>
                        白带异味
                    </div><div>
                        乳房肿块
                    </div><div>
                        阳痿
                    </div><div>
                        早泄
                    </div></li></ul> <div class="cut-line"></div></div> <div class="extent-list"><ul><li><div>
                        偶尔
                    </div><div>
                        1天
                    </div><div>
                        2天
                    </div><div>
                        3天
                    </div><div>
                        4天
                    </div><div>
                        5天
                    </div><div>
                        1周
                    </div><div>
                        2周
                    </div><div>
                        3周
                    </div><div>
                        1个月
                    </div><div>
                        2个月
                    </div><div>
                        3个月
                    </div><div>
                        半年
                    </div><div>
                        1年
                    </div></li></ul></div> <div class="close-suggestions" @click="ctrlShow"><i class="iconfont cis-icon-delete_circle"></i>关 闭
        </div></div>
                    </div>
                  </div>
                </div>
                <!---->
                <div class="medical-record-item">
                  <label>既往史</label>
                  <div class="abc-form-item">
                    <!---->
                    <div class="abc-form-item-content">
                      <!---->
                      <!-- <div
                        spellcheck="false"
                        contenteditable="true"
                        class="abc-input__inner abc-edit-div"
                      /> -->
                      <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                    </div>
                  </div>
                </div>
                <div class="medical-record-item">
                  <label>现病史</label>
                  <div class="abc-form-item">
                    <!---->
                    <div class="abc-form-item-content">
                      <!---->
                      <div class="histories-wrapper">
                        <div
                          spellcheck="false"
                          contenteditable="true"
                          class="abc-input__inner abc-edit-div"
                        >
                        
                        </div>
                        <!---->
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
                <!---->
                <div class="medical-record-item">
                  <label>流行病史</label>
                  <div class="abc-form-item">
                    <!---->
                    <div class="abc-form-item-content">
                      <!---->
                      <div class="histories-wrapper">
                        <div
                          spellcheck="false"
                          contenteditable="true"
                          class="abc-input__inner abc-edit-div"
                        />
                        <!---->
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
                <div class="medical-record-item">
                  <label>望闻切诊</label>
                  <div class="abc-form-item">
                    <!---->
                    <div class="abc-form-item-content">
                      <!---->
                      <div class="physical-examination-wrapper">
                        <div
                          spellcheck="false"
                          contenteditable="true"
                          class="abc-input__inner abc-edit-div"
                        />
                        <input
                          type="text"
                          tabindex="-1"
                          style="
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            width: 0px;
                            opacity: 0;
                          "
                        >
                        <!---->
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
                <!---->
                <div class="medical-record-item">
                  <label>诊断</label>
                  <div class="abc-form-item tcm-syndrome is-required">
                    <!---->
                    <div class="abc-form-item-content">
                      <!---->
                      <div class="aide-diagnosis-wrapper">
                        <div
                          spellcheck="false"
                          contenteditable="true"
                          class="abc-input__inner abc-edit-div"
                        />
                        <input
                          type="text"
                          tabindex="-1"
                          style="
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            width: 0px;
                            opacity: 0;
                          "
                        >
                        <!---->
                      </div>
                    </div>
                  </div>
                  <label class="second-label">辨证</label>
                  <div class="abc-form-item tcm-syndrome">
                    <!---->
                    <div class="abc-form-item-content">
                      <!---->
                      <div class="aide-diagnosis-wrapper">
                        <div
                          spellcheck="false"
                          contenteditable="true"
                          class="abc-input__inner abc-edit-div"
                        />
                        <input
                          type="text"
                          tabindex="-1"
                          style="
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            width: 0px;
                            opacity: 0;
                          "
                        >
                        <!---->
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
              </div>
              <!---->
              <!---->
            </div>
            <div class="outpatient-form-item outpatient-diagnosis-treatment">
              <div class="title" style="padding-right: 7px">
                <h3>诊疗项目</h3>
                <div class="btn-group">
                  <div
                    class="diagnosis-treatment-recommend-popover-wrapper"
                    style="margin-left: auto"
                  >
                    <div
                      id="abc-popover-1877"
                      role="tooltip"
                      tabindex="0"
                      aria-hidden="true"
                      class="abc-popover abc-popper abc-popover-animation"
                      style="
                        position: absolute;
                        z-index: 1992;
                        outline: none;
                        display: none;
                      "
                    >
                      <div class="diagnosis-treatment-recommend-popover">
                        <div class="abc-input-wrapper abc-input-prepend">
                          <div class="prepend-input">
                            <div class="search-icon">
                              <i class="iconfont cis-icon-search" />
                            </div>
                          </div>
                          <input
                            type="text"
                            autocomplete="off"
                            spellcheck="false"
                            maxlength="30"
                            class="abc-input__inner"
                            style="width: 100%"
                          >
                          <!---->
                          <!---->
                          <!---->
                          <!---->
                        </div>
                        <div class="recommend-list"><ul /></div>
                        <div class="confirm-footer">
                          <div class="gray">已选择 0 项</div>
                          <button
                            class="
                              abc-button abc-button-primary abc-button-normal
                            "
                            style="height: 28px"
                          >
                            <!---->
                            确定
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="reference abc-popover__reference"
                      aria-describedby="abc-popover-1877"
                      tabindex="-1"
                    >
                      <!---->
                      <!---->
                      <!---->
                      <!---->
                      <div class="add-btn">诊疗套餐</div>
                      <div class="cut-line" />
                      <div class="add-btn">诊疗模板</div>
                      <div>
                        <div
                          id="abc-popover-7887"
                          role="tooltip"
                          tabindex="0"
                          aria-hidden="true"
                          class="abc-popover abc-popper"
                          style="
                            position: absolute;
                            z-index: 1992;
                            outline: none;
                            width: auto;
                            display: none;
                          "
                        >
                          <div class="outpatient-setting-popover">
                            <div class="setting-title">项目设置</div>
                            <div class="setting-content">
                              <h5>选择需要的项目类型</h5>
                              <div>
                                <label
                                  role="checkbox"
                                  aria-checked="true"
                                  class="abc-checkbox-wrapper is-checked"
                                ><span
                                   aria-checked="mixed"
                                   class="abc-checkbox__input is-checked"
                                 ><span
                                    class="abc-checkbox__inner"
                                  ><i
                                    class="iconfont cis-icon-positive_"
                                  />
                                    <!----></span>
                                   <input
                                     type="checkbox"
                                     aria-hidden="true"
                                     value="on"
                                     class="abc-checkbox__original"
                                   ></span>
                                  <span class="abc-checkbox__label">
                                    检查检验
                                  </span></label>
                                <label
                                  role="checkbox"
                                  aria-checked="true"
                                  class="abc-checkbox-wrapper is-checked"
                                ><span
                                   aria-checked="mixed"
                                   class="abc-checkbox__input is-checked"
                                 ><span
                                    class="abc-checkbox__inner"
                                  ><i
                                    class="iconfont cis-icon-positive_"
                                  />
                                    <!----></span>
                                   <input
                                     type="checkbox"
                                     aria-hidden="true"
                                     value="on"
                                     class="abc-checkbox__original"
                                   ></span>
                                  <span class="abc-checkbox__label">
                                    治疗理疗
                                  </span></label>
                                <label
                                  role="checkbox"
                                  aria-checked="true"
                                  class="abc-checkbox-wrapper is-checked"
                                ><span
                                   aria-checked="mixed"
                                   class="abc-checkbox__input is-checked"
                                 ><span
                                    class="abc-checkbox__inner"
                                  ><i
                                    class="iconfont cis-icon-positive_"
                                  />
                                    <!----></span>
                                   <input
                                     type="checkbox"
                                     aria-hidden="true"
                                     value="on"
                                     class="abc-checkbox__original"
                                   ></span>
                                  <span class="abc-checkbox__label">
                                    其他费用
                                  </span></label>
                                <label
                                  role="checkbox"
                                  aria-checked="true"
                                  class="abc-checkbox-wrapper is-checked"
                                ><span
                                   aria-checked="mixed"
                                   class="abc-checkbox__input is-checked"
                                 ><span
                                    class="abc-checkbox__inner"
                                  ><i
                                    class="iconfont cis-icon-positive_"
                                  />
                                    <!----></span>
                                   <input
                                     type="checkbox"
                                     aria-hidden="true"
                                     value="on"
                                     class="abc-checkbox__original"
                                   ></span>
                                  <span class="abc-checkbox__label">
                                    材料商品
                                  </span></label>
                              </div>
                              <div>
                                <label
                                  role="checkbox"
                                  aria-checked="true"
                                  class="abc-checkbox-wrapper is-checked"
                                ><span
                                   aria-checked="mixed"
                                   class="abc-checkbox__input is-checked"
                                 ><span
                                    class="abc-checkbox__inner"
                                  ><i
                                    class="iconfont cis-icon-positive_"
                                  />
                                    <!----></span>
                                   <input
                                     type="checkbox"
                                     aria-hidden="true"
                                     value="on"
                                     class="abc-checkbox__original"
                                   ></span>
                                  <span class="abc-checkbox__label">
                                    诊疗套餐
                                  </span></label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            outpatient-setting-reference
                            abc-popover__reference
                          "
                          aria-describedby="abc-popover-7887"
                          tabindex="-1"
                        >
                          <i
                            slot="icon"
                            class="icon iconfont cis-icon-three_dot_v"
                            style="margin-right: 0px; color: rgb(122, 135, 148)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="goods-item-list">
                <li id="c68f4f5f3c12443e9eb1303a343ddbfa" class="goods-item">
                  <div class="index">1</div>
                  <div class="goods-type">其他</div>
                  <div class="name">
                    <div class="name-describe">
                      <div data-tipsy="项目已被停用或删除" class="">
                        <span class="ellipsis"> 住院 </span>
                        <!---->
                      </div>
                      <!---->
                    </div>
                  </div>
                  <!---->
                  <!---->
                  <!---->
                  <div class="unit-count">
                    <div class="abc-form-item is-required">
                      <!---->
                      <div class="abc-form-item-content">
                        <!---->
                        <div class="abc-input-wrapper count-center">
                          <!---->
                          <input
                            type="text"
                            autocomplete="off"
                            spellcheck="false"
                            maxlength="500"
                            placeholder="总量"
                            class="abc-input__inner"
                            style="width: 47px"
                          >
                          <!---->
                          <!---->
                          <!---->
                          <!---->
                        </div>
                      </div>
                    </div>
                    <div class="abc-form-item">
                      <!---->
                      <div class="abc-form-item-content">
                        <!---->
                        <span title="次" class="unit">次</span>
                      </div>
                    </div>
                  </div>
                  <div class="total">¥ 300.00</div>
                  <div title="" class="item-remark">
                    <div style="display: inline-flex">
                      <div
                        id="abc-popover-5959"
                        role="tooltip"
                        tabindex="0"
                        aria-hidden="true"
                        class="abc-popover abc-popper"
                        style="
                          position: absolute;
                          z-index: 1992;
                          outline: none;
                          display: none;
                        "
                      />
                      <div
                        class="
                          abc-input-wrapper
                          no-border-input
                          abc-popover__reference
                        "
                        aria-describedby="abc-popover-5959"
                        tabindex="-1"
                      >
                        <!---->
                        <input
                          type="text"
                          autocomplete="off"
                          spellcheck="false"
                          maxlength="500"
                          placeholder="备注"
                          class="abc-input__inner"
                          style="width: 100%"
                        >
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                      </div>
                    </div>
                  </div>
                  <div class="delete-item">
                    <div class="delete-icon">
                      <i class="iconfont cis-icon-cross_small" />
                    </div>
                  </div>
                </li>
                <li class="search-autocomplete">
                  <div class="abc-form-item" style="flex: 1 1 0%">
                    <!---->
                    <div class="abc-form-item-content">
                      <!---->
                      <div
                        class="
                          goods-autocomplete-wrapper goods-autocomplete-wrapper
                        "
                      >
                        <div
                          class="abc-input-wrapper abc-autocomplete-wrapper"
                          show-price="true"
                        >
                          <div class="prepend-input">
                            <div class="search-icon">
                              <i class="iconfont cis-icon-plus" />
                            </div>
                          </div>
                          <input
                            autocomplete="off"
                            spellcheck="false"
                            type="text"
                            maxlength="30"
                            placeholder="输入项目名或拼音码"
                            class="abc-input__inner"
                          >
                          <div
                            class="suggestions-wrapper"
                            style="width: 765px; display: none"
                          >
                            <div class="abc-scrollbar-wrapper"><dl /></div>
                            <div />
                          </div>
                          <!---->
                          <div class="append-input">
                            <div class="clear-icon" style="display: none">
                              <i class="iconfont" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="total-price"> ¥ 300.00 </span>
                </li>
              </ul>
              <!---->
              <!---->
            </div>
            <div class="outpatient-form-item prescription-group no-data">
              <div class="title" style="padding-right: 7px">
                <h3>处方医嘱</h3>
                <div class="btn-group">
                  <div class="add-btn">中西成药处方</div>
                  <div class="add-btn">输注处方</div>
                  <div class="add-btn">中药处方</div>
                  <!---->
                  <div class="cut-line" />
                  <!---->
                  <div class="add-btn">处方模板</div>
                  <div>
                    <div
                      id="abc-popover-946"
                      role="tooltip"
                      tabindex="0"
                      aria-hidden="true"
                      class="abc-popover abc-popper"
                      style="
                        position: absolute;
                        z-index: 1992;
                        outline: none;
                        width: auto;
                        display: none;
                      "
                    >
                      <div class="outpatient-setting-popover">
                        <div class="setting-title">处方设置</div>
                        <div class="setting-content">
                          <h5>选择需要的处方类型</h5>
                          <label
                            role="checkbox"
                            aria-checked="true"
                            class="abc-checkbox-wrapper is-checked"
                          ><span
                             aria-checked="mixed"
                             class="abc-checkbox__input is-checked"
                           ><span
                              class="abc-checkbox__inner"
                            ><i class="iconfont cis-icon-positive_" />
                              <!----></span>
                             <input
                               type="checkbox"
                               aria-hidden="true"
                               value="on"
                               class="abc-checkbox__original"
                             ></span>
                            <span class="abc-checkbox__label">
                              中西成药处方
                            </span></label>
                          <label
                            role="checkbox"
                            aria-checked="true"
                            class="abc-checkbox-wrapper is-checked"
                          ><span
                             aria-checked="mixed"
                             class="abc-checkbox__input is-checked"
                           ><span
                              class="abc-checkbox__inner"
                            ><i class="iconfont cis-icon-positive_" />
                              <!----></span>
                             <input
                               type="checkbox"
                               aria-hidden="true"
                               value="on"
                               class="abc-checkbox__original"
                             ></span>
                            <span class="abc-checkbox__label">
                              输注处方
                            </span></label>
                          <label
                            role="checkbox"
                            aria-checked="true"
                            class="abc-checkbox-wrapper is-checked"
                          ><span
                             aria-checked="mixed"
                             class="abc-checkbox__input is-checked"
                           ><span
                              class="abc-checkbox__inner"
                            ><i class="iconfont cis-icon-positive_" />
                              <!----></span>
                             <input
                               type="checkbox"
                               aria-hidden="true"
                               value="on"
                               class="abc-checkbox__original"
                             ></span>
                            <span class="abc-checkbox__label">
                              中药处方
                            </span></label>
                          <label
                            role="checkbox"
                            aria-checked="true"
                            class="abc-checkbox-wrapper is-checked"
                          ><span
                             aria-checked="mixed"
                             class="abc-checkbox__input is-checked"
                           ><span
                              class="abc-checkbox__inner"
                            ><i class="iconfont cis-icon-positive_" />
                              <!----></span>
                             <input
                               type="checkbox"
                               aria-hidden="true"
                               value="on"
                               class="abc-checkbox__original"
                             ></span>
                            <span class="abc-checkbox__label">
                              外治处方
                            </span></label>
                        </div>
                        <div class="cut-line" />
                        <div class="setting-content">
                          <h5>选择需要[皮试]开关的处方类型</h5>
                          <label
                            role="checkbox"
                            aria-checked="true"
                            class="abc-checkbox-wrapper"
                          ><span
                             aria-checked="mixed"
                             class="abc-checkbox__input"
                           ><span
                              class="abc-checkbox__inner"
                            ><i class="iconfont cis-icon-positive_" />
                              <!----></span>
                             <input
                               type="checkbox"
                               aria-hidden="true"
                               value="on"
                               class="abc-checkbox__original"
                             ></span>
                            <span class="abc-checkbox__label">
                              中西成药处方
                            </span></label>
                          <label
                            role="checkbox"
                            aria-checked="true"
                            class="abc-checkbox-wrapper is-disabled is-checked"
                          ><span
                             aria-checked="mixed"
                             class="abc-checkbox__input is-disabled is-checked"
                           ><span
                              class="abc-checkbox__inner"
                            ><i class="iconfont cis-icon-positive_" />
                              <!----></span>
                             <input
                               type="checkbox"
                               aria-hidden="true"
                               value="on"
                               class="abc-checkbox__original"
                             ></span>
                            <span class="abc-checkbox__label">
                              输注处方
                            </span></label>
                        </div>
                      </div>
                    </div>
                    <div
                      class="
                        outpatient-setting-reference
                        abc-popover__reference
                      "
                      aria-describedby="abc-popover-946"
                      tabindex="-1"
                    >
                      <i
                        slot="icon"
                        class="icon iconfont cis-icon-three_dot_v"
                        style="margin-right: 0px; color: rgb(122, 135, 148)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!---->
              <!---->
            </div>
            <div class="content-wrapper prescription-wrapper">
              <div class="doctor-advice">
                <label>医嘱事项</label>
                <div class="abc-form-item">
                  <!---->
                  <div class="abc-form-item-content">
                    <!---->
                    <div class="doctor-advice-wrapper" diagnosis="">
                      <div
                        spellcheck="false"
                        contenteditable="true"
                        class="abc-input__inner abc-edit-div"
                      />
                      <input
                        type="text"
                        tabindex="-1"
                        style="
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 0px;
                          opacity: 0;
                        "
                      >
                      <!---->
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
            <div class="outpatient-bottom-info"><!----></div>
            <div style="width: 100%; height: 1px" />
          </div>
        </div>

        <!---->
        <!---->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '描述A',
        label: '描述A'
      }, {
        value: '描述B',
        label: '描述B'
      }, {
        value: '描述C',
        label: '描述C'
      }],
      value: [],
      popoverVisible: false,
      contentA: '',
      ele: ''
    }
  },
  methods: {
    togglePopover() {
      this.popoverVisible = !this.popoverVisible
    },
    ctrlShow() {
      this.popoverVisible = !this.popoverVisible
    },
    addInput(ele) {
      if (!this.ele) {
        this.contentA = this.contentA + this.ele + ','
      } else {
        this.contentA = this.contentA + '加一个,'
      }
    }
  }

}
</script>

<style lang="scss">
.line{
  text-align: center;
}
.el-select{
  .el-input__inner{
    padding: 5px 600px 5px 7px;
    font-size: $ucan-font-size-base;
    color: red;
    &::-webkit-input-placeholder {
      color: blue;
    }
  }
  .el-input__suffix{
    display: none;
    width: 16px;
    right: 8px;
    .el-input__suffix-inner{
      display: block;
      width: 100%;
      height: 100%;
    }
    .el-input__icon{
      font-size: 16px;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.outpatient-form-item .abc-input__inner, .el-input__inner {
    border: 1px solid transparent;
}

.outpatient-form-item .el-select .el-input.is-focus .el-input__inner {
    border-color: transparent;
}

.el-select__input {
  height: 32px;
}
.el-select-dropdown{
  .el-select-dropdown__list{
    padding: 4px 0;
  }
  .el-select-dropdown__item{
    height: 36px;
    line-height: 36px;
    padding: 0 8px;
    span{
      font-size:14px;
    }
    &.hover{
      background:#FAFAFA;
    }
    &.selected{
      span{
        color: $ucan-color-brand;
      }
    }
  }
  &.el-scrollbar--no{
    .el-scrollbar__bar{
      display: none;
    }
  }
}
.el-dropdown-menu{
  border: none;
  .el-dropdown-menu__item{
    font-size:14px;
    color:$ucan-color-gray1;
    &:hover{
      background:#FAFAFA;
    }
    &.selected{
      color: $ucan-color-brand;
    }
    &:not(.is-disabled):hover{
      color: $ucan-color-gray1;
    }
    &.is-disabled{
      color: #e0e0e0;
    }
  }
}

.el-popper[x-placement^="bottom"] {
  margin-top: 4px;
}

.el-popper[x-placement^="top"] {
  margin-bottom: 4px;
}

.el-popper[x-placement^="top"] .popper__arrow,
.el-popper[x-placement^="bottom"] .popper__arrow {
  display: none;
}

</style>

