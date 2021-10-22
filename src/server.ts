import { serverHttp } from "./app";

serverHttp.listen(4000, () => {
  console.log('server is runnig on PORT 4000')
});
