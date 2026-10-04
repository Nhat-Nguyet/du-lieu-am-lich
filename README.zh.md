<h1 align="center">越南历法与文化查考数据</h1>

<p align="center">
  27 个机器可读数据集，涵盖越南阴阳历、干支、节气、易经与节庆，<br>
  共 166,724 行，由 Nhật Nguyệt 同一计算内核生成，采用 CC BY 4.0 许可。
</p>

<p align="center">
  <a href="https://doi.org/10.5281/zenodo.23009396"><img alt="DOI 10.5281/zenodo.23009396" src="https://zenodo.org/badge/DOI/10.5281/zenodo.23009396.svg"></a>
  <a href="https://creativecommons.org/licenses/by/4.0/"><img alt="CC BY 4.0" src="https://img.shields.io/badge/%E8%AE%B8%E5%8F%AF-CC%20BY%204.0-lightgrey"></a>
  <a href="https://huggingface.co/nhatnguyet"><img alt="Hugging Face" src="https://img.shields.io/badge/%F0%9F%A4%97-Hugging%20Face-yellow"></a>
  <a href="https://github.com/Nhat-Nguyet/du-lieu-am-lich/releases/latest"><img alt="发布" src="https://img.shields.io/github/v/release/Nhat-Nguyet/du-lieu-am-lich?label=%E5%8F%91%E5%B8%83"></a>
  <img alt="27 数据集" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E9%9B%86-27-8b1a1a">
  <img alt="166,724 行" src="https://img.shields.io/badge/%E8%A1%8C-166%2C724-8b1a1a">
</p>

<p align="center">
  <a href="README.md">Tiếng Việt</a> ·
  <a href="README.en.md">English</a> ·
  <b>中文</b>
</p>

---

## 这个仓库解决什么问题

开发历法应用、做文化研究或处理越南语文本的人，迟早需要一张可靠的干支表、一份阴阳历或一份节庆清单。
网上这类表格并不少，但大多是手工抄录，没有许可，不说明依据哪种约定，而且恰恰在最难的地方彼此不一致。

