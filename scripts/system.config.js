System.config({
  packages: {
    scripts: {
      format: 'register',
      defaultExtenstion: 'js'
    }
  }
});
System.import('scripts/boot')
  .then(null, console.error.bind(console));
