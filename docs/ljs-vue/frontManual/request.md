# 请求
## api请求

```
import { get, put, post, del } from '@/api/axios.js';

export function getInfo(params) {
  return get('/getInfo', params);
}

```

## api请求应用

```
import {
  getInfo
} from '@/api/common/login';
....
getInfo().then((res) => {
  if (res.code === 200) {
    ....
  }
});

```