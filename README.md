## 微信小程序商城项目介绍

该小程序功能正逐步完善中，且长期维护。

**项目所用组件：**

 - [接口 SDK](https://github.com/gooking/apifm-wxapi)
 -  [api工厂](https://admin.it120.cc/) 
 - [Vant](http://vant-contrib.gitee.io/vant-weapp/#/intro)

**已完成功能：**

 - 框架搭建
 - 登录

## 项目实现

**注册小程序账号**
https://mp.weixin.qq.com/

**api工厂使用**

**注册开通后台管理系统账号**
https://admin.it120.cc/

免费开通后，在左侧菜单 “工厂设置” --> “数据克隆” --> “将别人的数据克隆给我”

对方商户ID填写 951

点击 “立即克隆”，克隆成功后，F5 刷新一下后台

> ps:
> 
> api工厂提供微信小程序接口工具包，无需服务器，无需开发后台，开箱即用，轻松开发小程序，可免费使用。

**接口工具包apifm-wxapi功能介绍及使用方式：**
https://github.com/gooking/apifm-wxapi

**后台配置小程序**
配置小程序的appid 和 secret

左侧菜单微信设置-小程序设置，填写 appid 和 secret，这两个值在微信小程序后台获得。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201017185726800.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NDU1MTc=,size_16,color_FFFFFF,t_70#pic_center)


*注意：这两个值如果没有正确配置，在项目中使用的时候将无法连接到你的后台。*

**下载项目**
**下载微信开发者工具**
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

**在微信开发者工具中运行项目**

**导入项目**
将下载的项目导入
![在这里插入图片描述](https://img-blog.csdnimg.cn/202010171900082.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NDU1MTc=,size_16,color_FFFFFF,t_70#pic_center)

这里的AppID一定要修改为自己的。

**配置修改**
将项目根目录下的config.js文件中的subDomain值修改为自己的专属域名。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201017190218627.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NDU1MTc=,size_16,color_FFFFFF,t_70#pic_center)
**subDomain值获取方式**
https://admin.it120.cc/#/dashboard
去到后台-首页，复制自己的专属域名
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201017190415581.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NDU1MTc=,size_16,color_FFFFFF,t_70#pic_center)


运行效果

## api工厂后台配置教程

## 上线小程序
**上传代码到微信服务器**
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020101719080699.png#pic_center)
**提交审核**
到微信小程序商户后台-版本管理，在开发版本中找到你刚才提交的版本，点击提交审核。
**发布上线**
审核通过后，就可以将审核通过的版本提交上线，这样在微信中就可以搜索到该小程序了。
