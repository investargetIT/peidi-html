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
  // "想要爵宴风干粮春节大礼包",
  // "想要被承包一年的狗狗主粮",
  // "出更多新款主粮！",
  // "许愿冻干全家桶",
  // "许愿入职爵宴",
  // "许愿人宠共食的食物",
  // "节日限定健康礼盒，比如低敏“圣诞火鸡餐”",
  // "许愿爵宴出“拌粮”粉，比如姜黄粉、蓝莓粉",
  // "推出“订阅制”家庭套餐，定期配送主粮、零食、用品组合",
  // "许愿爵宴出狗狗鲜食",
  // "许愿老年犬的流质、营养品能更容易买到",
  // "许愿我儿健康，做长寿狗狗",
  // "希望有更多有趣的活动邀请我和狗狗参加",
  // "想参加宠物烘焙课堂",
  // "许愿有人宠一起玩的桨板活动",
  // "许愿爵宴去更多城市做活动",
  // "想参与活动的前期策划，活动主题和地点我们能投票",
  // "想要参加专业的宠物正向训练课",
  // "举办“宠物露营”主题活动，营地提供宠物露营餐和烧烤食材",
  // "想带狗狗看“宠物友好”的露天电影，就像国外汽车影院一样",
  // "希望爵宴能举办宠物才艺大赛或趣味运动会",
  // "想有专业人士带队，带我和狗狗一起徒步探险",
  // "期待有宠物社交APP，帮我狗交朋友",
  // "期待小区里能普及宠物便袋领取机",
  // "公园能有专门的“宠物活动区”，做到人宠分区",
  // "许愿能有室内的宠物游乐中心，冬天、下雨天能去",
  // "期待杭州能开通“宠物友好公交专线”",
  // "许愿能有更多商场和店铺门口挂“宠物友好”标识",
  // "希望能有专门的宠物主题公园",
  // "许愿能有更多允许带宠物入住的民宿和酒店",
  /** 精选好玩 */
  "平平安安陪我久一点",
  "希望得到爵宴的零食经常；希望社会对宠物能够更加友好一些",
  "希望nico可以和两个妹妹好好相处并且爱护保护她们！",
  "我跟小狗都身体健康",
  "我跟翠花都长生不老 我有花不完钱翠花有吃不完的零食罐头狗粮",
  "健健康康哒.成功减肥✌️(ᐛ)✌️︎",
  "希望小宝快乐健康成长 来年好好过个一岁生日庆祝我俩的相遇",
  "小狗想大口吃肉，想要爵宴家的零食大礼包",
  "希望小狗永远健康快乐 永远爱爵宴！",
  "平安喜乐幸福美满",
  "爵宴来更多城市做活动",
  "宠物友好越来越多",
  "承包一年的狗粮",
  "希望我的小猫吃饱睡饱身体好好，每天都有很多好吃的",
  "希望小狗幸福快乐平安下去 能永远陪在我们的身边很久很久",
  "获得爵宴新品慢食碗",
  "许愿拥有2个红色慢食物碗",
  "动物保护法早日出台！挣好多好多钱给猫猫买好吃的",
  "老贝健健康康！😊",
  "小奕和我都健健康康！",
  "希望我的团团可以永远健康、平安、幸福地一直陪在我们身边。",
  "这个冬天所有的毛孩子都能平平安安",
  "明年和小狗去更多城市，吃更多爵宴",
  "希望宠物立法",
  "让小狗吃完爵宴所有产品",
  "希望馒头可以开开心心健健康康的长大",
  "圣诞愿望:有好多好多肉干，每年都能出去旅游几次",
  "开心快乐每一天",
  "April：吃不完的猪心 我：外公身体健康，等我回家过年",
  "爵宴大礼包一年量",
  "2026平安健康，不去医院！2026暴富！",
  "希望家里的两只宝宝身体健康、吃嘛嘛香、永远不生病~",
  "求一个正向训练导师 与小狗一起成长！！",
  "希望没有小狗再饿肚子；希望新的一年可以有更多新的体验；希望圣诞老人快乐",
  "希望我的宝宝天天开心，有吃不完的罐罐和零食",
  "希望家里的两只宝宝身体健康、不生病、吃嘛嘛香",
  "天天有肉肉，天天睡窝窝",
  "希望有吃不完的磨牙棒",
  "希望我的小狗和全世界的毛孩子都能健康平安！爵宴！！快来山东举办活动！！！！",
  "欢迎蒂来广州玩玩！许愿2026福利多多，佩蒂爆单",
  "麻麻的圣诞愿望🎄小狗健康快乐成长，小狗圣诞愿望🎄天天出去玩以及吃不完的爵宴肉肉。许愿一个爵宴重庆线下活动！",
  "希望得到圣诞大礼包",
  "希望小狗平平安安有很多很多好吃的，爵宴姐姐要跟我们一起过圣诞节哦～",
  "两个红色慢食碗！谢谢",
  "希望小狗新的一年健健康康，开开心心，希望佩蒂多出些新品，让小狗能吃到不同味道的狗粮或者零食，希望一切顺顺利利，天天开心。",
  "狗：想要吃鸭肉红薯卷 人：想要一个储粮桶",
  "想要一个猫爬架，也想要参加纯猫猫线下活动。",
  "希望杭州能有更多宠物友好的地方",
  "希望从小南方长大的小狗可以看到一场埋过腿的大雪（英国土狗）",
  "希望有吃不完的零食和罐罐，最想要圣诞慢食碗!",
  "希望我的小狗平平安安，希望不要再有毒害宠物的人出现。",
  "肉干冻干大礼包&周边大礼包（贪心版）",
  "希望泡泡能健健康康的，我会赚更多的票票给我的崽买好多好吃的～也希望爵宴蒸蒸日上，开发出更多好吃的零食、罐罐、狗粮～",
  "希望爵宴越来越好！！小狗的粮仓永远不空",
  "希望爵宴来河北线下办活动",
  "许愿爵宴零食罐头周边用品大礼包",
  "很希望很希望在新的一年可以参加爵宴的线下活动~定位深圳南山！我们家真的很爱很爱爵宴，特别是原切系列和兔脊骨，源力碗作为她的主食排名榜第一！！自从吃了爵宴之后我们家就没有挑食过！另外希望爵宴越做越大，小狗子们健康平安，愿团团她妈中一次抽奖~",
  "希望爵宴多多出骨骼类冻干零食！特别适合熟自制家长做骨骼补充！",
  "小狗和人类都平安健康 小狗想吃爵宴风干粮！",
  "爵宴圣诞🎄大礼包"
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
      if (isProcessing) return; // 如果正在处理中，直接返回

      isProcessing = true;
      $(this).addClass('anjian');

      setTimeout(function () {
        $('#sub').removeClass('anjian');
      }, 400)

      if (!$('#name').val().trim()) {
        alert('请输入狗狗的名字！');
        isProcessing = false;
        return false;
      } else if (!$('#tel').val().trim()) {
        alert('请输入你的微信ID或手机号！');
        isProcessing = false;
        return false;
      } else if (!$('#wish').val().trim()) {
        alert('请输入你和小狗的圣诞愿望！');
        isProcessing = false;
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
            "wechat": wishForm.name,
            "mobile": wishForm.tel,
            "wish": wishForm.wish,
            "hasReview": false,
          }),
          success: function (response) {
            console.log('POST请求成功:', response);
            // 请求成功后执行原有逻辑
            executeAfterPostSuccess();
            isProcessing = false; // 请求完成后重置标志位
          },
          error: function (xhr, status, error) {
            console.error('POST请求失败:', error);
            // 即使请求失败也继续执行原有逻辑，避免影响用户体验
            alert('提交失败，请重试');
            isProcessing = false; // 请求完成后重置标志位
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