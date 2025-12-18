// 在文件顶部添加全局标志位 解决快速点击按钮多次滑动问题
let isProcessing = false;

//#region 弹幕数据相关
const christmasSymbols = [
  "🎄",
  "🎁",
  "🌟",
  "❄️",
  "🎅",
  "🦌",
  "🔔",
  "✨",
  "🐶",
  "🦴",
  "🍖"
];
let commentList = [
  // "金毛寻回犬：希望圣诞老人给我一个超大的骨头玩具，可以啃一整天！",
  // "柯基犬：我想要一个会发出声音的球球，这样我就可以和主人一起玩了！",
  // "哈士奇：许愿每天都能去雪地里撒欢，雪是我的最爱！",
  // "泰迪犬：希望圣诞节能有一个漂亮的蝴蝶结项圈，让我更可爱！",
  // "拉布拉多：想要一个装满零食的自动喂食器，这样就不会饿肚子了！",
  // "柴犬：希望主人能多陪我玩扔飞盘的游戏，我超喜欢！",
  // "边境牧羊犬：许愿有一个智能玩具，可以和我互动玩耍！",
  // "比熊犬：想要一个柔软的狗窝，冬天可以暖暖地睡觉！",
  // "萨摩耶：希望每天都能吃到美味的鸡肉干零食！",
  // "法斗：许愿有一个会移动的玩具老鼠，让我追着玩！",
  // "博美犬：想要一个漂亮的圣诞毛衣，过节要有仪式感！",
  // "德牧：希望主人能带我去更多的地方探险！",
  // "贵宾犬：许愿有一个专属的梳毛套装，保持毛发漂亮！",
  // "吉娃娃：想要一个温暖的小毯子，冬天不怕冷！",
  // "雪纳瑞：希望每天都能吃到新鲜的胡萝卜，对牙齿好！",
  // "杜宾犬：许愿有一个结实的咬胶玩具，锻炼咬合力！",
  // "巴哥犬：想要一个会发光的项圈，晚上散步更安全！",
  // "阿拉斯加：希望能在雪地里打滚，感受冬天的快乐！",
  // "约克夏：许愿有一个漂亮的发夹，打扮得美美的！",
  // "马尔济斯：想要一个香香的沐浴露，洗澡更舒服！",
  // "松狮犬：希望主人能多给我按摩，放松身心！",
  // "西施犬：许愿有一个专属的零食罐，随时都能吃到！",
  // "斗牛犬：想要一个冰凉的垫子，夏天不会太热！",
  // "喜乐蒂：希望每天都能听到主人的赞美和鼓励！",
  // "腊肠犬：许愿有一个长长的隧道玩具，可以钻来钻去！",
  // "伯恩山犬：想要一个大大的水碗，随时都能喝水！",
  // "可卡犬：希望有一个会说话的玩具，陪我聊天！",
  // "比格犬：许愿每天都能闻到新鲜的气味，满足好奇心！",
  // "京巴犬：想要一个柔软的枕头，午睡更舒服！",
  // "苏格兰牧羊犬：希望主人能教我新的技能，变得更聪明！",
  // "阿富汗猎犬：许愿有一个专业的护毛产品，保持毛发顺滑！",
  // "大麦町：想要一个会滚动的球，可以自己玩！",
  // "圣伯纳犬：希望能在雪地里救人，发挥我的特长！",
  // "蝴蝶犬：许愿有一个漂亮的蝴蝶结，过节要打扮！",
  // "罗威纳犬：想要一个结实的牵引绳，散步更安全！",
  // "秋田犬：希望主人能多抱抱我，感受温暖！",
  // "比利时牧羊犬：许愿有一个敏捷训练器材，锻炼身体！",
  // "西高地白梗：想要一个白色的圣诞帽子，应景过节！",
  // "英国古代牧羊犬：希望有人帮我梳理长毛，保持整洁！",
  // "中国沙皮犬：许愿有一个凉爽的地方，夏天不会太热！",
  // "日本狆：想要一个精致的小碗，吃饭更有仪式感！",
  // "意大利灵缇：希望能在草地上自由奔跑，释放天性！",
  // "美国爱斯基摩犬：许愿有一个雪人玩具，陪我玩耍！",
  // "波士顿梗：想要一个会发声音的鸭子玩具，有趣！",
  // "骑士查理王猎犬：希望主人能带我去公园交朋友！",
  // "澳大利亚牧羊犬：许愿有一个飞盘，展示我的接盘技巧！",
  // "西藏梗：想要一个温暖的毛衣，抵御寒冷！",
  // "挪威猎鹿犬：希望能在森林里探险，感受大自然！",
  // "葡萄牙水犬：许愿有机会去游泳，展现我的水性！",
  // "法国狼犬：想要一个智力玩具，挑战我的大脑！"
  "想要爵宴风干粮春节大礼包",
  "想要被承包一年的狗狗主粮",
  "出更多新款主粮！",
  "许愿冻干全家桶",
  "许愿入职爵宴",
  "许愿人宠共食的食物",
  "节日限定健康礼盒，比如低敏“圣诞火鸡餐”",
  "许愿爵宴出“拌粮”粉，比如姜黄粉、蓝莓粉",
  "推出“订阅制”家庭套餐，定期配送主粮、零食、用品组合",
  "许愿爵宴出狗狗鲜食",
  "许愿老年犬的流质、营养品能更容易买到",
  "许愿我儿健康，做长寿狗狗",
  "希望有更多有趣的活动邀请我和狗狗参加",
  "想参加宠物烘焙课堂",
  "许愿有人宠一起玩的桨板活动",
  "许愿爵宴去更多城市做活动",
  "想参与活动的前期策划，活动主题和地点我们能投票",
  "想要参加专业的宠物正向训练课",
  "举办“宠物露营”主题活动，营地提供宠物露营餐和烧烤食材",
  "想带狗狗看“宠物友好”的露天电影，就像国外汽车影院一样",
  "希望爵宴能举办宠物才艺大赛或趣味运动会",
  "想有专业人士带队，带我和狗狗一起徒步探险",
  "期待有宠物社交APP，帮我狗交朋友",
  "期待小区里能普及宠物便袋领取机",
  "公园能有专门的“宠物活动区”，做到人宠分区",
  "许愿能有室内的宠物游乐中心，冬天、下雨天能去",
  "期待杭州能开通“宠物友好公交专线”",
  "许愿能有更多商场和店铺门口挂“宠物友好”标识",
  "希望能有专门的宠物主题公园",
  "许愿能有更多允许带宠物入住的民宿和酒店",
]
// let commentListTemp = JSON.parse(JSON.stringify(processCommentList(commentList)));
let commentListTemp = []
// 处理并复制commentList函数
function processCommentList(commentList) {
  return commentList.map(item => {
    return christmasSymbols[Math.floor(Math.random() * christmasSymbols.length)] + item;
  });
}

