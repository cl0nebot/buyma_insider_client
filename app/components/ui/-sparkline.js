import Ember from 'ember';
// import JQuerySparkline from 'ember-jquery-sparkline/components/spark-line';

// Force import layout on parent component
// import layout from '../../templates/components/ui/-sparkline';

const { A, on } = Ember;

export default Ember.Component.extend({
  tagName:    'span',
//  layout:     layout,
  classNames: 'component-ui-sparkline sparkline'.w(),

  onDidInsertElement: on('didInsertElement', function () {
    this._super(...arguments);

    let _this   = this;
    let options = this.getWithDefault('options', {});
    let data    = this.getWithDefault('data', A());

    // If data is 0 or empty, no chart is displayed for line
    let _sparkline = this.$().sparkline(data, options);

    this.$().bind('sparklineClick', function (ev) {
      _this.set('sparklineClick', ev.sparklines[ 0 ]);
    });

    this.$().bind('sparklineRegionChange', function (ev) {
      _this.set('sparklineRegionChange', ev.sparklines[ 0 ]);
    });

    this.set('_sparkline', _sparkline);
  }),

//  click() {
//    this.sendAction('action', this.get('sparklineClick'));
//  },

//  mouseMove() {
//    if (this.get('hover')) {
//      let sp = this.get('sparklineRegionChange');
//      if (sp) {
//        this.sendAction('hover', sp);
//      }
//    }
//  },

  onWillDestroyElement: on('willDestroyElement', function () {
    let _sparkline = this.get('_sparkline');
    if (!!_sparkline) {
      _sparkline.remove();
    }
    this._super(...arguments);
  }),
});