本仓库收录 **27 个数据集，共 166,724 行**，内容为越南历法、干支、节气、易经与节庆，以机器可读形式提供
（CSV、JSON，另附 `.meta.json` 说明文件）。全部由驱动 [nhatnguyet.org](https://nhatnguyet.org) 各项工具的同一计算内核生成，
文件里的数字与网站上的数字完全一致。

它与普通查询表的两点不同：

- **计算所得的事实与传统约定分开。** 每个数据集都注明数据来源类型：录自典籍 10 个、按规则推导 9 个、计算 4 个、编辑整理 4 个。
  每一行都有 `nguon` 列，说明该值是计算所得、录自哪部典籍，还是编辑整理。
- **明确指出各流派的分歧。** `ghi_chu` 列记录每一行的异说；
  [`docs/bat-dong.md`](docs/bat-dong.md) 记录每个数据集的取舍及理由；数据集 `diem-bat-dong-giua-cac-phai` 把这些分歧点整理成数据。

## 发布版本与 DOI

| 项目 | 内容 |
|---|---|
| 生成本 README 时的数据发布编号（并非网站构建编号） | `2026.10.04-549ccd18` (`loai_ma: phat-hanh-du-lieu`) |
| 标签 | [`release-2026.10.04-549ccd18`](https://github.com/Nhat-Nguyet/du-lieu-am-lich/releases/tag/release-2026.10.04-549ccd18) |
| 概念 DOI（始终指向最新版本） | [10.5281/zenodo.23009396](https://doi.org/10.5281/zenodo.23009396) |
| 各版本 DOI | `2026.09.30-7cfaa47f`: [10.5281/zenodo.23065391](https://doi.org/10.5281/zenodo.23065391); `2026.09.28-ce2df2b1`: [10.5281/zenodo.23009397](https://doi.org/10.5281/zenodo.23009397); `2026.09.28-84cdd3ae`: [10.5281/zenodo.23010696](https://doi.org/10.5281/zenodo.23010696) |
| 计算内核版本 | `2.0.0` |
| 清单格式版本 | `1.3.0` |
| 构建所用源码提交、Go 版本、go.sum 哈希（dung_tu 区块） | `c31139ccf06e6d4e2bd441f5e3f1d38a487e2eb2`, go1.24.13, go.sum `230431e4ecff` |

仓库根目录的 [`manifest.json`](manifest.json) 列出本次发布的每个文件及其 sha256 与大小，以及每个数据集的版本、
行数和列数。发布代码由内容推算：数据相同则代码相同，无论哪天发布。当前版本以 `manifest.json` 为准；上表记录的是
生成本 README 时的版本。

本仓库自 nhatnguyet.org **单向同步**：每次发布都打上 `release-<代码>` 标签并创建 GitHub Release，由 Zenodo 存档并分配版本 DOI。

## 数据集一览

共 27 个数据集，每个在 [`data/`](data) 中有三个文件：`.csv`、`.json` 和 `.meta.json`（逐列说明、所选约定、
使用限制；无需下载数据即可阅读）。较大的数据集另有 `.parquet` 版本。

| 数据集 | Slug | 行数 | 版本 | 最近变更 | 数据来源类型 | 角色 | Hugging Face |
|---|---|--:|---|---|---|---|---|
| 十天干 | [`10-thien-can`](data/10-thien-can.csv) | 10 | 1.1.1 | `documentation` | 录自典籍 | 知识 | [10-thien-can](https://huggingface.co/datasets/nhatnguyet/10-thien-can) |
| 十二生肖合冲关系 | [`12-con-giap-hop-khac`](data/12-con-giap-hop-khac.csv) | 144 | 1.1.1 | `documentation` | 录自典籍 | 知识 | [12-con-giap-hop-khac](https://huggingface.co/datasets/nhatnguyet/12-con-giap-hop-khac) |
| 十二地支 | [`12-dia-chi`](data/12-dia-chi.csv) | 12 | 1.1.1 | `documentation` | 录自典籍 | 知识 | [12-dia-chi](https://huggingface.co/datasets/nhatnguyet/12-dia-chi) |
| 建除十二值 | [`12-truc`](data/12-truc.csv) | 12 | 1.2.0 | `data` | 录自典籍 | 知识 | [12-truc](https://huggingface.co/datasets/nhatnguyet/12-truc) |
| 塔罗大阿尔克那 22 张 | [`22-an-chinh-tarot`](data/22-an-chinh-tarot.csv) | 22 | 1.1.1 | `documentation` | 录自典籍 | 知识 | [22-an-chinh-tarot](https://huggingface.co/datasets/nhatnguyet/22-an-chinh-tarot) |
| 二十四节气 | [`24-tiet-khi`](data/24-tiet-khi.csv) | 384 | 1.1.1 | `documentation` | 计算 | 知识 | [24-tiet-khi](https://huggingface.co/datasets/nhatnguyet/24-tiet-khi) |
| 塔罗小阿尔克那 56 张 | [`56-an-phu-tarot`](data/56-an-phu-tarot.csv) | 56 | 1.1.1 | `documentation` | 录自典籍 | 知识 | [56-an-phu-tarot](https://huggingface.co/datasets/nhatnguyet/56-an-phu-tarot) |
| 六十甲子表 | [`60-hoa-giap`](data/60-hoa-giap.csv) | 60 | 1.1.1 | `documentation` | 按规则推导 | 知识 | [60-hoa-giap](https://huggingface.co/datasets/nhatnguyet/60-hoa-giap) |
| 易经六十四卦 | [`64-que-kinh-dich`](data/64-que-kinh-dich.csv) | 64 | 1.1.1 | `documentation` | 录自典籍 | 知识 | [64-que-kinh-dich](https://huggingface.co/datasets/nhatnguyet/64-que-kinh-dich) |
| 九曜值年星 | [`9-sao-chieu-menh`](data/9-sao-chieu-menh.csv) | 9 | 1.2.0 | `data` | 按规则推导 | 知识 | [9-sao-chieu-menh](https://huggingface.co/datasets/nhatnguyet/9-sao-chieu-menh) |
| 十二星座逐年分界日期，1950 至 2050 | [`bien-cung-hoang-dao-1950-2050`](data/bien-cung-hoang-dao-1950-2050.csv) | 1,212 | 1.1.5 | `documentation` | 计算 | 知识 | [bien-cung-hoang-dao-1950-2050](https://huggingface.co/datasets/nhatnguyet/bien-cung-hoang-dao-1950-2050) |
| 越南民间信仰与历法检索评测题集 | [`cau-hoi-danh-gia-tim-kiem`](data/cau-hoi-danh-gia-tim-kiem.csv) | 1,194 | 1.2.0 | `provenance` | 编辑整理 | **评测，非知识内容** | [cau-hoi-danh-gia-tim-kiem](https://huggingface.co/datasets/nhatnguyet/cau-hoi-danh-gia-tim-kiem) |
| 字母转数字对照表：毕达哥拉斯与迦勒底 | [`chu-sang-so-than-so-hoc`](data/chu-sang-so-than-so-hoc.csv) | 33 | 1.1.1 | `documentation` | 录自典籍 | 知识 | [chu-sang-so-than-so-hoc](https://huggingface.co/datasets/nhatnguyet/chu-sang-so-than-so-hoc) |
| 八宅命卦与方位 | [`cung-phi-bat-trach`](data/cung-phi-bat-trach.csv) | 400 | 1.2.1 | `documentation` | 按规则推导 | 知识 | [cung-phi-bat-trach](https://huggingface.co/datasets/nhatnguyet/cung-phi-bat-trach) |
| 各流派分歧之处 | [`diem-bat-dong-giua-cac-phai`](data/diem-bat-dong-giua-cac-phai.csv) | 27 | 1.3.1 | `documentation` | 编辑整理 | 知识 | [diem-bat-dong-giua-cac-phai](https://huggingface.co/datasets/nhatnguyet/diem-bat-dong-giua-cac-phai) |
| 六十日干支的黄道吉时表 | [`gio-hoang-dao-60-ngay`](data/gio-hoang-dao-60-ngay.csv) | 720 | 1.1.1 | `provenance` | 按规则推导 | 知识 | [gio-hoang-dao-60-ngay](https://huggingface.co/datasets/nhatnguyet/gio-hoang-dao-60-ngay) |
| 六十甲子两两交叉：纳音、合冲与五行关系 | [`hoa-giap-ghep-cheo`](data/hoa-giap-ghep-cheo.csv) | 3,600 | 1.1.1 | `documentation` | 按规则推导 | 知识 | [hoa-giap-ghep-cheo](https://huggingface.co/datasets/nhatnguyet/hoa-giap-ghep-cheo) |
| 越南节庆对照公历日期，2026 至 2030 | [`le-hoi-quy-doi-ngay-duong`](data/le-hoi-quy-doi-ngay-duong.csv) | 790 | 1.2.1 | `documentation` | 按规则推导 | 知识 | [le-hoi-quy-doi-ngay-duong](https://huggingface.co/datasets/nhatnguyet/le-hoi-quy-doi-ngay-duong) |
| 越南 54 个民族的节庆与信仰 | [`le-hoi-tin-nguong-theo-dan-toc`](data/le-hoi-tin-nguong-theo-dan-toc.csv) | 187 | 1.1.1 | `documentation` | 编辑整理 | 知识 | [le-hoi-tin-nguong-theo-dan-toc](https://huggingface.co/datasets/nhatnguyet/le-hoi-tin-nguong-theo-dan-toc) |
| 越南节庆、岁时节日与法定假日 | [`le-hoi-viet-nam`](data/le-hoi-viet-nam.csv) | 197 | 1.3.1 | `documentation` | 编辑整理 | 知识 | [le-hoi-viet-nam](https://huggingface.co/datasets/nhatnguyet/le-hoi-viet-nam) |
| 越南阴阳历 1900 至 2100 | [`lich-am-duong-1900-2100`](data/lich-am-duong-1900-2100.csv) | 73,414 | 1.2.2 | `documentation` | 计算 | 知识 | [lich-am-duong-1900-2100](https://huggingface.co/datasets/nhatnguyet/lich-am-duong-1900-2100) |
| 二十四节气交节时刻，1900 至 2100 | [`moc-tiet-khi-1900-2100`](data/moc-tiet-khi-1900-2100.csv) | 4,824 | 1.2.4 | `documentation` | 计算 | 知识 | [moc-tiet-khi-1900-2100](https://huggingface.co/datasets/nhatnguyet/moc-tiet-khi-1900-2100) |
| 民间忌日对照公历，2026 至 2035 | [`ngay-ky-dan-gian-2026-2035`](data/ngay-ky-dan-gian-2026-2035.csv) | 3,652 | 1.1.1 | `documentation` | 按规则推导 | 知识 | [ngay-ky-dan-gian-2026-2035](https://huggingface.co/datasets/nhatnguyet/ngay-ky-dan-gian-2026-2035) |
| 卦气值日卦，1900 至 2100 | [`que-ngay-quai-khi-1900-2100`](data/que-ngay-quai-khi-1900-2100.csv) | 73,414 | 1.2.1 | `documentation` | 按规则推导 | 知识 | [que-ngay-quai-khi-1900-2100](https://huggingface.co/datasets/nhatnguyet/que-ngay-quai-khi-1900-2100) |
| 按出生年与所问年份查三灾、金楼、荒屋 | [`tam-tai-kim-lau-hoang-oc`](data/tam-tai-kim-lau-hoang-oc.csv) | 2,201 | 1.2.0 | `data` | 按规则推导 | 知识 | [tam-tai-kim-lau-hoang-oc](https://huggingface.co/datasets/nhatnguyet/tam-tai-kim-lau-hoang-oc) |
| 卦气六十卦次序 | [`thu-tu-60-que-quai-khi`](data/thu-tu-60-que-quai-khi.csv) | 60 | 1.3.1 | `schema` | 录自典籍 | 知识 | [thu-tu-60-que-quai-khi](https://huggingface.co/datasets/nhatnguyet/thu-tu-60-que-quai-khi) |
| 鲁班尺 | [`thuoc-lo-ban`](data/thuoc-lo-ban.csv) | 26 | 1.1.1 | `documentation` | 录自典籍 | 知识 | [thuoc-lo-ban](https://huggingface.co/datasets/nhatnguyet/thuoc-lo-ban) |

“最近变更”是当前版本的变更类型（`data`、`schema`、`model`、`source`、`provenance`、`documentation`），
完整说明见 `.meta.json` 的 `thay_doi_gan_nhat` 与 [`CHANGELOG.md`](CHANGELOG.md)。角色为评测的数据集（`vai_tro: danh-gia`、
`khong_phai_tri_thuc: true`）是衡量本站搜索框的问题，请勿当作知识来源。

## 快速上手

[`examples/`](examples) 中的两个示例可直接运行，无需安装任何库：

```bash
# Python：在六十甲子数据集中查某一年的干支与纳音
cd examples/python && python3 doc-du-lieu.py

# JavaScript：用符合 RFC 4180 的 CSV 读取器读取十二地支
cd examples/javascript && node doc-du-lieu.js
```

只需单个文件时可直接读取：

```
https://raw.githubusercontent.com/Nhat-Nguyet/du-lieu-am-lich/main/data/<slug>.csv
```

## 约定与局限

- [`docs/quy-uoc.md`](docs/quy-uoc.md)：CSV 格式、三个必备列、来源列、三类版本号、确定性。
- [`docs/bat-dong.md`](docs/bat-dong.md)：各流派的分歧及每个数据集的取舍。这是最值得一读的文件。
- [`docs/mo-hinh.md`](docs/mo-hinh.md)：各计算模型的档案（历表、时区、取整、对照来源）。
- [`docs/nguon-thu-tich.md`](docs/nguon-thu-tich.md)：每个数据集所据典籍，以及哪些数据集不依据任何典籍。
- [`docs/oracle.md`](docs/oracle.md)：`data/oracle.csv`，数据与工具之间的公开对照测试集。
- `data/nguon-thu-tich.csv`：来源登记册，每个来源一个 `source_id`（著作、作者、版本、卷、网址、访问日期、对照文件哈希）；各数据集元数据以 `source_ids` 指向。
- `data/quy-tac.json`：规则登记册，每条规则一个 `rule_id`（推算规则或约定、版本、内容哈希）；各数据集元数据以 `rule_ids` 指向。
- `data/changelog.json`：所有数据集的所有版本（可测时记新增、删除、修改的行数）及每次发布的影响报告。

`docs/` 中的文件以越南语撰写，附英文摘要。

这是关于文化与历法约定的数据，而非科学论断：

> 本数据集记录的是文化与历法约定，而非科学论断。它适用于文化研究、自然语言处理和历法应用，不用于预测事件、评价他人，或作出影响任何人的决定。

## 引用

再利用本数据时，请注明来源：

```
来源：Nhật Nguyệt (nhatnguyet.org)，CC BY 4.0
```

DOI：[10.5281/zenodo.23009396](https://doi.org/10.5281/zenodo.23009396)，Zenodo 上的概念 DOI，始终指向最新版本。如需引用某一确切版本，请使用该页面列出的版本 DOI。
机器可读的引用信息见 [`CITATION.cff`](CITATION.cff)。

## 许可

数据以[知识共享署名 4.0 国际许可协议](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)（CC BY 4.0）发布：
可用于包括商业用途在内的任何目的，可以修改，只需注明来源。全文见 [`LICENSE`](LICENSE)。

## 链接

- 网站上的开放数据目录：https://nhatnguyet.org/zh/du-lieu
- Hugging Face：https://huggingface.co/nhatnguyet
- Wikidata：https://www.wikidata.org/wiki/Q141586876
- 供语言模型阅读的说明：https://nhatnguyet.org/llms-full/du-lieu.txt
- 报告错误：[`CONTRIBUTING.md`](CONTRIBUTING.md)
