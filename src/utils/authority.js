/**
 * @Author: weiran92@xdf.cn
 * @LastEditors: weiran92@xdf.cn
 * @description: 权限
 * @param {Array} values 权限字段
 * @param {Boolean} status true|false 包含其中之一|全部包含
 * @return {Boolean} true|false
 * @info type 1|2|3|4|5|6 - TYPE_1|TYPE_2|TYPE_3|TYPE_4|TYPE_5|TYPE_6 - 授课老师|研发大师|管理|运营大师|运营人员|助教
 * @info edu 2|3|4 EDU_2|EDU_3|EDU_4 小学|初中|高中
 * @info subject math|physics|... SUBJECT_MATH|SUBJECT_PHYSICS|... 数学|物理|...
 */
// 处理type
const dealType = () => {
  const type = isEmptyToParse('roleType')
  if (type === undefined) {
    return undefined
  } else {
    return `TYPE_${Number(type)}`
  }
}

// 处理edu
const dealEdu = () => {
  const edu = isEmptyToParse('edu')

  if (edu === undefined) {
    return undefined
  } else {
    return `EDU_${Number(edu)}`
  }
}

// 处理subject
const dealSubject = () => {
  const subject = isEmptyToParse('subject')

  if (subject === undefined) {
    return undefined
  } else {
    return `SUBJECT_${subject.toUpperCase()}`
  }
}

// 获取storage值
const isEmptyToParse = (value) => {
  const storage = localStorage.getItem(value)
  return storage || undefined
}

// 处理包含全部
const dealIncludeAll = (values, roles) => {
  const cache = []
  for (let i = 0; i < values.length; i++) {
    if (roles.includes(values[i])) {
      cache.push(values[i])
    } else {
      void null
    }
  }
  return cache.join() === values.join()
}

// 处理包含其中之一
const dealIncludeOther = (values, roles) => {
  let boolean = false
  for (const value of values) {
    if (roles.includes(value)) {
      boolean = true
      break
    } else {
      boolean = false
    }
  }
  return boolean
}

// 核心权限方法
const authority = (values = ['TYPE_1'], status = false) => {
  const TYPE = dealType()
  const EDU = dealEdu()
  const SUBJECT = dealSubject()
  const roles = [TYPE, EDU, SUBJECT]

  if (status) {
    // 全部包含
    return dealIncludeAll(values, roles)
  } else {
    // 包含其中之一
    return dealIncludeOther(values, roles)
  }
}

export default authority
