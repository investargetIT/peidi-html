(function (grapesjs) {
  grapesjs.plugins.add('peidi-grapesjs-swiper', function (editor) {

    const domc = editor.DomComponents;
    const bm = editor.BlockManager;
    const em = editor.Editor;
    const cmd = editor.Commands;

    /* ========== Slide Item ========== */
    domc.addType('swiper-slide-item', {
      model: {
        defaults: {
          tagName: 'div',
          classes: ['swiper-slide'],
          draggable: '.swiper-wrapper',
          droppable: true,
          components: [
            {
              tagName: 'div',
              classes: ['slide-image'],
              style: {
                width: '100%',
                'aspect-ratio': '16 / 9',
                overflow: 'hidden',
              },
              components: [
                {
                  type: 'image',
                  style: {
                    width: '100%',
                    height: '100%',
                    'object-fit': 'cover',
                  },
                },
              ],
            },
            {
              tagName: 'h3',
              content: '标题',
              style: { 'text-align': 'center' },
            },
            {
              tagName: 'p',
              content: '描述文字',
              style: { 'text-align': 'center' },
            },
          ],
        },
      },
    });

    /* ========== Slider ========== */
    domc.addType('swiper-slider', {
      model: {
        defaults: {
          tagName: 'div',
          classes: ['swiper'],
          draggable: true,

          traits: [
            { type: 'number', name: 'delay', label: '轮播间隔(ms)', default: 3000, changeProp: 1 },
            { type: 'checkbox', name: 'autoplay', label: '自动播放', default: true, changeProp: 1 },
            {
              type: 'select',
              name: 'direction',
              label: '动画方向',
              options: [
                { id: 'horizontal', name: '左右滚动' },
                { id: 'vertical', name: '上下滚动' },
              ],
              default: 'horizontal',
              changeProp: 1,
            },
            {
              type: 'number',
              name: 'slidesPerView',
              label: '每屏显示',
              default: 1,
              changeProp: 1,
            },
            {
              type: 'checkbox',
              name: 'loop',
              label: '循环',
              default: true,
              changeProp: 1,
            },
          ],

          components: [
            {
              tagName: 'div',
              classes: ['swiper-wrapper'],
              components: [
                { type: 'swiper-slide-item' },
                { type: 'swiper-slide-item' },
              ],
            },
            { tagName: 'div', classes: ['swiper-pagination'] },
            { tagName: 'div', classes: ['swiper-button-prev'] },
            { tagName: 'div', classes: ['swiper-button-next'] },
          ],

          script: function () {
            if (!window.Swiper) return;

            const cfg = {
              loop: this.getAttribute('data-loop') !== 'false',
              direction: this.getAttribute('data-direction') || 'horizontal',
              slidesPerView: Number(this.getAttribute('data-spv')) || 1,
              autoplay: this.getAttribute('data-autoplay') !== 'false'
                ? { delay: Number(this.getAttribute('data-delay')) || 3000 }
                : false,

              pagination: {
                el: this.querySelector('.swiper-pagination'),
                clickable: true,
              },

              navigation: {
                nextEl: this.querySelector('.swiper-button-next'),
                prevEl: this.querySelector('.swiper-button-prev'),
              },

              breakpoints: {
                0: {
                  pagination: { enabled: true },
                  navigation: false,
                },
                768: {
                  pagination: { enabled: false },
                  navigation: true,
                },
              },
            };

            new Swiper(this, cfg);
          },
        },

        init() {
          const sync = () => {
            this.addAttributes({
              'data-delay': this.get('delay'),
              'data-autoplay': this.get('autoplay'),
              'data-direction': this.get('direction'),
              'data-loop': this.get('loop'),
              'data-spv': this.get('slidesPerView'),
            });
          };

          this.on(
            'change:delay change:autoplay change:direction change:loop change:slidesPerView',
            sync
          );

          sync();
        },
      },

      view: {
        onRender() {
          this.addToolbar();
        },

        addToolbar() {
          const model = this.model;
          model.set('toolbar', [
            {
              attributes: { class: 'fa fa-plus', title: '添加 Slide' },
              command(editor) {
                const wrapper = model.find('.swiper-wrapper')[0];
                wrapper.append({ type: 'swiper-slide-item' });
              },
            },
            {
              attributes: { class: 'fa fa-minus', title: '删除最后一个 Slide' },
              command(editor) {
                const wrapper = model.find('.swiper-wrapper')[0];
                const slides = wrapper.components();
                if (slides.length > 1) slides.at(slides.length - 1).remove();
              },
            },
          ]);
        },
      },
    });

    /* ========== Block ========== */
    bm.add('swiper-slider', {
      label: '轮播图',
      category: 'Peidi',
      content: { type: 'swiper-slider' },
    });

    /* ========== Export: 收集外链资源 ========== */
    editor.on('run:export-template', () => {
      editor.getConfig().canvas.styles.push(
        '../dependency/swiper-bundle.min.css'
      );
      editor.getConfig().canvas.scripts.push(
        '../dependency/swiper-bundle.min.js'
      );
    });
  });
})(window.grapesjs);
