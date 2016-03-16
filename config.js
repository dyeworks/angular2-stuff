System.config({
  //use typescript for compilation
  //transpiler: 'typescript',
  //typescript compiler options
  //typescriptOptions: {
  //  emitDecoratorMetadata: true
  //},
  //map tells the System loader where to look for things
  //map: {
  //  app: "./app"
  //},
  //packages defines our app package

  packages: {
    app: {
      //main: './boot.js',
      format: 'register',
      defaultExtension: 'js'
    },
    'ag-grid-ng2': {
      defaultExtension: "js"
    },
    'ag-grid': {
      defaultExtension: "js"
    }
  },
  map: {
    'ag-grid-ng2': 'node_modules/ag-grid-ng2',
    'ag-grid': 'node_modules/ag-grid'
  }

});
//System.import('node_modules/angular2/bundles/router.dev.js');
//System.import('node_modules/ng2-toastr/bundles/ng2-toastr.min.css');
//System.import('node_modules/ng2-toastr/bundles/ng2-toastr.min.js');
//System.import('node_modules/ng2-toasty/ng2-toasty.css');
//System.import('node_modules/ng2-toasty/bundles/ng2-toasty.js');
System.import('node_modules/ag-grid/dist/ag-grid.js');
//System.import('node_modules/ag-grid/dist/styles/ag-grid.css');
//System.import('node_modules/ag-grid/dist/styles/theme-fresh.css');
//System.import('node_modules/ag-grid-ng2/lib/agGridNg2.js');
System.import('app/boot')
      .then(null, console.error.bind(console));
