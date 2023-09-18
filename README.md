# DLSweb  <small>2.0</small>

> 一个纯新的DLS主站点和文档界面，主打易于翻阅与使用。

## DLS管理工具简介

DLS是一个连接 `Minecraft` 服务器和QQ群的服务器工具。基于go-cqhttp完成对接，使用python编写的无图形服务端管理程序。面向服务端管理，不更改游戏内容。程序支持linux，跨平台兼容性良好。可支持多种我的世界基岩版服务器核心。

DLS支持大多数主流服务端(具体看下方列表)，主打长期稳定😏，理论上可支持任何命令行

DLS面向服务端管理，不更改游戏内容。支持主流开服平台如Windows和Ubuntu，适合能够熟练开服的用户使用，常用功能一应俱全

[Gitee开源](https://gitee.com/dlcn/dlscq)
[工具下载](https://gitee.com/dlcn/dlscq/releases)

### DLS实现的功能

* 崩服重启
* 自动备份与清理
* QQ群互通管理（需要go-cqhttp）
  * 通过正则灵活识别服务器控制台内容并处理后发到QQ群（以下是预设包含的内容）
    * 玩家在服务器内聊天转发至QQ群
    * 后台执行list指令后向群内发送在线人数详情
    * 后台执行的指令出现错误向群内发送错误信息
  * 通过正则灵活识别QQ群内群员的聊天并在控制台执行命令，可设置正则为仅指定QQ号可使用（预设包含的内容详见下文机器人群命令）
* 接入motd, 查云黑等api

### DLS兼容性检测报告

> 以下核心经过开发者和部分使用者测试后能用的部分核心，更多具体看实测结果

> 并不是所有的服务器核心都支持DLS，您可以向QQ交流群进行相关实用性的报告

* Bedrock Dedicated Server
  * LiteLoaderBDS
* Vanilla
* Bukkit
  * Spigot
  * Paper
    * folia
      * TenseiMC
    * LeavesMC
  * Purpur
* Sponge
* Nukkit
  * PowerNukkitX
* BungeeCord

## 关于DLS的站点

> DLSweb2.0是由[雪风先生（原冬蝶空）](https://github.com/Virgil692)开发的一个易于翻阅使用的新站点，基于Github开源的[docsify](https://github.com/docsifyjs/docsify)框架自主定制

### 先决条件

- 可以部署的系统(例如Windows、Ubuntu等)
- npm
- 编辑器

### 部署预览

> ❗临时使用浏览器浏览署需要创建一个新的文件夹并将克隆好的文件放入新文件夹中！

1. 确保下载的是最新的node.js附带的npm

2. 打开cmd，cd到项目文件夹中，使用下面的指令安装docsify框架

```
npm install -g docsify-cli
```

3. 安装完成后，使用下面指令启动并部署站点

```
docsify serve
```

cmd启动成功docsify服务显示(`D:\xf\lite-xl\dlsweb`是我的本地项目目录)

```
Serving D:\xf\lite-xl\dlsweb now.
Listening at http://localhost:3000
```

当显示上面的cmd提示时，可以使用`https://localhost:3000`在本地浏览器进行预览，若你想部署正式站点请全网搜索并按相关教程进行行动：`docsify部署`

## 开源协议

本站源码开源时使用了较为宽松的MIT协议开源

请遵守开源协议进行任何关于本项目的工作

有能力的话给我们的项目来个star吧，有问题请在github开源仓库拉取issous

本站使用的docsify框架也使用了与本站相同的MIT开源协议

```
MIT License

Copyright (c) 2023 StarTech org.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
