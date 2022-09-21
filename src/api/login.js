import request from "@/utils/request";

export function sysLogin(data) {
  return request({
    url: "/sys/login",
    method: "POST",
    data,
  });
}
