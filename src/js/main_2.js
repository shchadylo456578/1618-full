// var smartgrid = require('smart-grid');
//
// /* It's principal settings in smart grid project */
// var settings = {
//   outputStyle: 'scss', /* less || scss || sass || styl */
//   columns: 12, /* number of grid columns */
//   offset: '30px', /* gutter width px || % */
//   container: {
//     maxWidth: '1600px', /* max-width оn very large screen */
//     fields: '18px' /* side fields */
//   },
//   breakPoints: {
//
//     xlg: {
//       width: '1920px',
//       fields: '18px'
//     },
//     lg: {
//       width: '1200px',
//       fields: '13px'
//     },
//     md: {
//       width: '992px',
//       fields: '15px'
//     },
//     sm: {
//       width: '768px',
//       fields: '15px'
//     },
//     xs: {
//       width: '480px',
//       fields: '15px'
//     },
//
//     xxs: {
//       width: '320px',
//       fields: '15px'
//     }
//
//   }
// };

// smartgrid('style/modules', settings);


var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
  outputStyle: 'scss', /* less || scss || sass || styl */
  columns: 12, /* number of grid columns */
  offset: '30px', /* gutter width px || % */
  mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
  container: {
    maxWidth: '1600px', /* max-width оn very large screen */
    fields: '30px' /* side fields */
  },
  breakPoints: {
    xxlg: {
      width: '1920px',
      offset: '30px'
    },
    xlg: {
      width: '1440px',
      offset: '30px'
    },
    lg: {
      width: '1280px',
      offset: '27px'
    },
    md: {
      width: '992px',
      offset: '27px'
    },
    sm: {
      width: '768px',
      offset: '16px'
    },
    xs: {
      width: '480px',
      offset: '10px'

    },
    xxs: {
      width: '320px',
      offset: '10px'

    }
  }
};
smartgrid('style/modules', settings);