// FIXME: 审核状态参数已经改变，字段变成了hasReview，传false（未审核）/true（已审核），后续启用弹幕查询需要修改url
// 请求弹幕数据
// $.ajax({
//   url: `https://api.peidigroup.cn/ui/plant/christmas?pageNo=1&pageSize=50&searchStr=%7B%22searchName%22%3A%22json%22%2C%22searchType%22%3A%22equals%22%2C%22searchValue%22%3A%221%22%7D`,
//   type: 'GET',
//   success: function (response) {
//     console.log('弹幕GET请求成功:', response);
//     if (response.data?.records?.length > 0) {
//       commentList = response.data?.records.map(item => item.wish);
//       commentListTemp = JSON.parse(JSON.stringify(processCommentList(commentList)));
//     }
//   },
//   error: function (xhr, status, error) {
//     console.error('弹幕GET请求失败:', error);
//     // 即使GET请求失败也继续发送POST请求，避免影响用户体验
//     commentListTemp = JSON.parse(JSON.stringify(processCommentList(commentList)));
//     alert('获取弹幕数据失败，请刷新页面重试');
//   }
// });
//#endregion

// 愿望数据
const wishForm = {
  name: "",
  tel: "",
  wish: "",
  serial: "" // 第几位许愿的
}

//#region  通用工具类函数
// XSS防护函数 - 将HTML转义为纯文本
function escapeHtml(text) {
  if (typeof text !== 'string') return text;
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 安全地设置文本内容
function setSafeText(element, text) {
  if (typeof text !== 'string') return;
  $(element).text(text); // 使用text()而不是html()来防止XSS
}

// 截取字符串拼接...
function truncateString(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + '...';
}

// 格式化数字 前面补0
function formatNumber(num, length) {
  return num.toString().padStart(length, '0');
}

// 监听长按方法
$.fn.longPress = function (fn) {
  let timeout = 0;
  const $this = this;
  for (let i = 0; i < $this.length; i++) {
    $this[i].addEventListener('touchstart', () => {
      timeout = setTimeout(fn, 800); // 长按时间超过800ms，则执行传入的方法 
    }, false);
    $this[i].addEventListener('touchend', () => {
      clearTimeout(timeout); // 长按时间少于800ms，不会执行传入的方法
    }, false);
  }
};

//判断访问终端
const browser = {
  versions: function () {
    const u = navigator.userAgent, app = navigator.appVersion;
    return {
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,// 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;\( U;\)\? CPU.+Mac OS X\)/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') == -1, // 是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
      qq: u.match(/sQQ/i) == " qq", // 是否QQ
      isHuawei: u.toLowerCase().indexOf('huawei') > -1, // 是否华为
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

//判断机型方法类
class DeviceType {
  // 是否是IOS系统
  static isIOS() {
    return !!navigator.userAgent.match(/\(i[^;]+;\( U;\)\? CPU.+Mac OS X\)/);
  }
  // 是否是Safari浏览器
  static isSafari() {
    return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
  }
}
//#endregion

//#region  保存图片方法集合
// var saveImgTimer = null;
function saveImg() {
  // if (saveImgTimer) {
  //   clearTimeout(saveImgTimer);
  // }
  // saveImgTimer = setTimeout(function () {
  const hbDOM = document.getElementById('hb');
  const hbImgs = hbDOM.querySelectorAll('img');

  // 预加载图片并设置crossorigin
  const loadPromises = Array.from(hbImgs).map(img => {
    return new Promise((resolve) => {
      const newImg = new Image();
      newImg.crossOrigin = 'anonymous';
      newImg.onload = () => {
        img.src = newImg.src;
        resolve();
      };
      newImg.onerror = resolve; // 即使加载失败也继续
      newImg.src = img.src;
    });
  });

  // 等待所有图片重新加载完成
  Promise.all(loadPromises).then(() => {
    html2canvas(hbDOM, {
      useCORS: true,
      allowTaint: false,  // 改为false，因为我们已经设置了crossorigin
      scale: 2,
      logging: false,
      backgroundColor: null
    }).then(function (canvas) {
      $('canvas').remove();
      hbDOM.appendChild(canvas);
      Canvas2Image.saveAsPNG(canvas, hbDOM.width, hbDOM.height, `MeatyWary${new Date().getTime()}.png`);
    }).catch(function (error) {
      console.error('截图失败:', error);
      alert('截图保存失败，请重试！');
    });
  });
  // }, 1000 * 1);
}

// 替换HTML节点为Canvas元素 -Img跨域属性动态添加
function saveCanvasToImgCross() {
  const hbDOM = document.getElementById('hb');
  const hbImgs = hbDOM.querySelectorAll('img');
  const hbSerial = hbDOM.querySelector('#page3_serial');
  hbSerial.style.top = '-120%';

  // 预加载图片并设置crossorigin
  const loadPromises = Array.from(hbImgs).map(img => {
    return new Promise((resolve) => {
      const newImg = new Image();
      newImg.crossOrigin = 'anonymous';
      newImg.onload = () => {
        img.src = newImg.src;
        resolve();
      };
      newImg.onerror = resolve; // 即使加载失败也继续
      newImg.src = img.src;
    });
  });

  // 等待所有图片重新加载完成
  Promise.all(loadPromises).then(() => {
    html2canvas(hbDOM, {
      useCORS: true,
      allowTaint: false,  // 改为false，因为我们已经设置了crossorigin
      scale: 2,
      logging: false,
      backgroundColor: null
    }).then(function (canvas) {
      $('canvas').remove();
      // 替换HTML节点为Canvas元素
      hbDOM.innerHTML = '';
      hbDOM.appendChild(canvas);
    }).catch(function (error) {
      console.error('截图失败:', error);
      alert('截图保存失败，请重试！');
    });
  });
}

// 替换HTML节点为Canvas元素 -Img跨域属性写在节点上 -转换为Base64
function saveCanvasToImgImmediate() {
  const hbDOM = document.getElementById('hb');
  const hbImgs = hbDOM.querySelectorAll('img');
  const hbSerial = hbDOM.querySelector('#page3_serial');
  hbSerial.style.marginBottom = '0.8rem';

  // 动态添加样式，解决文字偏移问题
  // const style = document.createElement('style') // 创建一个 <style> 元素
  // document.head.appendChild(style) // 将 <style> 添加到 <head>
  // style.sheet?.insertRule('body > div:last-child img { display: inline-block; }') // 添加 CSS 规则

  html2canvas(hbDOM, {
    useCORS: true,
    allowTaint: false,  // 改为false，因为我们已经设置了crossorigin
    scale: 2,
    logging: false,
    backgroundColor: null
  }).then(function (canvas) {
    $('canvas').remove();
    // 替换HTML节点为Canvas元素
    // hbDOM.appendChild(canvas);
    // 插入Base64图片
    const imgUrl = canvas.toDataURL("image/png");
    const img = document.createElement('img');
    img.src = imgUrl;
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    //hbDOM的所有节点替换为img
    // hbDOM.replaceChild(img, hbDOM.firstChild);
    // hbDOM.innerHTML = '';
    hbDOM.appendChild(img);
  }).catch(function (error) {
    console.error('截图失败:', error);
    alert('截图保存失败，请重试！');
  });
}

// 替换HTML节点为Canvas元素 -Img跨域属性写在节点上 -转换为Base64 -使用SnapDom插件 
// TODO: 现在用来对华为做特殊处理，目前只有华为有问题，如果后续有新手机问题，把处理逻辑抽离出来
async function saveCanvasToImgImmediateSnapDom() {
  const hbDOM = document.getElementById('hb');
  // const hbImgs = hbDOM.querySelectorAll('img');
  const hbSerial = hbDOM.querySelector('#page3_serial');
  hbSerial.style.fontSize = '2.35rem';
  // hbSerial.style.marginBottom = '7%';
  // hbSerial.style.top = '-120%';
  // const hbSerialContainer = hbDOM.querySelector('.page3_info_num-container');
  // hbSerialContainer.style.top = '77%';
  const hbName = hbDOM.querySelector('#page3_name');
  hbName.style.fontSize = '1.1rem';
  const hbWish = hbDOM.querySelector('#page3_wish');
  hbWish.style.fontSize = '1.1rem';

  // 最简单的使用方式
  const image = await snapdom.toPng(hbDOM);

  image.style.position = 'absolute';
  image.style.top = '0';
  image.style.left = '0';

  // 显示在页面上
  // console.log(image);
  // hbDOM.innerHTML = '';
  hbDOM.appendChild(image);

  // snapdom.toPng(hbDOM, {
  //   useProxy: true // enables built-in CORS proxy fallback (optional)
  // }).then(img => {
  //   console.log(hbDOM, img);
  //   // hbDOM.innerHTML = '';
  //   hbDOM.appendChild(img);
  // });
  // html2canvas(hbDOM, {
  //   useCORS: true,
  //   allowTaint: false,  // 改为false，因为我们已经设置了crossorigin
  //   scale: 2,
  //   logging: false,
  //   backgroundColor: null
  // }).then(function (canvas) {
  //   $('canvas').remove();
  //   // 替换HTML节点为Canvas元素
  //   hbDOM.innerHTML = '';
  //   // hbDOM.appendChild(canvas);
  //   // 插入Base64图片
  //   const imgUrl = canvas.toDataURL("image/png");
  //   const img = document.createElement('img');
  //   img.src = imgUrl;
  //   hbDOM.appendChild(img);
  // }).catch(function (error) {
  //   console.error('截图失败:', error);
  //   alert('截图保存失败，请重试！');
  // });
}
//#endregion

$(function () {
  const winW = $(window).width();
  const winH = $(window).height();
  $('.mc').height(winH);
  $('.mask').height(winH);
  // $("#music")[0].volume = 0;

  // 加载
  let wloaded = false;
  let loaded = false;

  $(window).load(function () {
    wloaded = true;
  })
  let loadtime = 0;
  const loading = setInterval(function () {
    if (!wloaded) {
      loadtime++;
      if (loadtime >= 11) {
        wloaded = true;
      }
    } else {
      clearInterval(loading);
      if (loadtime >= 5) {
        showmain();

      } else {
        const last = (5 - loadtime) * 1000;
        setTimeout(function () {
          showmain();
        }, last)
      }
      //showmain();
    }
  }, 1000)

  //禁止下拉回弹
  const overscroll = function (el) {
    el.addEventListener('touchstart', function () {
      const top = el.scrollTop;
      const totalScroll = el.scrollHeight;
      const currentScroll = top + el.offsetHeight;
      if (top === 0) {
        el.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        el.scrollTop = top - 1;
      }
    });
    el.addEventListener('touchmove', function (evt) {
      if (el.offsetHeight < el.scrollHeight) {
        evt._isScroller = true;
      }
    });
  }
  overscroll(document.querySelector('body'));
  document.body.addEventListener('touchmove', function (evt) {
    if (!evt._isScroller) {
      evt.preventDefault();
    }
  });

  //#region 音乐相关逻辑 common_music
  let common_music_pauseMark = false;
  $(".common_music").click(function () {
    if (common_music_pauseMark) {
      $(this).attr("src", "img/music-off.png");
      $(this).removeClass("on");
      $("#common_music")[0].pause();
    } else {
      $(this).attr("src", "img/music-on.png");
      $(this).addClass("on");
      $("#common_music")[0].play();
    }
    common_music_pauseMark = !common_music_pauseMark;
  });
  function audioAutoPlay(id) {
    const audio = document.getElementById(id);
    audio.play();
    document.addEventListener(
      "WeixinJSBridgeReady",
      function () {
        if (common_music_pauseMark) {
          audio.play();
          //audio.volume = 0;
        }
      },
      false
    );
  }
  // audioAutoPlay("common_music");
  // 播放音乐
  function playMusic() {
    common_music_pauseMark = true;
    $(".common_music").attr("src", "img/music-on.png");
    $(".common_music").addClass("on");
    $("#common_music")[0].play();
  }
  //#endregion

  //#region 加载动画相关逻辑 common_loading
  let common_count = 0;
  const common_loading_timer1 = setInterval(function () {
    common_count += 3;
    $('.common_loading-num span').html(common_count);
    if (common_count >= 32) {
      clearInterval(common_loading_timer1);
      setTimeout(function () {
        const common_loading_timer2 = setInterval(function () {
          common_count += 8;
          $('.common_loading-num span').html(common_count);
          if (common_count >= 54) {
            clearInterval(common_loading_timer2);
            const common_loading_timer3 = setInterval(function () {
              common_count += 4;
              $('.common_loading-num span').html(common_count);
              if (common_count >= 83) {
                clearInterval(common_loading_timer3);
                setTimeout(function () {
                  const common_loading_timer4 = setInterval(function () {
                    common_count += 2;
                    $('.common_loading-num span').html(common_count);
                    if (common_count >= 97) {
                      clearInterval(common_loading_timer4);
                    }
                  }, 120);
                }, 250)
              }
            }, 250);
          }
        }, 120);
      }, 250)
    }
  }, 180);
  //#endregion

  function showmain() {
    $('.mc').css('opacity', '1');
    $('.common_music-container').css('opacity', '1');
    $('.common_loading-num span').html(100);
    setTimeout(function () {
      $('.common_loading').fadeOut();
      loaded = true;
    }, 1000)
    const mc = new Swiper('.mc', {
      direction: 'vertical',
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      mousewheelControl: true,
      noSwiping: true,
      longSwipesRatio: 0.1,
      touchAngle: 15,
      speed: 500,
      resistanceRatio: 0,
      on: {
        init: function () {
          swiperAnimateCache(this); //隐藏动画元素 
          const timer = setInterval(function () {
            if (loaded) {
              clearInterval(timer);
              swiperAnimate(mc); //初始化完成开始动画
            }
          }, 500)

        },
        slideChangeTransitionStart: function () {

        },
        slideChangeTransitionEnd: function () {
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          if (this.activeIndex == 1) {
            // danmu_manager.startPlaying();
            // startDanmuTimer();
          }
          if (this.activeIndex == 2) {
            // danmu_manager.startPlaying();
            // startDanmuTimer();
            stopDanmuTimer();
            danmu_manager.stopPlaying();
          }
        }
      }
    });
    mc.allowTouchMove = false;

    //#region 场景1 点击许愿逻辑 page1_butt
    $('.page1_butt').click(function () {
      if (isProcessing) return; // 如果正在处理中，直接返回

      isProcessing = true;
      playMusic();
      $(this).addClass('anjian');
      setTimeout(function () {
        $('.page1_butt').removeClass('anjian');
        mc.allowTouchMove = true;
        mc.slideNext();
        mc.allowTouchMove = false;
        isProcessing = false; // 处理完成后重置标志位
      }, 400)
    })
    //#endregion

    //#region 场景2 弹幕逻辑 page2_danmu
    // 需要添加的样式
    const danmu_styles = {
      color: '#ffffffc5',
      fontSize: '0.8rem',
      // 添加iOS特定样式防止字体自动调整
      '-webkit-text-size-adjust': 'none',
      'text-size-adjust': 'none',
      // 确保文本不会换行
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      // 设置最大宽度
      maxWidth: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '6px 12px',
      borderRadius: '20px',
      border: '2px solid #ffffff50',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
      fontWeight: 'bold',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
      lineHeight: '1.4'

      // color: '#ffffffc5',
      // fontSize: '0.75rem',
      // backgroundColor: 'rgba(0, 0, 0, 0.3)',
      // padding: '6px 12px',
      // borderRadius: '20px',
      // border: '2px solid #ffffff50',
      // textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
      // fontWeight: 'bold',
      // boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
      // lineHeight: '1.4',
      // whiteSpace: 'nowrap'
    };
    var danmu_manager = Danmu.create({
      speed: 0.1,
      plugin: {
        $createNode(danmaku) {
          // danmaku.node.textContent = danmaku.data;
          // console.log(danmaku.node);

          // 处理长文本，确保不会导致字体变化
          let text = danmaku.data;
          // 如果文本过长，进行截断处理
          if (text.length > 50) {
            text = text.substring(0, 47) + '...';
          }
          danmaku.node.textContent = text;
          // 强制设置字体大小
          danmaku.node.style.fontSize = '0.75rem';
          danmaku.node.style.webkitTextSizeAdjust = 'none';
          danmaku.node.style.textSizeAdjust = 'none';
        },
        $beforeMove(danmaku) {
          for (const key in danmu_styles) {
            danmaku.setStyle(key, danmu_styles[key]);
          }
        },

        willRender(ref) {
          // console.log(ref.type); // 即将要渲染的弹幕类型
          // console.log(ref.danmaku); // 即将要渲染的弹幕实例
          ref.prevent = false; // 设置为 true 将阻止渲染，可以在这里做弹幕过滤工作
          return ref;
        },
      },
      // .
    });
    const page2_danmu_container = document.getElementById('page2_danmu');
    danmu_manager.mount(page2_danmu_container);
    danmu_manager.startPlaying();
    startDanmuTimer()

    var page2_danmu_timer = null;
    // 开启弹幕定时器
    function startDanmuTimer() {
      if (page2_danmu_timer) return;
      page2_danmu_timer = setInterval(function () {
        if (commentListTemp.length > 0) {
          danmu_manager.push(commentListTemp.shift());
        } else {
          commentListTemp = JSON.parse(JSON.stringify(processCommentList(commentList)));
        }
      }, 1000 * 0.5);
    }
    // 关闭弹幕定时器
    function stopDanmuTimer() {
      if (!page2_danmu_timer) return;
      clearInterval(page2_danmu_timer);
      page2_danmu_timer = null;
    }
    //#endregion

    //#region 场景2 点击许愿逻辑 page2_butt
    $('.page2_butt').click(function () {
      if (isProcessing) return; // 如果正在处理中，直接返回

      isProcessing = true;
      $(this).addClass('anjian');
      // $('.mark_form').height($('.mark_card').height());
      setTimeout(function () {
        $('.page2').removeClass('anjian');
        $('.mask').fadeIn();
        isProcessing = false; // 处理完成后重置标志位
      }, 400)
    })
    //#endregion

    //#region mask&表单逻辑 mark_
    $('#sub').click(function () {
      $(this).addClass('anjian');
      setTimeout(function () {
        $('#sub').removeClass('anjian');
      }, 400)
      if (!$('#name').val().trim()) {
        alert('请输入狗狗的名字！');
        return false;
      } else if (!$('#tel').val().trim()) {
        alert('请输入你的微信ID或手机号！');
        return false;
      } else if (!$('#wish').val().trim()) {
        alert('请输入你和小狗的圣诞愿望！');
        return false;
      } else {
        wishForm.name = $('#name').val();
        wishForm.tel = $('#tel').val();
        wishForm.wish = $('#wish').val();

        // 发送POST请求到API
        $.ajax({
          url: 'https://api.peidigroup.cn/ui/plant/christmas',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            "mobile": wishForm.tel,
            "wechat": wishForm.tel,
            "wish": wishForm.wish,
            "hasReview": false,
          }),
          success: function (response) {
            console.log('POST请求成功:', response);
            // 请求成功后执行原有逻辑
            executeAfterPostSuccess();
          },
          error: function (xhr, status, error) {
            console.error('POST请求失败:', error);
            // 即使请求失败也继续执行原有逻辑，避免影响用户体验
            alert('提交失败，请重试');
            // executeAfterPostSuccess();
          }
        });

        return false;
      }

      // 请求成功后执行的函数
      function executeAfterPostSuccess() {
        $.ajax({
          url: `https://api.peidigroup.cn/ui/plant/christmas?pageNo=1&pageSize=1`,
          type: 'GET',
          success: function (response) {
            console.log('GET请求成功，total值为:', response);

            wishForm.serial = 120 + (response.data?.total ?? 0);

            // 安全地设置文本内容，使用text()而不是html()
            setSafeText('#page3_name', truncateString(wishForm.name, 8));
            setSafeText('#page3_wish', truncateString(wishForm.wish, 25));
            setSafeText('#page3_serial', formatNumber(wishForm.serial, 5));

            setTimeout(function () {

              $('.mask').fadeOut();
              mc.allowTouchMove = true;
              mc.slideNext();
              mc.allowTouchMove = false;

              if (browser.versions.isHuawei) {
                // alert('华为手机');
                setTimeout(() => {
                  saveCanvasToImgImmediateSnapDom();
                }, 800);
              } else {
                saveCanvasToImgImmediate();
              }


              // if (DeviceType.isIOS() || DeviceType.isSafari() || browser.versions.iPhone || browser.versions.iPad) {
              //   saveCanvasToImgImmediate();
              // } else {
              //   setTimeout(() => {
              //     saveCanvasToImgImmediateSnapDom();
              //   }, 800);
              // }

              // saveCanvasToImgImmediate();
              // $('#hb').longPress(() => {
              //   saveImg();
              // });

            }, 800)

          },
          error: function (xhr, status, error) {
            console.error('GET请求失败:', error);
            // 即使GET请求失败也继续发送POST请求，避免影响用户体验
            alert('获取数据失败，请重试');
          }
        });


      }
    })
    window.onload = function () {
      document.forms[0].reset();
    }
    //#endregion
  }
});