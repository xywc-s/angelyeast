<template>
  <div class="max-w-1200px mx-auto">
    <ElDescriptions border :column="1">
      <template #title>
        <span class="text-4.5">路由同步</span>
      </template>
      <template #extra>
        <ElButton :loading="pullLoading" type="primary" @click="getApps">
          <i v-show="!pullLoading" class="uno-ep-download -ml-4px mr-4px"></i>
          <span>拉取</span>
        </ElButton>
        <ElButton :loading="pushLoading" type="success" @click="syncRoutes">
          <i v-show="!pushLoading" class="uno-ep-upload -ml-4px mr-4px"></i>
          <span>推送</span>
        </ElButton>
      </template>
      <ElDescriptionsItem label="应用名" label-class-name="w-120px">
        {{ appRoutesConfig.name }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="应用路径" label-class-name="w-120px">
        {{ appRoutesConfig.path }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="应用菜单名称" label-class-name="w-120px">
        <ElInput v-model="appRoutesConfig.meta!.title"></ElInput>
      </ElDescriptionsItem>
      <ElDescriptionsItem label="根路由组件" label-class-name="w-120px">
        <template #label>
          <span>根路由组件</span>
          <ElTooltip
            raw-content
            content="可不填, 默认为中台Layout组件<br>可选值 Layout, Plain"
            placement="top"
          >
            <i class="uno-ep-question-filled"></i>
          </ElTooltip>
        </template>
        <ElInput v-model="appRoutesConfig.component"></ElInput>
      </ElDescriptionsItem>
      <ElDescriptionsItem label="应用类型" label-class-name="w-120px">
        <ElRadioGroup v-model="appRoutesConfig.meta!.type">
          <ElRadio label="inner">中台内部应用</ElRadio>
          <ElRadio label="outer">中台外部应用</ElRadio>
        </ElRadioGroup>
      </ElDescriptionsItem>
      <ElDescriptionsItem label="启用状态" label-class-name="w-120px">
        <ElSwitch v-model="appRoutesConfig.meta!.status"></ElSwitch>
      </ElDescriptionsItem>
      <ElDescriptionsItem label="路由配置" label-class-name="w-120px" class-name="!pa-0">
        <template #label>
          <span>路由配置</span>
          <ElTooltip
            raw-content
            content="所有路由配置项均可直接在视图文件内配置<br>如果和子应用本身冲突,则可手动在本页面调整"
            placement="top"
          >
            <i class="uno-ep-question-filled"></i>
          </ElTooltip>
        </template>
        <ElTable :data="selectableRoutes" border>
          <ElTableColumn label="路由(name/meta.title)">
            <template #default="{ row }">
              <div>{{ row.name }}</div>
              <div>{{ row.meta?.title }}</div>
            </template>
          </ElTableColumn>
          <ElTableColumn width="120px">
            <template #header>
              <ElCheckbox
                :model-value="allUsefulChecked"
                :indeterminate="isAllUsefulIndeterminate"
                @change="handleUsefulCheckAllChange"
              >
                <span>可用</span>
                <ElTooltip content="是否将路由同步到中台" placement="top">
                  <i class="uno-ep-question-filled"></i>
                </ElTooltip>
              </ElCheckbox>
            </template>
            <template #default="{ row }">
              <ElCheckbox v-model="row.checked" @change="handleUsefulChange"></ElCheckbox>
            </template>
          </ElTableColumn>
          <ElTableColumn>
            <template #header>
              <span>可见</span>
              <ElTooltip content="在中台菜单中是否显示该路由" placement="top">
                <i class="uno-ep-question-filled"></i>
              </ElTooltip>
            </template>
            <template #default="{ row }">
              <ElCheckbox v-model="row.meta.visible" :disabled="!row.checked">PC</ElCheckbox>
              <ElCheckbox v-model="row.meta.mobile" :disabled="!row.checked">移动端</ElCheckbox>
            </template>
          </ElTableColumn>
          <ElTableColumn>
            <template #header>
              <span>权限</span>
              <ElTooltip content="路由权限, 用英文逗号分隔" placement="top">
                <i class="uno-ep-question-filled"></i>
              </ElTooltip>
            </template>
            <template #default="{ row }">
              <ElInput v-model="row.meta.permission"></ElInput>
            </template>
          </ElTableColumn>
          <ElTableColumn>
            <template #header>
              <span>图标</span>
              <ElTooltip
                raw-content
                content="可配置svg图标和fonticon图标<br>svg: 图标需要放在中台的svg文件夹下<br>fonticon: 图标需要中台配置有对应的fonticon图标集"
                placement="top"
              >
                <i class="uno-ep-question-filled"></i>
              </ElTooltip>
            </template>
            <template #default="{ row }">
              <div class="flex flex-col gap-2">
                <ElInput v-model="row.meta.svg">
                  <template #prepend>SVG</template>
                </ElInput>
                <ElInput v-model="row.meta.icon">
                  <template #prepend>Icon</template>
                </ElInput>
              </div>
            </template>
          </ElTableColumn>
        </ElTable>
      </ElDescriptionsItem>
    </ElDescriptions>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import { cloneDeep, has, set } from 'lodash-es'
import {
  ElDescriptions,
  ElDescriptionsItem,
  ElInput,
  ElRadio,
  ElRadioGroup,
  ElTable,
  ElTableColumn,
  ElCheckbox,
  ElTooltip
} from 'element-plus'
import { useService } from '@angelyeast/service'
import type { RouteRecordName } from 'vue-router'
import type { CustomRoute, RouteSyncProps } from '~/route-sync'

defineOptions({
  name: 'AgRouteSync'
})
const BFF = useService('BFF')
const props = withDefaults(defineProps<RouteSyncProps>(), {
  exclude: () => ['login', 'index', 'all', 'route-sync', 'denied']
})

const pullLoading = ref(false)
const pushLoading = ref(false)
const apps = reactive<Record<string, CustomRoute>>({})
const appRoutesConfig = reactive<CustomRoute>({
  name: props.name,
  path: props.path,
  component: null,
  meta: {
    title: '',
    type: 'inner',
    status: true
  },
  children: []
})
const selectableRoutes = ref<CustomRoute[]>(
  props.routes
    .filter((route) => !props.exclude.includes(route.name as RouteRecordName))
    .map((route) => {
      set(route, 'checked', false)
      return route
    })
)
const selectedRoutes = computed(() => selectableRoutes.value.filter((route) => route.checked))

// 是否可用(同步到中台服务)
const allUsefulChecked = ref(false)
const isAllUsefulIndeterminate = computed(() => {
  const checkedNumber = selectableRoutes.value.filter((route) => route.checked).length
  return checkedNumber > 0 && checkedNumber < selectableRoutes.value.length
})
const handleUsefulCheckAllChange = (val) => {
  allUsefulChecked.value = val as boolean
  for (const route of selectableRoutes.value) {
    route.checked = val
  }
}
const handleUsefulChange = (val) => {
  val && !isAllUsefulIndeterminate.value && (allUsefulChecked.value = true)
  !val && !isAllUsefulIndeterminate.value && (allUsefulChecked.value = false)
}

const syncRoutes = () => {
  pushLoading.value = true
  const params = cloneDeep(appRoutesConfig)
  const cloneRoutes = cloneDeep(selectedRoutes.value)
  if (!params.component) delete params.component
  params.children = cloneRoutes.map((route) => {
    route.path = route.path.replace('/', '')
    delete route.component
    delete route.checked
    if (!route.meta?.visible) {
      route.hidden = true
      delete route.meta!.visible
    }
    if (!route.meta?.mobile) delete route.meta!.mobile
    if (!route.meta?.svg) delete route.meta!.svg
    if (!route.meta?.icon) delete route.meta!.icon
    if (!route.meta?.permission) {
      delete route.meta!.permission
    } else {
      route.meta.permission = (route.meta.permission as string).split(',')
    }
    return route
  })
  apps[params.name as string] = params
  console.log({ apps })
  BFF.updateAppsRoutes(apps)
    .then((res) => {
      console.log({ res })
    })
    .finally(() => (pushLoading.value = false))
}

const getApps = () => {
  pullLoading.value = true
  BFF.getAppsRoutes()
    .then((res) => {
      Object.keys(res.data).forEach((key) => (apps[key] = res.data[key]))
      if (has(apps, appRoutesConfig.name as string)) {
        setConfig(apps[appRoutesConfig.name as string])
      }
    })
    .finally(() => (pullLoading.value = false))
}

function setConfig(config: CustomRoute) {
  appRoutesConfig.name = config.name
  appRoutesConfig.path = config.path
  appRoutesConfig.meta = config.meta
  appRoutesConfig.component = config.component
  selectableRoutes.value.forEach((route) => {
    const child = config.children?.find((child: CustomRoute) => route.name === child.name)
    route.checked = !!child
    route.meta!.visible = child ? !child.hidden : !route.meta!.hidden
    child?.meta?.mobile && (route.meta!.mobile = child.meta.mobile)
    !!child?.meta?.svg && (route.meta!.svg = child.meta.svg)
    !!child?.meta?.icon && (route.meta!.icon = child.meta.icon)
    if (child?.meta?.permission) {
      if (typeof child.meta.permission !== 'string') {
        route.meta!.permission = child.meta.permission.join(',')
      } else {
        route.meta!.permission = child.meta.permission
      }
    } else {
      if (route.meta?.permission && typeof route.meta.permission !== 'string') {
        route.meta.permission = route.meta.permission.join(',')
      }
    }
  })
  nextTick(() => {
    if (selectableRoutes.value.every((route) => route.checked === true))
      allUsefulChecked.value = true
  })
}

onMounted(() => getApps())
</script>
