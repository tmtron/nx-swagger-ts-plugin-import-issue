# nest-js compiler plugin Issue

When we use this import in a [dto](./apps/nest-app/src/app/my.dto.ts):
```typescript
import {Temporal} from "@js-temporal/polyfill";
import Instant = Temporal.Instant;
```

the build fails with:
```
ERROR in ./apps/nest-app/src/app/my.dto.ts 7:148-257
Module not found: Error: Can't resolve '[..]\node_modules\@js-temporal\polyfill\index' in '[..]\apps\nest-app\src\app'

webpack compiled with 1 error (2182caab897fc303)
There was an error with the build. See above.
```
