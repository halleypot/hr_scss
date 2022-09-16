import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

// 返回值=require.context(路径,是否读取子文件夹,匹配):读取某文件夹的文件
// requireContext.keys()拿到所有读取文件的路径，它是一个数组，
const req = require.context('./svg', false, /\.svg$/)
// 将拿到的文件路径进行相应的加载
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
