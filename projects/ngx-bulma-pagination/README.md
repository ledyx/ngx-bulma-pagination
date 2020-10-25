# NgxBulmaPagination

Angular + [Bulma - pagination](https://bulma.io/documentation/components/pagination/)

## Quick Start

1. Install packages

```shell
npm i ngx-bulma-pagination
```

2. Import a module

```typescript
// app.module.ts

...
import { NgxBulmaPaginationModule } from "ngx-bulma-pagination";

@NgModule({
  ...,
  imports: [
    ...,
    NgxBulmaPaginationModule
  ],
  ...
})
export class AppModule { }
```

3. Using a component

```html
<ngx-bulma-pagination ...></ngx-bulma-pagination>
```