import { Wove, Metadata, MethodMetadata, beforeMethod, afterMethod, beforeGetter, afterSetter, afterGetter, beforeStaticMethod } from '../aspect.js/lib/index';
import { MyServer } from './MyServer';
/*
class CacheAspect {
  @beforeMethod({ classNamePattern: /^(\w+Mapper|Http)$/, methodNamePattern: /^get/ })
  @beforeStaticMethod({ classNamePattern: /^(\w+Mapper|Http)$/, methodNamePattern: /^get/ })
  before(meta: Metadata) {
    console.log(`Inside CacheAspect.before for ${meta.className}.${meta.method.name} with args ${meta.method.args.join(', ')}`);
  }
  @afterMethod({ classNamePattern: /^(\w+Mapper|Http)$/, methodNamePattern: /^get/ })
  @afterGetter({ classNamePattern: /^(\w+Mapper|Http)$/, fieldNamePattern: /^get/ })
  after(meta: Metadata) {
    console.log(`Inside CacheAspect.after for ${meta.className}.${meta.method.name} with args ${meta.method.args.join(', ')}`);
  }
}
*/
class LoggerAspect {
  @beforeMethod({ classNamePattern: /.*/, methodNamePattern: /^get/ })
  @beforeGetter({ classNamePattern: /.*/, fieldNamePattern: /^get/ })
  before(meta: Metadata) {
    console.log(`Inside LoggerAspect.before for ${meta.className}.${meta.method.name} with args ${meta.method.args.join(', ')}`);
  }
  @afterMethod({ classNamePattern: /.*/, methodNamePattern: /^get/ })
  @afterGetter({ classNamePattern: /.*/, fieldNamePattern: /^get/ })
  after(meta: Metadata) {
    console.log(`Inside LoggerAspect.after for ${meta.className}.${meta.method.name} with args ${meta.method.args.join(', ')}`);
  }
  @beforeMethod({ classNamePattern: /.*/, methodNamePattern: /^sayHi/ })
  beforeSayHi(meta: Metadata) {
    console.log(`Prepare to sayHi...`);
  }

  @beforeMethod({ classNamePattern: /^MyServer/, methodNamePattern: /^connect/ })
  @beforeStaticMethod({ classNamePattern: /^MyServer/, methodNamePattern: /^connect/ })
  beforeConnect(meta: Metadata) {
    console.log(`Prepare to connect...`);
  }

}

@Wove()
class Http {
  get(url) {
    console.log(`Called Http.get with url = ${url}`)
  }
  post(url, data) {
    console.log(`Called Http.post with url = ${url}`);
  }
}

@Wove()
class UserMapper {
  constructor(private http: Http) { }
  get(id: number) {
    console.log(`Called UserMapper.get with id = ${id}`);
    this.http.get('http://foo.bar');
    return 'result';
  }
  foo() {
    console.log('bar');
  }
  get getfield() {
    this.foo();
    return 42;
  }
  static getUserMapper() {
    console.log('Inside getUserMapper');
    return 42;
  }
  sayHi() {
    console.log('[mapper.sayHi]')
  }
}

//let mapper = new UserMapper(new Http());
// mapper.sayHi()
// console.log(mapper.get(42));
// console.log(mapper.getfield);
//console.log(UserMapper.getUserMapper())


MyServer.connect()