import { useDefineApi } from "@/stores/useDefineApi";
import type { InstanceDetail, NodeStatus, Settings, UserInfo, UserInstance } from "@/types";
import type { BaseUserInfo } from "@/types/user";
import type { IPanelOverviewResponse } from "../../../../common/global";

// 此处 API 接口可以用中文写注释，后期再统一翻译成英语。

// 用户登录
export const loginUser = useDefineApi<
  | {
      // Post
      data: {
        username: string;
        password: string;
      };
    }
  | undefined,
  // Response
  {
    id: number;
  }
>({
  url: "/api/auth/login",
  method: "POST"
});

// 用户登出
export const logoutUser = useDefineApi<any, any>({
  url: "/api/auth/logout",
  method: "GET"
});

// 获取当前登录的用户信息
export const userInfoApi = useDefineApi<any, BaseUserInfo>({
  url: "/api/auth/"
});

export const userInfoApiAdvanced = useDefineApi<
  {
    params: {
      uuid: string;
      advanced: boolean;
    };
  },
  BaseUserInfo
>({
  url: "/api/auth/"
});

// 获取远程服务列表
export const remoteNodeList = useDefineApi<any, NodeStatus[]>({
  url: "/api/service/remote_services_list"
});

// 获取远程实例列表
export const remoteInstances = useDefineApi<
  {
    params: {
      remote_uuid: string;
      page: number;
      page_size: number;
      instance_name?: string;
    };
  },
  {
    maxPage: 1;
    page: 1;
    pageSize: 10;
    data: InstanceDetail[];
  }
>({
  url: "/api/service/remote_service_instances"
});

// 获取设置信息
export const settingInfo = useDefineApi<any, Settings>({
  url: "/api/overview/setting"
});

// 提交设置信息
export const setSettingInfo = useDefineApi<
  | {
      data: Settings;
    }
  | undefined,
  string
>({
  url: "/api/overview/setting",
  method: "PUT"
});

// 用户管理
// 用户管理 获取信息
export const getUserInfo = useDefineApi<
  {
    params: {
      userName: string;
      page: number;
      page_size: number;
    };
  },
  { total: number; pageSize: number; page: number; maxPage: number; data: UserInfo[] }
>({
  url: "/api/auth/search",
  method: "GET"
});

// 用户管理 删除用户
export const deleteUser = useDefineApi<
  {
    data: string[];
  },
  any
>({
  url: "/api/auth",
  method: "DELETE"
});

// 用户管理 新增用户
export const addUser = useDefineApi<
  {
    data: {
      username: string;
      password: string;
      permission: number;
    };
  },
  boolean
>({
  url: "/api/auth",
  method: "POST"
});

// 用户管理 用户配置
export const updateUserInstance = useDefineApi<
  {
    data: {
      config: {
        instances: UserInstance[];
      };
      uuid: string;
    };
  },
  boolean
>({
  url: "/api/auth",
  method: "PUT"
});

// 获取总览

// 获取设置信息
export const overviewInfo = useDefineApi<any, IPanelOverviewResponse>({
  url: "/api/overview"
});

// 节点管理
// 修改秘钥
export const editNode = useDefineApi<
  {
    params: {
      uuid: string;
    };
    data: {
      apiKey?: string;
      ip?: string;
      port?: number;
      remarks?: string;
    };
  },
  any
>({
  url: "/api/service/remote_service",
  method: "PUT"
});

// 新建节点
export const addNode = useDefineApi<
  {
    data: {
      ip: string;
      port: number;
      remarks: string;
      apiKey: string;
    };
  },
  any
>({
  url: "/api/service/remote_service",
  method: "POST"
});

// 删除节点
export const deleteNode = useDefineApi<
  {
    params: {
      uuid: string;
    };
  },
  any
>({
  url: "/api/service/remote_service",
  method: "DELETE"
});

// 尝试主动连接节点
export const connectNode = useDefineApi<
  {
    params: {
      uuid: string;
    };
  },
  any
>({
  url: "/api/service/link_remote_service",
  method: "GET"
});