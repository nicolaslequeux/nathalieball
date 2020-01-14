# ball-nathalie project

Personal website coded by Nicolas Lequeux for Nathalie Ball Consulting

if cloned :
```
npm install
gulp --tasks
gulp mdb-go
```

Copy /dist in /public/www/ server folder (ftp)

---
green logo light: #B7CD05\
green logo dark: #5CB02A

---
02/12/2019 - Modified Gulp for Netlify deployment&nbsp;
_[Browsersync] Couldn't open browser (if you are using BrowserSync in a headless environment, you might want to set the open option to false)_

```javascript
 gulp.task('mdb-go', (done) => {
  browserSync.init({
    server: {
      baseDir: './dist',
      directory: true
    },
    notify: false,
    open: false
  });
```
