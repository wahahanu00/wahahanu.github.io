
new Vue({
  el: '#hhh',

  data: {
    //探索----------------------------------------------------------------------------------------
    items1: [
      { title: "光之子", href: "https://pan.baidu.com/s/1dr_6gT-xiUNCbDx1BWQRqg", key: "qnp3", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569605279071&di=fd8423ba0c824c2efc8e82c3924d83c5&imgtype=0&src=http%3A%2F%2Fimg1.tgbusdata.cn%2Fthumbnail%2Fjpg%2FNWI0Yyw2MDAsNjAwLDQsMSwxLC0xLDEsMSxyazUw%2Fu%2Fpc.tgbus.com%2Fuploads%2Fallimg%2F140505%2F307-140505103G3-51.jpg" },
      { title: "秋叶原之旅2", href: "https://pan.baidu.com/s/19eCEzVwd-4fqm8QrJ_NMsA", key: "fyzw", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569605409278&di=2a1144fd4d92707b800333a24f254a14&imgtype=0&src=http%3A%2F%2Fp0.so.qhmsg.com%2Ft01c3b371f003ffa2cf.jpg" },
      { title: "魔能2", href: "https://pan.baidu.com/s/1O9VgUw2Pchbc8b8351zAGw", key: "0lc9", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569605462549&di=6670d2c131d2e1b90c6990d122e03b1d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F3dc21bfa690baf227b23e75abc36a025550e3eed.jpg" },
      { title: "魔法门10", href: "https://pan.baidu.com/s/1OaNzTWToewIdznKSJUMFhA", key: "9o3u", photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3787220053,3493641153&fm=26&gp=0.jpg" },
      { title: "勿忘我", href: "https://pan.baidu.com/s/1bAFH5rDhvTE6zHcgV1Rk7g", key: "mtm9", photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3590037722,3355955257&fm=26&gp=0.jpg" },
      { title: "伊苏7", href: "https://pan.baidu.com/s/1ZsSgzpic8hakPCkk_lxBLw", key: "yjku", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570200475&di=90c1acb8ecc73301e7d296904de3a162&imgtype=jpg&er=1&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fda97aaac009eae382a2a3bed8ff43e6ac83158f1.jpg" },
      { title: "消逝的光芒", href: "http://pan.baidu.com/s/1mhRVYbQ", key: "5ros", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569605829048&di=d393e2fb1a09ea97865350c3a0ac84be&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180612%2F7eac2d535090447bae59e9d68f1edbd8.jpeg" },
      { title: "爱丽丝：疯狂回归", href: "https://pan.baidu.com/s/1a54jjd8drzTn6LZlmKHEWQ", key: "nke0", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569631104441&di=c562e0692e37b3de8c1341c459d3c78b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F29%2F20141129213602_NfEHa.jpeg" },
      { title: "漫漫长夜", href: "https://pan.baidu.com/s/1WNsFmj6CEgcB0hfijssYvw", key: "5lm8", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569605889155&di=d7ebaf3a7bdc51dc106cfc8070c94a16&imgtype=jpg&src=http%3A%2F%2Fwww.ooqiu.com%2Fuploads%2Fallimg%2F170816%2F1502876508620134.jpg" },
      { title: "毛线小精灵", href: "https://pan.baidu.com/s/1gWciCZ6m5av7ExA3uPcGUA", key: "vzqc", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569605913218&di=553b7f2b44108dab889dbdf161ac0fd9&imgtype=0&src=http%3A%2F%2Fwww.hkcgart.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20180820%2F1534772132113943.jpg" },
      { title: "妖精剑士f", href: "https://pan.baidu.com/s/1qWlY2cMWi25firVAhyDnJQ", key: "2f2x", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569605938008&di=d382930310cceede9600a5aefee13c11&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc2cec3fdfc0392459c93a8608094a4c27d1e25be.jpg" },
      { title: "战极姬7", href: "https://pan.baidu.com/s/18Fd1Lf-avr894CBe1QlLJg", key: "byzx", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=896965051,4026287303&fm=26&gp=0.jpg" },
      { title: "刺客信条1-8", href: "https://pan.baidu.com/s/1YyOeKwLQVkcQRpcSOqoAuQ", key: "w1ry", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630698512&di=7e49c760f6b0406c641a32c33e754ed7&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2015-3%2F2015310112931986080.jpg" },
      { title: "太吾绘卷", href: "https://pan.baidu.com/s/1WO9Y7Xp99FdtImbwkk4t3Q", key: "94ou", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1855146564,2163926938&fm=26&gp=0.jpg" },
      { title: "刀剑神域：虚空断章", href: "https://pan.baidu.com/s/1JsVqir4FfRSNwZWzFDc27A", key: "uh5m", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569607157249&di=8a89cf97d56c65dba8dbf1424604afbb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F11%2F20180311154953_8nxw2.png" },
      { title: "咒语力量3：灵魂收割", href: "https://pan.baidu.com/s/1-tYm117D8ZxX-_-GpfyshA", key: "15fk", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569607353484&di=be6ac378d4f2779b079470c79e1c7dbb&imgtype=jpg&src=http%3A%2F%2Fimg3.3454.com%2Fimgs%2F201708%2F1503111770577039.jpg" },
      { title: "诸神之战", href: "https://pan.baidu.com/s/182OB11neFd8WvLbxlRDZeQ", key: "m8xk", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569607395332&di=c3f955bb6c30e17af359988a20804047&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120306%2FImg336872111.jpg" },
      { title: "掠食", href: "https://pan.baidu.com/s/1HNiE_k4AqqEcuMPjIzu53A", key: "r82g", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2145054077,2997292485&fm=26&gp=0.jpg" },
      { title: "心灵杀手", href: "https://pan.baidu.com/s/1Dx3YgJ3OUUNXHIaP8XJ-Rw", key: "20sz", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569607504161&di=1de16c03f0341b34e816df960f70bc59&imgtype=0&src=http%3A%2F%2Fxbox360.tgbus.com%2FUploadFiles%2F201001%2F20100111120539220.jpg" },
      { title: "Inside", href: "https://pan.baidu.com/s/1Ei9JsR8nv0oHgzxCFa3ong", key: "4bqu", photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3423251627,4265426321&fm=26&gp=0.jpg" },
      { title: "权力的神器", href: "https://pan.baidu.com/s/119mHBf17NpBnLM9nQMS2qA", key: "wtn3", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=15233209,3015245049&fm=26&gp=0.jpg" },
      { title: "海底两万里", href: "https://pan.baidu.com/s/1Q3Hr6Jy_wDyQtW5NiOF60w", key: "wkkd", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569608049841&di=e3af518e679aefd41d72bdd29acfa315&imgtype=0&src=http%3A%2F%2Fb1-q.mafengwo.net%2Fs9%2FM00%2F55%2FC4%2FwKgBs1gZpgKAcgPlAAKaPfDEMgg78.jpeg" },
      { title: "极度恐慌系列", href: "https://pan.baidu.com/s/1nx9dpMt0RhROkJuZRwgs_w", key: "wf46 不支持Win10", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569608179877&di=352263d403841a543757c2819ed1a089&imgtype=0&src=http%3A%2F%2Fimg1.gamersky.com%2Fimage2015%2F01%2F20150121ydx_99%2Fgamersky_13small_26_20151211516E34.jpg" },
      { title: "地铁2033", href: "https://pan.baidu.com/s/1Ya0fEcSQT8uhJwwjBeoYCg", key: "jlxy", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569608217454&di=dc167f190adc412ac992c79f2ecae84d&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131224%2F20131224162646-2027340252.jpg" },



    ],
    //射击-------------------------------------------------------------------------------------------
    items2: [

      { title: "使命召唤1-14", href: "https://pan.baidu.com/s/1a-0QYKcdqjaDVACYPe6wpQ#list/path=%2F", key: "8c62", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569612766663&di=4f839d7ec4832d442c82f91fd8b4f210&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2F170427%2F7229806_091811_5859.jpg" },
      { title: "毁灭战士4", href: "https://pan.baidu.com/s/15Ok0R7YrkyIK8k6zsM5mKg", key: "37vx", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2431644165,2465746139&fm=26&gp=0.jpg" },
      { title: "细胞分裂6", href: "https://pan.baidu.com/s/1cOCOsGHIu2FDlBthj7Tgog", key: "o8lo", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569612861388&di=0b5c4bd3f50e74b594dc4395a8f7ed86&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4a566236572d769a9886e956c0a6f771be6f9eac29dff-lst6Jg_fw658" },
      { title: "收获日2", href: "https://pan.baidu.com/s/1gH_qb4y3l9nE60jZ2e0WcQ", key: "o7vq", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569612920835&di=32c67eb9f01ad7be1d315b96771d631b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F70712233e28b3a98110bca6acc715e90e1c83555.png" },
      { title: "绝对征服", href: "https://pan.baidu.com/s/1fwCEK0514eKLupeLqTebmQ", key: "3tgl", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569612968100&di=542bd792b3e10a009d9ead7232cb7d19&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2017%2F05%2F11%2F584_2017051132814156.jpg" },
      { title: "马克思佩恩3", href: "https://pan.baidu.com/s/19ZIY8uJ-hngv2P5-YJ5hTg", key: "9p8l", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3132806527,3078294631&fm=26&gp=0.jpg" },
      { title: "地铁最后的曙光", href: "https://pan.baidu.com/s/1Aw7RPjScPZTHdHggvBk-QQ", key: "c1vw", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569613065500&di=821126319405315119b3f13adc1f5b3a&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2013-3%2F201332694959108200.jpg" },
      { title: "地狱潜者", href: "https://pan.baidu.com/s/1vganmbYahV51maozTLrSPw", key: "511f", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570207871&di=93330d0df40c315a144e8c3af5afba3f&imgtype=jpg&er=1&src=http%3A%2F%2Fqny.smzdm.com%2F201804%2F16%2F5ad474b4e29ae8854.png" },
      { title: "生化奇兵系列", href: "https://pan.baidu.com/s/1LQom3V2KP5FBqbTAK7rd0g", key: "c3ro", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2534213437,2067262219&fm=26&gp=0.jpg" },
      { title: "孤岛危机系列", href: "https://pan.baidu.com/s/19abggAOJ_rI8dDDoqpal-g", key: "vbrd", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569613393997&di=caf12bd70319d9c12b27717056c5c8ac&imgtype=0&src=http%3A%2F%2Fi3.sinaimg.cn%2Fgm%2Fj%2Fi%2F2009-03-27%2FU1850P115T41D162735F756DT20090327131608.jpg" },
      { title: "质量效应系列", href: "https://pan.baidu.com/s/1LXCIvEiRRZQU-7m5OfeUjw", key: "d5qf 游戏安装密码：632584", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569613469914&di=09087c82b099ab3d87857bcb48a0b646&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F53d0605b798b7.jpg" },
      { title: "狙击手系列", href: "https://pan.baidu.com/s/1WdKEU-78Z_Ta5rvaOP68Jg", key: "kzw6", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570208289&di=de618bd2bd6234f40e54783b2d493900&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F512d81f2cd9fe.jpg" },
      { title: "正当防卫3", href: "https://pan.baidu.com/s/117V3-CHbgi2kbSr8AU834Q", key: "dncb", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569613619368&di=8f44500b5cb884df743b29e369e9ce9c&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2F130417%2F1283314_150659_2950.jpg" },
      { title: "正当防卫4", href: "https://pan.baidu.com/s/1xIVE6mPoSTIsLgeFNH7ddg", key: "rmkw", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569613659754&di=d1ac3a24148bad377f22f92a71a7f47d&imgtype=0&src=http%3A%2F%2Fimage.gimmgimm.com%2Fd%2F10014%2Fb7cb24ce788c960d3c4e13b8b35ada23.jpg" },
      { title: "心灵杀手", href: "https://pan.baidu.com/s/1Dx3YgJ3OUUNXHIaP8XJ-Rw ", key: "20sz", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569607504161&di=1de16c03f0341b34e816df960f70bc59&imgtype=0&src=http%3A%2F%2Fxbox360.tgbus.com%2FUploadFiles%2F201001%2F20100111120539220.jpg" },
      
      { title: "无主之地系列", href: "http://pan.baidu.com/s/1bpGrwOf", key: "m6qv", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=963156457,3380413951&fm=26&gp=0.jpg" },
      { title: "死亡空间", href: "https://pan.baidu.com/s/1jJDh2Eq", key: "w0n5", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=839778298,4261306882&fm=26&gp=0.jpg" },
      { title: "狙击精英3", href: "https://pan.baidu.com/s/1U4QZwO_AvAQ5fLaSFUab-w", key: "wtu1", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569613839608&di=8faaa9b3fce055b826eabc0613825e75&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Fdd2828888a6f220cedc320adab13e546d8ef94c4.jpg" },
      { title: "影子武士", href: "https://pan.baidu.com/s/1qgjzxUuHiWu6TrnYgEzJ-A", key: "qz5w", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569613952620&di=8551b3cc7abb7fc40e3b9e13c4880144&imgtype=0&src=http%3A%2F%2Fi2.img.969g.com%2Fnews%2Fimgx2016%2F09%2F01%2F493_172647_9bbc4.jpg" },
      { title: "失落的星球", href: "https://pan.baidu.com/s/1P6oq-l7s1tLa9idfhtuKmw", key: "ln79", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569614004734&di=46eb65bbe0b90c7a2c29ad7b67a13f60&imgtype=0&src=http%3A%2F%2Fps3.tgbus.com%2FUploadFiles%2F201004%2F20100421151223330.jpg" },
     
      
      { title: "变形金刚：暗焰崛起", href: "https://pan.baidu.com/s/1Byj1QnJlhaFFqFTrYKOIVg", key: "t9kr", photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1479515678,2288310435&fm=26&gp=0.jpg" },
      { title: "变形金刚：赛博坦陨落", href: "https://pan.baidu.com/s/1GDWKuTUC5EUGTsJDjloDUQ", key: "1vp9", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569629701338&di=738fdc91544ec732c85be7e15acebc3c&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fpicfile%2FNews%2F2012pic%2F04%2F20%2Fflc20120420101511_1.jpg" },
      { title: "仇恨", href: "https://pan.baidu.com/s/109cjxMpUXBbcAvcYWF46Rg", key: "qe2k", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569629739785&di=aade1e7302e02efc2cc0eb5fa5b2d925&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2015%2F02%2F13%2F20150213111409950.jpeg" },



    ],
    //动作-------------------------------------------------------------------------------------------
    items3: [
      { title: "讨鬼传系列", href: "https://pan.baidu.com/s/1wHqZQdv2o_C85RldFkJvLg", key: "erfv", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569629958293&di=907d8fe99a7fa621af79109cc0d7a4e3&imgtype=0&src=http%3A%2F%2Fok.166.net%2F16163%2F2018-12-20%2Fmm18%2F1545284709779_gyxfds.jpg" },
      { title: "鬼泣系列", href: "https://pan.baidu.com/s/1VbcO_bUoMykskkAF_I_wQQ ", key: "3kue", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569629992675&di=9370268f79dfbbee734dfae038d962ba&imgtype=0&src=http%3A%2F%2Fi0.sinaimg.cn%2Fgm%2Fj%2Fi%2F2009-03-04%2FU1850P115T41D161616F757DT20090304111124.jpg" },
      { title: "波斯王子系列", href: "https://pan.baidu.com/s/1RpajY2OFeEU_AU35oqhkHQ", key: "i5yr", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630019214&di=35111a891ec85770e8ad6448313b97e9&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fgm%2Ft%2Fi%2F2008-10-31%2FU2405P115T41D154028F757DT20081031185721.jpg" },
      { title: "暗黑血统系列", href: "https://pan.baidu.com/s/1dbkNapAH72UlkHvMwZn6YA", key: "6a8q", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630202970&di=ef5bd43aedb5b1024af58a88c20bd91b&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2F111216%2F801441_134034_4687.jpg" },
      { title: "迪士尼无限", href: "https://pan.baidu.com/s/1EE8TT_FYNF7BRIAu0MjBnw", key: "zimi", photo: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2973742515,1523652620&fm=26&gp=0.jpg" },
      { title: "堕落之王", href: "https://pan.baidu.com/s/1I9C9SAEibsZW7G0fO1sLHA", key: "szvr", photo: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1660135674,3048386323&fm=15&gp=0.jpg" },
      
      { title: "忍者神龟：曼哈顿突变", href: "https://pan.baidu.com/s/1i7z7BM5lgqYAboLvcfVp3Q", key: "0ci7", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630300692&di=44697339a4d3844dcbee2fdc56eeb2b3&imgtype=0&src=http%3A%2F%2Fimg.99danji.com%2Fuploadfile%2F2016%2F0127%2F20160127061245728.jpg" },
      { title: "塞伯利亚之谜系列", href: "https://pan.baidu.com/s/1kxr-eBlzBpl_MhxAXgwVjw", key: "pwwz", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630336916&di=89cf8ba405d7d767ba9eb05b01963c3c&imgtype=0&src=http%3A%2F%2Fpc.07073.com%2Fuploads%2F20170504%2F2a776698f4218f5ce63f1e34f15fdbf8.jpg" },
     
      { title: "教父2", href: "https://pan.baidu.com/s/1bWOgFKC3r20Wu4bmamf94Q", key: "9bl4", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630571035&di=813df572dea0eb54c2515f9d540b1eb7&imgtype=0&src=http%3A%2F%2Fimg03.sogoucdn.com%2Fapp%2Fa%2F100520071%2Fdbe85e838a234d385c4beadb9ef16c0c.jpg" },
      { title: "红色派系末日审判", href: "https://pan.baidu.com/s/1ze-DHFfDo7SBc8sE7lBoCA", key: "s7ho", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630589667&di=1a2cfe231b0c1b13b546ed146cdfbe10&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fpicfile%2FNews%2F2011%2F03%2F27%2F20110327102619915.jpg" },
      { title: "热血无赖：终极版", href: "http://pan.baidu.com/s/1hs2AHwC", key: "ce0k", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630625935&di=4f792c6c09eeb43d6575759ddba9f6d8&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F4e04aa7f005696b5e09ceba10fe881d5d9ba3ea0.jpg" },
      { title: "波斯王子系列", href: "http://pan.baidu.com/s/1eRM6jAy", key: "hw6d", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570225368&di=85286b4c46d3c0d3b9b97ab5a69ecbfa&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.v3wall.com%2Fwallpaper%2F1280_800%2F0911%2F1280_800_20091103114300373894.jpg" },
      { title: "重返德军总部系列", href: "http://pan.baidu.com/s/1slTvYyD", key: "yyhe", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570225389&di=9e0696ec77a517b69abaf5d1032b755a&imgtype=jpg&er=1&src=http%3A%2F%2Fps3.tgbus.com%2FUploadFiles%2F201305%2F20130529103601240.jpg" },
      { title: "刺客信条1-8", href: "https://pan.baidu.com/s/1YyOeKwLQVkcQRpcSOqoAuQ", key: "w1ry", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630698512&di=7e49c760f6b0406c641a32c33e754ed7&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2015-3%2F2015310112931986080.jpg" },
      { title: "死侍", href: "https://pan.baidu.com/s/1L5_RBLYPnpRamglzJsiC1w", key: "sw3d", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630765049&di=3c3302472250ada67300f413d5fdfab8&imgtype=0&src=http%3A%2F%2Fi1.img.969g.com%2Fnews%2Fimgx2013%2F05%2F09%2F218_163000_18e56.jpg" },
      { title: "苍翼默示录", href: "https://pan.baidu.com/s/1gpxoFD2OTGU2cqj3mbkNsg", key: "hf9z", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569629564276&di=dc0ac053a67a322fe718ceeb3fe8f6ec&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fglpic%2Fupload%2F20141211%2F8734509E.jpg" },
      { title: "苍翼默示录：神观之梦", href: "https://pan.baidu.com/s/1gpxoFD2OTGU2cqj3mbkNsg", key: "hf9z", photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=240191239,3433524155&fm=26&gp=0.jpg" },
      { title: "火影系列", href: "http://pan.baidu.com/s/1nvKGDs9", key: "kskq", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630835520&di=4d7c6b2340c9b9ece3aac61493d66a39&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fb7aaf764a122a54bfb9cdb46f3cf0ae506964123.jpg" },
      { title: "龙珠系列", href: "http://pan.baidu.com/s/1c4ickm", key: "js43", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630887410&di=883fc7c0301a98b00151cf9c413dcda3&imgtype=0&src=http%3A%2F%2Fimg01.3dmgame.com%2Fuploads%2Fallimg%2F130705%2F153_130705090504_4.jpg" },
      { title: "海贼系列", href: "http://pan.baidu.com/s/1miBprUo", key: "qksq", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569630905589&di=b0184290e0ec452ffb31eb948ee527fa&imgtype=0&src=http%3A%2F%2Fimg.haote.com%2Fupload%2Fnews%2Fimage%2F20180120%2F20180120160327_35228.jpg" },
      { title: "FIFA18", href: "http://pan.baidu.com/s/1kVoqJen", key: "7qtd", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569631299167&di=bf58ea77ea30779611ab19de5ab0ac63&imgtype=0&src=http%3A%2F%2Fimgup01.myra2.com%2F2017-09%2F19%2F14%2F1505803681132_0.jpg" },
      { title: "实况足球2018", href: "http://pan.baidu.com/s/1slukiBz", key: "el19", photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3599102508,374227283&fm=26&gp=0.jpg" },

      { title: "爱丽丝：疯狂回归", href: "https://pan.baidu.com/s/1a54jjd8drzTn6LZlmKHEWQ", key: "nke0", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569631104441&di=c562e0692e37b3de8c1341c459d3c78b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F29%2F20141129213602_NfEHa.jpeg" },
      { title: "恶魔城：暗影之王", href: "https://pan.baidu.com/s/1HJF62OfDEKVyG6fkUIWKqw", key: "fvi6", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569631199152&di=160aeed04c8a320468ccce3746b47888&imgtype=0&src=http%3A%2F%2Fpic.paopaoche.net%2Fup%2F2013-10%2F2013101018181022216561.jpg" },
      { title: "辐射：新维加斯", href: "https://pan.baidu.com/s/1HMcE3v01-76m-jnYOz-FQQ", key: "f3hu", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569631232263&di=736961b43ad06f8d2b70f1ab53097bdd&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2F0%2F20%2F2036%2F203670_1200x1000_191.jpg" },
      { title: "腐烂国度", href: "https://pan.baidu.com/s/1PNeKV4nBXXW7sxm_bD3zYA", key: "hix8", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1354780742,3602751958&fm=26&gp=0.jpg" },
      { title: "实况足球系列", href: "https://pan.baidu.com/s/1dTn6dE7VLyL8rn5vZemBTw", key: "lxei", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569631275791&di=34df87be9eb7840896697020f79919fe&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2F130426%2F1283314_143037_1050.jpg" },
     


    ],
    //扮演-------------------------------------------------------------------------------------------
    items4: [
      { title: "掠食", href: "https://pan.baidu.com/s/1HNiE_k4AqqEcuMPjIzu53A", key: "r82g", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569631528678&di=c2d8177a4b48ef63c88d5a54f124b901&imgtype=0&src=http%3A%2F%2Fwww.fahao.cn%2Fuploadfiles%2F201705%2F15%2F20170515031359891.jpg" },
      { title: "看门狗1", href: "https://pan.baidu.com/s/1_bKRLUrkv_Vsx80O0ziG2Q", key: "dvfq", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570226281&di=7daacb9b98204e114e39ca195feac59d&imgtype=jpg&er=1&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F83025aafa40f4bfb6afff3b30a4f78f0f736182d.jpg" },
      { title: "巫师系列", href: "https://pan.baidu.com/s/17WCT2_ik2DYw0AubPnZ_OA", key: "llo8", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570226328&di=fd6dccc8eeb2ea975771937f1d3b358f&imgtype=jpg&er=1&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2F151120%2F6711866_104334_6048.jpg" },
      { title: "轩辕剑系列", href: "https://pan.baidu.com/s/1-FVPgKIHmDYzCre3vXGXvQ", key: "5nys", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1411646053,752078047&fm=26&gp=0.jpg" },
      { title: "蜘蛛侠系列", href: "https://pan.baidu.com/s/1alLKxyzsxJt2qtiNwl15UA", key: "nbtt", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570226403&di=053035a77f8256ff73ebadd6c2b2e539&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F9749cd9bdc02062af3a5e1390a7d14a05345e5d9.jpg" },
      { title: "龙之信条：黑暗", href: "https://pan.baidu.com/s/1KkGtpYXW7x6chX7e2kN-VQ", key: "lisv", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1225007336,269743224&fm=26&gp=0.jpg" },
      { title: "暴君", href: "https://pan.baidu.com/s/11TLgvKpcdInbhPW5K4Vldg", key: "wrcb", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569661343421&di=9e40abcc198186e204fe1495d3f6b7c6&imgtype=jpg&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161229%2Fef2e3ba8874c402c81ebf38bfa5ceec0_th.jpg" },
      { title: "狂战传说", href: "https://pan.baidu.com/s/1_3wFNMx0YEDFmvqSNN8BbQ", key: "8bpp", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570256117&di=8d7b1a7e49a9aae8ae7316957d74d3e9&imgtype=jpg&er=1&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2015%2F12%2F30%2F927_2015123032713489.jpg" },
      { title: "索菲的工作室", href: "https://pan.baidu.com/s/1WDK4OacRC5XLzjtx48NogQ", key: "gw40", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569661423466&di=a76bf880ab25890b6037c953366c72ca&imgtype=0&src=http%3A%2F%2Fatt.gamefy.cn%2Ffiles%2F201511%2F144661580990105.jpg" },
      { title: "维克多弗兰", href: "https://pan.baidu.com/s/1S7QakLUavVIz70kVwhQwTw", key: "kf2d", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569661522076&di=f92736acca2669901a94b32dfd360eb0&imgtype=jpg&src=http%3A%2F%2Fpic.fxxz.com%2Fup%2F2015-7%2F2015720111824875970.jpg" },
      { title: "废土2", href: "https://pan.baidu.com/s/1sX2yqudhAFuHiPZ3OPJChg", key: "wr1e", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569661543600&di=f7d022b617235ec3440d5e07871bfe1a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fbaike%2Fc0%253Dbaike60%252C5%252C5%252C60%252C20%2Fsign%3D63465c77b4fd5266b3263446ca71fc4e%2F6a63f6246b600c3365c98e54184c510fd8f9a1fe.jpg" },
      { title: "神界：龙之指挥官", href: "https://pan.baidu.com/s/1SKQdju1mfL6clreZAlVkgg ", key: "0180", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1180195324,2984065720&fm=15&gp=0.jpg" },
      { title: "无双蛇魔Z", href: "https://pan.baidu.com/s/1BbbYP3re6trUeYdhj6C-Yg", key: "00sk", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569661635291&di=b3d489c3c63647074544956e49ae7e17&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131225%2F20131225162707-1560124684.jpg" },
      
      { title: "新冰城传奇", href: "https://pan.baidu.com/s/1rxoIpyKmh-5T0jAvvKW2Eg", key: "01w9", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569661998627&di=6fa8d4fc5620e609f6a7be51596405f8&imgtype=0&src=http%3A%2F%2Fwww.962.net%2Fup%2F2015-6%2F14335537843410230.jpg" },
     
     
     
      { title: "刀剑神域：虚空断章", href: "https://pan.baidu.com/s/1AuuFz_8ZV-gu2w165_ki9g", key: "h1kt", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662021371&di=3cbcc35b8430df52df90bbdb50d622fb&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fba5d723a897c7389dfa6cd813e89bfabc7576d0a.jpg" },
      { title: "地牢围攻3", href: "https://pan.baidu.com/s/1UrBR9lMSjnQnK8Akr-LLYg", key: "xh2b", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662066182&di=f47ae5054af055869d7dc36eb65b30f8&imgtype=0&src=http%3A%2F%2Fpic.k73.com%2Fup%2Fsoft%2F2015%2F0907%2F102455_51595257.jpg" },
      { title: "双星物语", href: "https://pan.baidu.com/s/1b1IeqNpJwTtHnzBkP4sNqw", key: "6akh", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662089946&di=9d47a329ff85a2432dbd76f7283b0efb&imgtype=0&src=http%3A%2F%2Fimg.u77.com%2Fg%2F2014%2F07%2F8681659d75df8092.jpg" },
      { title: "暗黑破坏神2", href: "https://pan.baidu.com/s/1UEWGr2t3s_YCIygXjjEkiQ", key: "n0kc", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3542476585,3883607227&fm=26&gp=0.jpg" },
      { title: "范海辛的奇妙冒险1", href: "https://pan.baidu.com/s/1SWVMOWTTke3-rIiw3z85fg", key: "cj0y", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662315947&di=1df9f3b050fa7713d551d9f492fa2fda&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2014%2F03%2F11%2F584_20140311131954057.jpg" },
      { title: "范海辛的奇妙冒险2", href: "https://pan.baidu.com/s/1ckMauhZYq4Va9tErvDpq5Q", key: "g4dn", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662315947&di=1df9f3b050fa7713d551d9f492fa2fda&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2014%2F03%2F11%2F584_20140311131954057.jpg" },
      { title: "范海辛的奇妙冒险3", href: "https://pan.baidu.com/s/1v8zK6za3gRoOS7QPeXXknA", key: "7iq4", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662315947&di=1df9f3b050fa7713d551d9f492fa2fda&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2014%2F03%2F11%2F584_20140311131954057.jpg" },


 
    ],
    //策略-------------------------------------------------------------------------------------------
    items5: [
      { title: "文明6和文明5", href: "https://pan.baidu.com/s/16CuzWh_ozr4T5fdWEgCMzQ", key: "4b3n", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662414051&di=3711bd82adfdc22f088cfb2c604848e8&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2F180124%2F7229806_161239_3313.jpg" },
      { title: "盟军敢死队系列", href: "https://pan.baidu.com/s/1AR6E7SPSsdw9P9-7Ls1zXQ", key: "lpc3", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662470345&di=de75ad8b8a0afa9c9fc6ac1aa030e6f8&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1135268467%2C2036829549%26fm%3D214%26gp%3D0.jpg" },
      { title: "钢铁之师：诺曼底", href: "https://pan.baidu.com/s/1j_oEa2dp8jcue57oaQLRHA", key: "mtnr", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662497777&di=22e3ae46ec1b1b9d27256cb19cc80e4c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fecded2b8ae616473446906ea497d0f47327be5671a789-ZxYFTw_fw658" },
      { title: "登陆日v2", href: "https://pan.baidu.com/s/1vqWkw5FNG6fktIRvMAWhrg ", key: "w2q8", photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=9212136,384241068&fm=26&gp=0.jpg" },
      { title: "地牢守护者", href: "https://pan.baidu.com/s/106mjWUYwX_CJKp4iIkU3IA", key: "4tdt", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662619164&di=50d669e554a6297f6d2dd0906256ad04&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110126%2FImg302587441.jpg" },
      { title: "第9连队", href: "https://pan.baidu.com/s/1PFW3tuS5XH_Qk7uWnqirLA", key: "xuee", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662643265&di=a5b0b6c932631e14381e150378af5d25&imgtype=0&src=http%3A%2F%2Fimg.kuai8.com%2Fattaches%2Fpicture%2F20130822%2F201308221911025819.jpg" },
      { title: "大富翁系列", href: "https://pan.baidu.com/s/1d9rfincZQGyvE5efzz2qtg", key: "hr5q", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2951065911,358446161&fm=26&gp=0.jpg" },
      { title: "英雄无敌系列", href: "http://pan.baidu.com/s/1pLsmrqF", key: "7rzw", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662700516&di=6de0378e6b52e50343a22c2fbf755f3e&imgtype=0&src=http%3A%2F%2Fpcgame.yesky.com%2FuploadImages%2F2011%2F294%2FU64LF0RCLC83_image002.png" },
      { title: "钢铁雄心4", href: "https://pan.baidu.com/s/1nuKiZw9", key: "8un4", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662755695&di=2af75e06498498af781bfb6e27df7d1f&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fc5474b3f68887e5b9c00a8e9945efc425cac87ce.jpg" },
      { title: "信长之野望15", href: "https://pan.baidu.com/s/1qNga-OOcar-D5HC4CW2ctg", key: "jqzv", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662782756&di=de8bb1671de6b07eac1c543201b1e488&imgtype=0&src=http%3A%2F%2Fi2.17173cdn.com%2Fi7mz64%2FYWxqaGBf%2Ftu17173com%2F20141010%2FDUcGYDbjdCorxbd.jpg" },
      { title: "红警40个版本", href: "https://pan.baidu.com/s/1dtGoCkGm7krgDlzgmMuMSg?", key: "g24j", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662803713&di=d307772737ff354467395a24ecc8c993&imgtype=0&src=http%3A%2F%2Fpic1.cdncl.net%2Fgame%2Fuser_upload%2Fpierre%2F0bfe45e2d2ea4eddb4329a22004c6686.jpg" },
      { title: "三国志7 8 9", href: "http://pan.baidu.com/s/1gdhKIm3", key: "u54q", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1725294855,1626678191&fm=26&gp=0.jpg" },
      { title: "三国志10", href: "http://pan.baidu.com/s/1lqaC2", key: "jm92", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1725294855,1626678191&fm=26&gp=0.jpg" },
      { title: "三国志11", href: "https://pan.baidu.com/s/1kVGE0wJ", key: "b84r", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1725294855,1626678191&fm=26&gp=0.jpg" },
      { title: "三国志12", href: "http://pan.baidu.com/s/1nt65sXb", key: "tnc7", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1725294855,1626678191&fm=26&gp=0.jpg" },
      { title: "天使帝国IV", href: "https://pan.baidu.com/s/1w19hwB5qQm9SE9v6mLdMhQ", key: "44cp", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569662855627&di=86a2fb3f3769b6cae7c02af6099525a4&imgtype=0&src=http%3A%2F%2Fi-3.yiwan.com%2F2016%2F7%2F8%2F21eb8ac4-598b-478f-8e08-11d88892505e.jpg" },


    ],
    //竞速-------------------------------------------------------------------------------------------
    items6: [
      { title: "汤姆克兰西：鹰击长空", href: "https://pan.baidu.com/s/1QgYHhUkjW1Wc2uzudE6c0w", key: "7b7m", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569679415637&di=6d9dded2e78caabde48bdaf956d4c122&imgtype=0&src=http%3A%2F%2Fwww.paopaoche.net%2FUpPic%2F2010-8%2F201082591133.jpg" },
      { title: "尘埃系列", href: "https://pan.baidu.com/s/1ikDDm_v3jbslreLJ25peDg", key: "f303", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569679481544&di=b20869aff276b0185e59f927db82c592&imgtype=0&src=http%3A%2F%2Fi0.sinaimg.cn%2Fgm%2Fj%2Fi%2F2009-03-10%2FU1850P115T41D161885F756DT20090310110043.jpg" },
      { title: "赛车计划", href: "https://pan.baidu.com/s/1NllRLV45rBAFbS_TQi1ckg", key: "quhe", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571124675801&di=49eca7339bb36800c957c6de946bdb19&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D129681361%2C2675561803%26fm%3D214%26gp%3D0.jpg" },
      { title: "世界摩托大奖赛15", href: "https://pan.baidu.com/s/1ZpivEtn4qvhHwECnOGSBLQ", key: "4gu3", photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3798645627,2639984623&fm=26&gp=0.jpg" },
      { title: "世界汽车拉力锦标赛", href: "https://pan.baidu.com/s/1svaVRAAjjQ_bWXHzRI_BuA", key: "uy3v", photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=872812682,2573477760&fm=26&gp=0.jpg" },
      { title: "特技摩托进化黄金版", href: "https://pan.baidu.com/s/1XUW9A25wGPlCRU3vWX0s_A", key: "loji", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569679643331&di=0ed682edbbac7953e47d113a3cfa9048&imgtype=0&src=http%3A%2F%2Fcdn.hommk.com%2Fpcgame%2Fupload%2Fattachments%2Fuploads%2F000%2F004%2F379%2Foriginal_1529993552.jpg%3F1529993552" },
      { title: "手足兄弟连兵临绝境", href: "https://pan.baidu.com/s/1S_CYMu7o0XLf3kK1gMngdQ", key: "ldsd", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569679754383&di=58abc17714aba54ed8a8d87a3384637f&imgtype=0&src=http%3A%2F%2Fminigame.qq.com%2Fplat%2Fsocial_hall%2Fpreview%2Fpcgametopic%2Ftemp%2Fatricle%2Fpcgametopicpic_4240335851461726497.jpg" },
      { title: "旋转轮胎", href: "https://pan.baidu.com/s/1Eo9XarRmGBU5foVBJPgy6g", key: "xx8c", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569679779697&di=f831340ff686b516dc3274ad21be08d1&imgtype=0&src=http%3A%2F%2Fwww.downxia.com%2Fuploadfiles%2F2017%2F0727%2F20170727102144295.jpg" },
      { title: "神力科莎", href: "https://pan.baidu.com/s/107-3aXams7_7OIpcFZBvZg", key: "shpw", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569679831732&di=b3d233f7004063b53b3bd3f198e0de36&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fpicfile%2FNews%2F2015%2F01%2F23%2F2015012384820217.jpg" },
      { title: "赛车计划2", href: "https://pan.baidu.com/s/1sYFyAZVQMqeqF2rzwDx-dw", key: "没有", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570274572&di=12f67beb2a4c98d8ca0b658b46b7fba0&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170511%2Fdb64c573f180410999f2a80f9729514f_th.jpg" },
      { title: "Prepar3D模拟飞行", href: "https://pan.baidu.com/s/1haArs5s1_J4ltku0RBfH3A", key: "unrz", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569679872142&di=f4842609a978002530392c144fba588a&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F6e5f6ef74da11de62140a2f10394807774a32740.png" },
      { title: "微软模拟飞行", href: "https://pan.baidu.com/s/1i7lFLjv", key: "isgh", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1379260438,2639075172&fm=15&gp=0.jpg" },
      { title: "F12013", href: "https://pan.baidu.com/s/1G_mP5coG_WSeGcuBNyTfhA", key: "rqr9", photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1967443681,774409115&fm=26&gp=0.jpg" },
      { title: "超级房车赛：起点", href: "https://pan.baidu.com/s/1wC0TdF_scztiL4wvxMSIFw", key: "wgf2", photo: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2011627096,3288819901&fm=15&gp=0.jpg" },
      { title: "尘埃拉力赛", href: "https://pan.baidu.com/s/1d7cuOHNa-c9vwVIMKY7YHg", key: "up9d", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569679962321&di=61fcb34f08fc1e8c7069aacc63615f31&imgtype=0&src=http%3A%2F%2Fimg.99danji.com%2Fuploadfile%2F2015%2F1208%2F20151208063614949.jpg" },



    ],


    //模拟-------------------------------------------------------------------------------------------
    items9: [
      { title: "流放者柯南", href: "https://pan.baidu.com/s/1E2VjRTqh_ZJg8QfkNkSC0A", key: "o7wy", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569679984562&di=f856dacd008da078cce8f6dcc341e116&imgtype=0&src=http%3A%2F%2Farticle-fd.zol-img.com.cn%2Ft_s998x562c5%2Fg5%2FM00%2F09%2F04%2FChMkJlusxS6IFTh6AAxQtbSjDHgAAsGDANC2gUADFDN403.jpg" },
      { title: "热血无赖", href: "https://pan.baidu.com/s/1NgIcFeDqacJCmIxoUnzNJg", key: "sgza", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680028409&di=3e8843c55c0be911a15470401b93abab&imgtype=0&src=http%3A%2F%2Fy1.ifengimg.com%2Fdbcc8e45854c158f%2F2012%2F0723%2Fori_500cfe7b0b235.jpeg" },
      { title: "这是警察", href: "https://pan.baidu.com/s/1_ORUic5D22PZB38G4Kb9KA", key: "5hpm", photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2901463497,3194701477&fm=26&gp=0.jpg" },
      { title: "方舟：生存进化", href: "https://pan.baidu.com/s/1c5PqEm4CofUWbZ8LBXdNrw", key: "u5ln", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570274800&di=1bffe455405bcbbdd73dc3569086a05b&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.ivsky.com%2Fimg%2Fbizhi%2Fpre%2F201901%2F22%2Fark_survival_evolved-006.jpg" },
      { title: "恶霸鲁尼奖学金版", href: "https://pan.baidu.com/s/1WN0ROE4YmmsqaRzQN4LqyA", key: "npb1", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680097643&di=fde8d3e17fae1684bf443a7cc9b04892&imgtype=0&src=http%3A%2F%2Fimg.52miji.com%2F52miji%2F2013%2F04%2F22%2F202150e31e2e7e1e262thumb.jpg" },
      { title: "海岛大亨4", href: "https://pan.baidu.com/s/1Ra8jcKjIQa_vCa65qc4dyQ", key: "fqlx", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680115787&di=03d20af9947dc13f3d2e52ccf17e1cab&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fgame%2F2012%2F3%2F14%2F2012031413583429aa3.jpg" },
      { title: "天使计划", href: "https://pan.baidu.com/s/1Ae1ajfFlikwneoNqsr-E1g", key: "bdb6", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680171040&di=d8c2bfff1ae1358ecb0fdb275af3d1a2&imgtype=jpg&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb70896e5f92b292229c77ecd7bce301b9c5c7426.jpg" },
      { title: "911接线员", href: "http://pan.baidu.com/s/1o7UykFC", key: "cv16", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680240869&di=7578eb730712c3a75b85cac59fe22c77&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Fa2560b5c34b7293a7113f15f833b8f826e2a9622.jpg" },
      { title: "小小梦魇", href: "http://pan.baidu.com/s/1kV4xAJl", key: "授权码698599", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680260110&di=09bf6dac4b736209bd3fc8dbdb3442bf&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fb9a2e2b697264ca206d6bc7b764f3ae42ad2fcf2.jpg" },
      { title: "幻世录1-2", href: "https://pan.baidu.com/s/1nvwypM5", key: "uabw", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680282536&di=c5496ecd14047be1e2bc4c736ef0efb9&imgtype=0&src=http%3A%2F%2Fwww.kuaihou.com%2Fuploads%2Fallimg%2F140808%2F7-140PP15S3P1.jpg" },
      { title: "模拟人生1", href: "https://pan.baidu.com/s/1ffxUaPgZ13dhy2oXph1cNg", key: "4vkc", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680309043&di=d95dff5cef7f42a520dd0e12aef6325d&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fgm%2F2015%2F0114%2FU4341P115DT20150114142936.jpg" },
      { title: "模拟人生2", href: "https://pan.baidu.com/s/1rF022Eit-OOy2M9m_x1UkQ", key: "nw18", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680309043&di=d95dff5cef7f42a520dd0e12aef6325d&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fgm%2F2015%2F0114%2FU4341P115DT20150114142936.jpg" },
      { title: "模拟饭店2", href: "https://pan.baidu.com/s/1eAwlEg8qYlJT4L01OK9fJw", key: "3y5x", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680337598&di=4bffc0602502a099ec8ef4d1a3aa1e67&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2015%2F09%2F27%2F2015092743651618.jpg" },
      { title: "汽车修理工", href: "https://pan.baidu.com/s/1laTlP4uwgJxSZ0TGfHY4tw", key: "i8vp", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680365801&di=b204dd7ba2c3f779aded48f827a8738b&imgtype=0&src=http%3A%2F%2F8.pic.pc6.com%2Fthumb%2Fup%2F2016-9%2F2016928165841182191300850470_600_0.jpg" },
      { title: "流放者柯南", href: "https://pan.baidu.com/s/1E2VjRTqh_ZJg8QfkNkSC0A", key: "o7wy", photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=320524275,757593871&fm=15&gp=0.jpg" },
      { title: "城市：天际线", href: "https://pan.baidu.com/s/1Ls777FAdqxKd9KrcTPntEQ", key: "c1ja", photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569680409503&di=95f3b3a676bcf58d80e50981a75012c2&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20150322%2F20150322210059_985d72b3ea4964226de37d5626512bbd_15.jpeg" },



    ],

    looks: 1,











  },




})
