nest-js compiler plugin
* activate it in the `project.json` file
  * add `"tsPlugins": ["@nestjs/swagger/plugin"]`
* the compilation only works when we use `"module": "commonjs"` in `tsconfig.json`  
  otherwise we get an error (when we excute `npm start`)  
  ```
  D:\dev_no_backup\nx-swagger-plugin\dist\apps\nest-app\main.js:30
  openapi.ApiResponse({ status: 200, type: (__webpack_require__("./apps/nest-app/src/app/my.dto.ts").MyDto) }),
  ^
  ReferenceError: openapi is not defined
  at Object../apps/nest-app/src/app/app.controller.ts (D:\dev_no_backup\nx-swagger-plugin\dist\apps\nest-app\main.js:30:5)
  at __webpack_require__ (D:\dev_no_backup\nx-swagger-plugin\dist\apps\nest-app\webpack:\nx-swagger-plugin\webpack\bootstrap:19:1)
  at Object../apps/nest-app/src/app/app.module.ts (D:\dev_no_backup\nx-swagger-plugin\dist\apps\nest-app\main.js:55:73)
  at __webpack_require__ (D:\dev_no_backup\nx-swagger-plugin\dist\apps\nest-app\webpack:\nx-swagger-plugin\webpack\bootstrap:19:1)
  at D:\dev_no_backup\nx-swagger-plugin\dist\apps\nest-app\main.js:239:73
  at D:\dev_no_backup\nx-swagger-plugin\dist\apps\nest-app\main.js:268:3
  at Object.<anonymous> (D:\dev_no_backup\nx-swagger-plugin\dist\apps\nest-app\main.js:273:12)
  at Module._compile (internal/modules/cjs/loader.js:1072:14)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
  at Module.load (internal/modules/cjs/loader.js:937:32)
  
  ```
